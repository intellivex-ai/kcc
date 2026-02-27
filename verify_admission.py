from playwright.sync_api import sync_playwright

def verify_admission_form():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Go to admission page
            page.goto("http://localhost:5174/admission")

            # Wait for the form to appear (loading spinner to disappear)
            page.wait_for_selector('h1:has-text("Online Admission")', timeout=10000)

            # Take screenshot of first step
            page.screenshot(path="admission_step1_loaded.png")
            print("Step 1 screenshot captured")

            # Fill step 1
            page.fill('input[name="fullName"]', "Test User")
            page.fill('input[name="email"]', "test@example.com")
            page.fill('input[name="phone"]', "1234567890")
            page.fill('input[name="dob"]', "2000-01-01")
            page.select_option('select[name="gender"]', "male")

            # Go to next step
            page.click('button:has-text("Next Step")')
            page.wait_for_timeout(1000)

            # Take screenshot of step 2
            page.screenshot(path="admission_step2_loaded.png")
            print("Step 2 screenshot captured")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_admission_form()
