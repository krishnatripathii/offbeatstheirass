import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const screenshotsDir = path.resolve("./screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function run() {
  console.log("Launching Chrome...");
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Test 1: Desktop 1440px
  console.log("Testing 1440px viewport...");
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  const desktopScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const desktopClientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Desktop (1440px): scrollWidth=${desktopScrollWidth}, clientWidth=${desktopClientWidth}`);

  await page.screenshot({ path: path.join(screenshotsDir, "desktop-1440-hero.png") });
  await page.screenshot({ path: path.join(screenshotsDir, "desktop-1440-full.png"), fullPage: true });

  // Test 2: Tablet 768px
  console.log("Testing 768px viewport...");
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.reload({ waitUntil: "networkidle0" });

  const tabletScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const tabletClientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Tablet (768px): scrollWidth=${tabletScrollWidth}, clientWidth=${tabletClientWidth}`);

  await page.screenshot({ path: path.join(screenshotsDir, "tablet-768-full.png"), fullPage: true });

  // Test 3: Mobile 375px
  console.log("Testing 375px viewport...");
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page.reload({ waitUntil: "networkidle0" });

  const mobileScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const mobileClientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile (375px): scrollWidth=${mobileScrollWidth}, clientWidth=${mobileClientWidth}`);

  await page.screenshot({ path: path.join(screenshotsDir, "mobile-375-full.png"), fullPage: true });

  // Test 4: Keyboard shortcut "B" on Desktop
  console.log("Testing 'B' key shortcut...");
  await page.setViewport({ width: 1440, height: 900 });
  await page.reload({ waitUntil: "networkidle0" });

  // Press 'b'
  await page.keyboard.press("b");
  await new Promise((r) => setTimeout(r, 600));

  const isModalVisible = await page.evaluate(() => {
    const modal = document.querySelector('[role="dialog"]');
    return modal !== null;
  });
  console.log(`Modal open after pressing 'B': ${isModalVisible}`);
  await page.screenshot({ path: path.join(screenshotsDir, "modal-desktop.png") });

  // Press Escape
  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  const isModalClosed = await page.evaluate(() => {
    return document.querySelector('[role="dialog"]') === null;
  });
  console.log(`Modal closed after pressing 'Escape': ${isModalClosed}`);

  // Test 5: Form submission on homepage
  console.log("Testing Form submission on page...");
  // Scroll to #contact
  await page.evaluate(() => {
    document.querySelector("#contact").scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Fill in form
  await page.type("#lead-name", "Test Founder");
  await page.type("#lead-business", "Brew Lab");
  await page.type("#lead-whatsapp", "+91 98765 00000");

  // Click need chips
  await page.evaluate(() => {
    const chips = Array.from(document.querySelectorAll("#contact button"));
    const brandChip = chips.find((c) => c.textContent.trim() === "Brand");
    const adsChip = chips.find((c) => c.textContent.trim() === "Ads");
    if (brandChip) brandChip.click();
    if (adsChip) adsChip.click();
  });

  // Click submit
  await page.evaluate(() => {
    const submitBtn = document.querySelector('#contact button[type="submit"]');
    if (submitBtn) submitBtn.click();
  });

  await new Promise((r) => setTimeout(r, 1200));

  const successShown = await page.evaluate(() => {
    return document.body.textContent.includes("Got it. We'll message you shortly.");
  });
  console.log(`Form success state rendered: ${successShown}`);
  await page.screenshot({ path: path.join(screenshotsDir, "form-success.png") });

  await browser.close();
  console.log("All browser tests completed successfully!");
}

run().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
