import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Request, Response } from 'express';

puppeteer.use(StealthPlugin());

export const leetcode = async (request: Request, response: Response) => {
  const { username } = request.body;

  const LEETCODE_URL = `https://leetcode.com/u/${username}/`;

  const browser = await puppeteer.launch({
    args: ["--use-gl=angle", "--use-angle=swiftshader", "--single-process", "--no-sandbox"],
    headless: true,
  });

  try {
    const page = await browser.newPage();

    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36';
    await page.setUserAgent(userAgent);


    await page.goto(LEETCODE_URL);

    await page.waitForSelector('a[href^="/submissions/detail/"]', { timeout: 15000 });

    const data = await page.evaluate(() => {
      let data = { rating: "" }
      const rating = document.querySelector('div[class="text-label-1 dark:text-dark-label-1 flex items-center text-2xl"]').innerHTML
      data.rating = rating
      return data
    })

    return response.status(200).json({
      success: true,
      message: "Scrapped the shit out of it",
      scrappedData: data
    });

  } catch (error) {
    console.log(error)
    return response.status(500).json({
      success: false,
      message: 'Help me',
      error: error.message,
    });

  } finally {
    await browser.close();
    console.log('Browser closed');
  }
};
