import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: Request) {
  const data = await request.json();
  const username = data.username;

  const LEETCODE_URL = `https://leetcode.com/u/${username}/`;

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(LEETCODE_URL, {
    waitUntil: "domcontentloaded",
  });

  const scrappedData = await page.evaluate(() => {
    const element = document.querySelector(".text-base.font-medium.leading-6");

    return element ? element.textContent : null;
  });

  await browser.close();

  return NextResponse.json({
    scrappedData,
  });
}
