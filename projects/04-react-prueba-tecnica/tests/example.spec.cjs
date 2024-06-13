// @ts-check
import { test, expect } from '@playwright/test'

const URL_TO_TEST = 'http://localhost:5173'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

test('Renders content', async ({ page }) => {
  await page.goto(URL_TO_TEST)

  const paragraph = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const paragraphText = await paragraph.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(paragraphText?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
