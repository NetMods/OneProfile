import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin());

export const codeforces = async (request: Request, response: Response): Promise<any> => {
  const { username } = request.body;

  const CODEFORCES_URL = `https://codeforces.com/profile/${username}`

  const browser = await puppeteer.launch({
    args: [
      "--use-gl=angle",
      "--use-angle=swiftshader",
      "--single-process",
      "--no-sandbox",
      '--auto-open-devtools-for-tabs',
      "--disable-notifications",
      "--window-size=1280,720",
      "--disable-dev-shm-usage"
    ],
    headless: true,
    executablePath: executablePath(),
    targetFilter: (target) => target.type() !== 'other'
  })

  try {
    const page = await browser.newPage();

    const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";

    await page.setUserAgent(userAgent)

    await page.goto(CODEFORCES_URL);

    await page.waitForSelector(".flot-overlay", { timeout: 10000 })

    const data = await page.evaluate(() => {
      return {
        rating: document.querySelector('.info > ul:nth-child(3) > li:nth-child(1) > span:nth-child(2)')?.textContent ?? "null",

        maxRating: document.querySelector('span.smaller > span:nth-child(2)')?.textContent ?? "null",

        totalProblems: document.querySelector('div._UserActivityFrame_countersRow:nth-child(1) > div:nth-child(1) > div:nth-child(1)')?.textContent ?? "null",

        lastYearProblems: document.querySelector('div._UserActivityFrame_countersRow:nth-child(1) > div:nth-child(2) > div:nth-child(1)')?.textContent ?? "null"
      }
    })

    return response.status(200).json({ scrapped: data });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  } finally {
    await browser.close();
    console.log("Browser closed");
  }
}

