import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            # Navigate to the local development server
            await page.goto("http://localhost:3000")

            # Find the "Gallery" link in the navigation and click it
            gallery_link = page.get_by_role("link", name="Gallery")
            await expect(gallery_link).to_be_visible()
            await gallery_link.click()

            # Wait for the "Gallery" section to be visible
            gallery_section = page.locator("#gallery")
            await expect(gallery_section).to_be_visible()

            # Take a screenshot of the gallery section
            await page.screenshot(path="jules-scratch/verification/gallery_feature.png")

            print("Screenshot taken successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())