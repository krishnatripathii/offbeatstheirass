import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const outDir = path.resolve("./screenshots");

const viewports = [
  { name: "375-mobile", width: 375, height: 812 },
  { name: "768-tablet", width: 768, height: 1024 },
  { name: "1440-desktop", width: 1440, height: 900 },
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 600));

    // Capture Above-the-Fold Viewport
    await page.screenshot({ path: path.join(outDir, `${vp.name}-viewport.png`) });

    // Scroll to contact and capture CTA section
    await page.evaluate(() => {
      document.querySelector("#contact")?.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(outDir, `${vp.name}-contact.png`) });

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 300));

    // Full page screenshot
    await page.screenshot({ path: path.join(outDir, `${vp.name}-full.png`), fullPage: true });

    await page.close();
  }

  await browser.close();
  console.log("Captured viewports cleanly!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
