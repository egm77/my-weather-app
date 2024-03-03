import { test, expect } from '@playwright/test';
import { MOCK_FORECAST_RESPONSE } from './fixtures/forecast.fixture.specs';
import { FORECAST_URL } from '../src/app/api-layer/weather/endpoints';
import { FOUR_DAYS_ROUTE } from '../src/app/constants/routes.constants';

test.describe('forecast', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(FORECAST_URL(50.8551729, 4.340312), async (route) => {
      await route.fulfill({ json: MOCK_FORECAST_RESPONSE });
    });
    await page.goto(`http://localhost:4200/${FOUR_DAYS_ROUTE}`);
  });

  test('Show forecast', async ({ page }) => {
    await expect(page.getByText('March 47ºC4ºC10ºC')).toBeVisible();
    await expect(page.getByText('March 57ºC5ºC10ºC')).toBeVisible();
    await expect(page.getByText('March 66ºC4ºC10ºC')).toBeVisible();
    await expect(page.getByText('March 75ºC3ºC7ºC')).toBeVisible();
  });

  test.describe('and click on forecast', () => {
    test('Show weather', async ({ page }) => {
      await page.getByText('March 57ºC5ºC10ºC').click();

      await expect(page.getByText('Koekelberg')).toBeVisible();
      await expect(page.getByText('Tuesday, March 5')).toBeVisible();
      await expect(page.getByText('High: 10°')).toBeVisible();
      await expect(page.getByText('Low: 5°')).toBeVisible();
    });
  });

  test.describe('and click on navbar', () => {
    test('Redirect to weather', async ({ page }) => {
      await page.getByRole('link', { name: 'Current weather' }).click();

      await expect(page).toHaveURL('http://localhost:4200/');
    });
  });
});
