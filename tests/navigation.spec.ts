import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to About page", async ({ page }) => {
    await page.click("nav >> text=Nosotros");
    await expect(page).toHaveURL(/about/);
    await expect(page.locator("h1")).toContainText("Nuestra Historia");
  });

  test("should navigate to Rooms page", async ({ page }) => {
    await page.click("nav >> text=Habitaciones");
    await expect(page).toHaveURL(/room/);
    await expect(page.locator("h1")).toContainText("Nuestras Habitaciones");
  });

  test("should navigate to Services page", async ({ page }) => {
    await page.click("nav >> text=Servicios");
    await expect(page).toHaveURL(/service/);
    await expect(page.locator("h1")).toContainText("Nuestros Servicios");
  });

  test("should navigate to Contact page", async ({ page }) => {
    await page.click("nav >> text=Contacto");
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator("h1")).toContainText("Contacto"); // PageHeader title
  });

  test("should verify footer links", async ({ page }) => {
    await page.click("footer >> text=Restaurante");
    await expect(page).toHaveURL(/restaurant/);
    await page.goBack();

    await page.click("footer >> text=Sala de Eventos");
    await expect(page).toHaveURL(/evento/);
  });
});
