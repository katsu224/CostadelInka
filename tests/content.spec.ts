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

  test('Rooms listing page should show all room types', async ({ page }) => {
    await page.goto('/room');
    await expect(page.locator('h2', { hasText: 'Habitación Individual' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Habitación Doble' })).toBeVisible();
    await expect(page.locator('h2', { hasText: 'Habitación Superior' })).toBeVisible();
  });

  test('Room detail page should show gallery and CTA buttons', async ({ page }) => {
    await page.goto('/rooms/habitacion-doble');
    await expect(page.locator('h1')).toContainText('Habitación Doble');
    await expect(page.locator('text=Reservar en Booking')).toBeVisible();
    await expect(page.locator('text=Consultar por WhatsApp')).toBeVisible();
    await expect(page.locator('.gallery-thumb')).toHaveCount(4);
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
