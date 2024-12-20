
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin());

export const codechef = async (request: Request, response: Response): Promise<any> => {
  const { username } = request.body;

  const CODECHEF_URL = `https://www.codechef.com/users/${username}`

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

    await page.goto(CODECHEF_URL);

    try {
      await page.waitForSelector("#js-heatmap > svg:nth-child(1)", { timeout: 10000 })
    } catch {
      return response.status(404).json({
        success: false,
        error: "URL not found"
      })
    }


    const data = await page.evaluate(() => {
      return {
        contest: {
          rating: document.querySelector('.rating-number')?.textContent ?? "null",

          maxRating: document.querySelector('.rating-header > small:nth-child(5)')?.textContent ?? "null",

          globalRank: document.querySelector('.inline-list > li:nth-child(1) > a:nth-child(1) > strong:nth-child(1)')?.textContent ?? "null",

          countryRank: document.querySelector('.inline-list > li:nth-child(2) > a:nth-child(1) > strong:nth-child(1)')?.textContent ?? "null",

          attended: document.querySelector('.contest-participated-count > b:nth-child(1)')?.textContent ?? "null",
        },

        stars: document.querySelector('span.rating')?.textContent ?? "null",

        problems: {
          total: document.querySelector('section.rating-data-section:nth-child(5) > h3:nth-child(15)')?.textContent.match(/\d+/)[0] ?? "null"
        }
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

