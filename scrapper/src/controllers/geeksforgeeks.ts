import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";
puppeteer.use(StealthPlugin());

export const geeksforgeeks = async (request: Request, response: Response): Promise<any> => {
  const { username } = request.body;

  const GFG_URL = `https://www.geeksforgeeks.org/user/${username}`;

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

    await page.setUserAgent(userAgent);

    await page.goto(GFG_URL)

    try {
      await page.waitForSelector('#cal-heatmap', { timeout: 3000 })
    } catch {
      return response.status(404).json({
        success: false,
        error: "URL not found"
      })
    }

    const data = await page.evaluate(() => {
      return {
        institute: {
          name: document.querySelector(".educationDetails_head_left--text__tgi9I")?.textContent ?? "null",

          rank: document.querySelector(".educationDetails_head_left_userRankContainer--text__wt81s")?.textContent.split(" ")[0] ?? "null",
        },

        contest: {
          rating: document.querySelector("span.contestDetailsCard_head_detail__8P4Vo:nth-child(1) > span:nth-child(2)")?.textContent ?? "null",

          globalRank: document.querySelector('span.contestDetailsCard_head_detail__8P4Vo:nth-child(3) > span:nth-child(2)')?.textContent ?? "null",

          attended: document.querySelector('span.contestDetailsCard_head_detail__8P4Vo:nth-child(4) > span:nth-child(2)')?.textContent ?? "null",

          beats: document.querySelector('.contestDetailsCard_head__0MvGa > p:nth-child(5)')?.textContent.match(/[\d]{2}\.[\d]{2}\%/) ?? "null"
        },

        problems: {
          total: document.querySelectorAll(".scoreCard_head_left--score__oSi_x")[1]?.textContent ?? "null",

          easy: document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[2]?.textContent.match(/\d+/)[0] ?? "null",

          medium: document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[3]?.textContent.match(/\d+/)[0] ?? "null",

          hard: document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[4]?.textContent.match(/\d+/)[0] ?? "null",
        },

        languages: document.querySelector('.educationDetails_head_right--text__lLOHI')?.textContent.split(',') ?? "null"
      };
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

