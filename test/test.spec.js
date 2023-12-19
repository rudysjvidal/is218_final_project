const { test, expect } = require('@playwright/test');

const expectedHeroLinkCount = 1;
const expectedSubscribeButtonText = 'Subscribe';

test('Navbar exists and navigates correctly', async ({ page }) => {
    // Navigate to your application
    await page.goto('http://localhost:3000/');

    // Check if the navbar is present
    const navbar = await page.locator('.menu'); // Adjust the selector as needed
    await expect(navbar).toBeVisible();

    // Check for specific links in the navbar
    const items = navbar.locator('a');
    const itemCount = await items.count();
    expect(itemCount).toBe(4);
});