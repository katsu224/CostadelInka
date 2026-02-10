import { test, expect } from '@playwright/test';

test.describe('Content Verification', () => {
  
  test('Homepage should have Hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('COSTA DEL INKA');
    await expect(page.locator('text=Nuevo Chimbote')).toBeVisible();
  });

  test('About page should show Mission and Vision', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByRole('heading', { name: 'Misión' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Visión' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Valores' })).toBeVisible();
  });

  test('Rooms page should list 3 types', async ({ page }) => {
    await page.goto('/room');
    await expect(page.locator('h2', { hasText: 'Habitación Doble' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Habitación Matrimonial' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Suite Ejecutiva' })).toBeVisible();
  });

  test('Contact form should handle submission', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    await page.click('button[type="submit"]');
    
    // Check for success message (client-side mock)
    await expect(page.locator('#form-success')).toBeVisible({ timeout: 5000 });
  });

});
