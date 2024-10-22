import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin());

export const leetcode = async (request: Request, response: Response) => {
  const { username } = request.body;

  const LEETCODE_URL = `https://leetcode.com/u/${username}/`;

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
  });

  try {
    const page = await browser.newPage();

    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";
    await page.setUserAgent(userAgent);

    await page.goto(LEETCODE_URL);

    await page.waitForSelector('a[href^="/submissions/detail/"]', { timeout: 15000 });

    const data = await page.evaluate(() => {
      return {
        rating: document.querySelector('div[class="text-label-1 dark:text-dark-label-1 flex items-center text-2xl"]')?.textContent ?? "null",

        globalRank: document.querySelector('div.lc-md\\:min-w-none:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)')?.textContent ?? "null",

        attendedContests: document.querySelector('div.lc-md\\:min-w-none:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)')?.textContent ?? "null",

        beats: document.querySelector('div.lc-md\\:min-w-none:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')?.textContent ?? "null",

        badges: document.querySelector('.mt-1\\.5')?.textContent ?? "null",

        totalProblems: document.querySelector('div.text-sd-foreground:nth-child(1) > div:nth-child(1) > span:nth-child(1)')?.textContent ?? "null",

        easyProblems: document.querySelector('div.bg-\\[rgba\\(0\\,0\\,0\\,0\\.02\\)\\]:nth-child(1) > div:nth-child(2)')?.textContent ?? "null",

        mediumProblems: document.querySelector('div.rounded-sd-sm:nth-child(2) > div:nth-child(2)')?.textContent ?? "null",

        hardProblems: document.querySelector('div.rounded-sd-sm:nth-child(3) > div:nth-child(2)')?.textContent ?? "null",

        totalActiveDays: document.querySelector('.mr-4\\.5 > span:nth-child(2)')?.textContent ?? "null",
      }
    });

    return response.status(200).json({
      scrappedData: data,
    });

  } catch (error) {
    console.log(error.message);

    return response.status(500).json({
      error: error.message,
    });
  } finally {
    await browser.close();
    console.log("Browser closed");
  }
};
