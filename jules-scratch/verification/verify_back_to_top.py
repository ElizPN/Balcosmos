from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")
    page.evaluate("window.scrollTo(0, 500)")
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()
