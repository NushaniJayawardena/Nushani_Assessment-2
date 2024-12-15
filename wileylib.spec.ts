//importing 'test' and 'expect'modules from playwright testing library

import { test, expect } from '@playwright/test';

//test case to Verify navigation to the login page on clicking individual login

test('Verify navigation to the login page on clicking individual login', async ({ page }) => {
  // Navigate to the Wiley website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Locate the Login/Register button and click to open the dropdown
  const loginRegisterButton = page.locator('button[aria-label="Log in or Register"]');
  await expect(loginRegisterButton).toBeVisible(); // Ensure the button is visible
  await loginRegisterButton.click();

  // Click on "Individual login"
  const individualLoginOption = page.locator('a[href="/action/showLogin?acdl-redirect=true&uri=%2F"]');
  await expect(individualLoginOption).toBeVisible(); // Ensure the option is visible
  await individualLoginOption.click();

  // Verify navigation to the login page
  await expect(page).toHaveURL(/.*action\/showLogin.*/); // Allow flexibility for query parameters
});

//test case to Check Advanced search navigation

test('Check Advanced search navigation', async ({ page }) => {
  // Navigate to the Wiley website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click on the "Advanced search" link
  const advancedSearchLink = page.getByRole('link', { name: 'Advanced search' });
  await expect(advancedSearchLink).toBeVisible(); // Ensure the link is visible
  await advancedSearchLink.click();

  // Verify navigation to the Advanced search page
  const currentURL = page.url(); // Get the current URL
  expect(currentURL).toContain('/search/advanced'); // Verify that it includes the expected path
});

//test case to Verify login dropdown visibility when clicking on the Login/Register label

test('Verify login dropdown visibility when clicking on the Login/Register label', async ({ page }) => {
  // Navigate to the Wiley website
  await page.goto('https://onlinelibrary.wiley.com/');

  // Locate the Login/Register button and click to open the dropdown
  const loginRegisterButton = page.locator('button[aria-label="Log in or Register"]');
  await expect(loginRegisterButton).toBeVisible(); // Ensure the button is visible
  await loginRegisterButton.click();

  // Verify the dropdown becomes visible
  const loginDropdown = page.locator('.navigation-login-dropdown-container');
  await expect(loginDropdown).toBeVisible(); // Ensure the dropdown is visible
});
