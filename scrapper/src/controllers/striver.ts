
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin());

export const striver = async (request: Request, response: Response): Promise<any> => {
  const { username } = request.body;

  const CODEFORCES_URL = `https://takeuforward.org/profile/${username}`

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
  })

  try {
    const page = (await browser.pages())[0];

    const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";

    await page.setUserAgent(userAgent)

    await page.goto(CODEFORCES_URL);

    try {
      await page.waitForSelector("span.mt-3", { timeout: 10000 })
    } catch {
      return response.status(404).json({
        success: false,
        error: "URL not found"
      })
    }


    const data = await page.evaluate(() => {
      return {
        a2z: document.querySelector('a.flex-col:nth-child(1) > svg:nth-child(1) > text:nth-child(3)')?.textContent ?? "null",

        sde: document.querySelector('a.flex:nth-child(2) > svg:nth-child(1) > text:nth-child(3)')?.textContent ?? "null",

        last79: document.querySelector('a.flex:nth-child(3) > svg:nth-child(1) > text:nth-child(3)')?.textContent ?? "null",
      }
    })

    return response.status(200).json({
      success: true,
      scrappedData: data,
    });

  } catch (error) {
    console.log(error)

    return response.status(500).json({
      success: false,
      error: error.message
    })

  } finally {
    browser.close();
  }
};

