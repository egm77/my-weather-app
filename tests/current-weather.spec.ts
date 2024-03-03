import { test, expect } from '@playwright/test';
import { WEATHER_URL } from '../src/app/api-layer/weather/endpoints';
import { FOUR_DAYS_ROUTE } from '../src/app/constants/routes.constants';
import { MOCK_CURRENT_FORECAST } from './fixtures/current-weather.fixture.spec';

test.describe('Current weather', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(WEATHER_URL(50.8551729, 4.340312), async (route) => {
      await route.fulfill({ json: MOCK_CURRENT_FORECAST });
    });
    await page.goto(`http://localhost:4200/`);
  });

  test('Show Current weather', async ({ page }) => {
    await expect(
      page.getByText('Sant Pere, Santa Caterina i La Ribera'),
    ).toBeVisible();
    await expect(page.getByText('Sunday, March 3')).toBeVisible();
    await expect(page.getByRole('img', { name: 'few clouds' })).toBeVisible();
    await expect(page.getByText('few clouds')).toBeVisible();
    await expect(page.getByText('Feels like: 14°')).toBeVisible();
    await expect(page.getByText('High: 17°')).toBeVisible();
    await expect(page.getByText('Low: 13°')).toBeVisible();
  });

  test.describe('and click on navbar', () => {
    test('Redirect to forecast', async ({ page }) => {
      await page.getByRole('link', { name: 'Forecast' }).click();

      await expect(page).toHaveURL(`http://localhost:4200/${FOUR_DAYS_ROUTE}`);
    });
  });
});
