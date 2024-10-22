import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { Request, Response } from "express";
import { executablePath } from "puppeteer";
puppeteer.use(StealthPlugin());

const geeksforgeek = async (request: Request, response: Response) => {
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

  try{
      const page = await browser.newPage();
      const userAgent =
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36";
      await page.setUserAgent(userAgent);
      await page.goto(GFG_URL)

      const data = await page.evaluate(()=>{
        return {
          InstituteName: document.querySelector(".educationDetails_head_left--text__tgi9I")?.textContent ?? "null",
          InstituteRank:
            document
              .querySelector(".educationDetails_head_left_userRankContainer--text__wt81s")
              ?.textContent.split(" ")[0] ?? "null",
          totalProblems: document.querySelectorAll(".scoreCard_head_left--score__oSi_x")[1]?.textContent ?? "null",
          contestRating: document.querySelectorAll(".scoreCard_head_left--score__oSi_x")[2]?.textContent ?? "null",
          easyProblems: document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[2]?.textContent.match(/\d+/)[0] ?? "null",
          mediumProblems: document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[3]?.textContent.match(/\d+/)[0] ?? "null",
          hardProblems : document.querySelectorAll(".problemNavbar_head_nav--text__UaGCx")[4]?.textContent.match(/\d+/)[0] ?? "null",
        };
      })

      

      response.status(200).json({
        scrappedData : data,
      });

  } catch(e){
      console.log(e)
      return response.status(500).json({
          msg : e.message
      })

  } finally {
      browser.close();
      console.log("Browser Closed")
  }
};

export default geeksforgeek;
