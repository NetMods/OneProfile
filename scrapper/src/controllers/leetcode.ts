import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";

puppeteer.use(StealthPlugin());

export const leetcode = async (request: Request, response: Response): Promise<any> => {
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

    try {
      await page.waitForSelector('a[href^="/submissions/detail/"]', { timeout: 15000 });
    } catch {
      return response.status(404).json({
        success: false,
        error: "URL not found"
      })
    }

    await page.evaluate(() => {
      const showMoreButtonOne = document.querySelector('.lc-lg\\:w-\\[300px\\] > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1)') as HTMLElement
      const showMoreButtonTwo = document.querySelector('.lc-lg\\:w-\\[300px\\] > div:nth-child(8) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(1)') as HTMLElement
      const showMoreButtonThree = document.querySelector('.lc-lg\\:w-\\[300px\\] > div:nth-child(8) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > span:nth-child(1)') as HTMLElement

      showMoreButtonOne.click()
      showMoreButtonTwo.click()
      showMoreButtonThree.click()
    })

    const data = await page.evaluate(() => {

      const problemsTag = [...document.querySelectorAll('div.mb-3.mr-4.inline-block.text-xs')]

      const languagesElement = [...document.querySelectorAll('div.mt-4:nth-child(6) > div')]

      return {
        contest: {
          rating: document.querySelector('div[class="text-label-1 dark:text-dark-label-1 flex items-center text-2xl"]')?.textContent ?? "null",

          maxRating: document.querySelector('g.highcharts-annotation:nth-child(13) > g:nth-child(2) > g:nth-child(1) > text:nth-child(2)')?.textContent ?? "null",

          globalRank: document.querySelector('div.lc-md\\:min-w-none:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)')?.textContent ?? "null",

          attended: document.querySelector('div.lc-md\\:min-w-none:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)')?.textContent ?? "null",

          beats: document.querySelector('div.lc-md\\:min-w-none:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')?.textContent ?? "null",
        },

        badges: document.querySelector('.mt-1\\.5')?.textContent ?? "null",

        totalActiveDays: document.querySelector('.mr-4\\.5 > span:nth-child(2)')?.textContent ?? "null",

        problems: {
          total: document.querySelector('div.text-sd-foreground:nth-child(1) > div:nth-child(1) > span:nth-child(1)')?.textContent ?? "null",

          easy: document.querySelector('div.bg-\\[rgba\\(0\\,0\\,0\\,0\\.02\\)\\]:nth-child(1) > div:nth-child(2)')?.textContent ?? "null",

          medium: document.querySelector('div.rounded-sd-sm:nth-child(2) > div:nth-child(2)')?.textContent ?? "null",

          hard: document.querySelector('div.rounded-sd-sm:nth-child(3) > div:nth-child(2)')?.textContent ?? "null",
        },

        problemsCategory: {
          dp: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Dynamic Programming"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          backtracking: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Backtracking"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          divideAndConquer: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Divide and Conquer"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          hashTable: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Hash Table"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          dfs: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Depth-First Search"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          bfs: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Breadth-First Search"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          tree: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Tree"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          binarySearch: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Binary Search"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          greedy: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Greedy"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          linkedlist: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Linked List"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",

          math: problemsTag.find(div => div.querySelector('a')?.textContent.includes("Math"))?.querySelector('span.pl-1.text-xs.text-label-3')?.textContent.substring(1) ?? "null",
        },

        languages: languagesElement.reduce<Record<string, string>>((finalObject, currentElement) => {
          const name = currentElement.querySelector('div.text-xs > span').textContent
          const count = currentElement.querySelector('div.flex > span:nth-child(1)').textContent

          finalObject[name] = count;

          return finalObject
        }, {})
      }
    });

    return response.status(200).json({
      success: true,
      scrappedData: data,
    });

  } catch (error) {
    console.log(error.message);

    return response.status(500).json({
      success: false,
      error: error.message,
    });
  } finally {
    await browser.close();
  }
};
