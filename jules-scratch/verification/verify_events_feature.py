import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            # Navigate to the local development server
            await page.goto("http://localhost:3000")

            # Find the "Events" link in the navigation and click it
            events_link = page.get_by_role("link", name="Events")
            await expect(events_link).to_be_visible()
            await events_link.click()

            # Wait for the "Events" section to be visible
            events_section = page.locator("#events")
            await expect(events_section).to_be_visible()

            # Take a screenshot of the events section
            await page.screenshot(path="jules-scratch/verification/events_feature.png")

            print("Screenshot taken successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())