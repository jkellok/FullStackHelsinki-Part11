const { test, describe, expect } = require('@playwright/test')

describe('Phonebook', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('Phonebook')).toBeVisible()
    await expect(page.getByText('Add a new person')).toBeVisible()
  })
})