
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Wait for the page to be fully loaded
    page.wait_for_load_state("networkidle")

    # Scroll to the "Biography" section
    page.evaluate("document.getElementById('biography').scrollIntoView()")

    # Wait for the scroll to finish and the active link to update
    page.wait_for_timeout(1000)

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
