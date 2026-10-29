export const productConfig = {
  name: 'Medico', // Temporary working name. Change in one place when branding is final.
  plans: {
    Free: { priceMonthly: 0, priceYearly: 0, people: 1, blocks: 5, aiCredits: 0 },
    Basic: { priceMonthly: 49, priceYearly: 499, people: 3, blocks: 20, aiCredits: 0 },
    Medium: { priceMonthly: 99, priceYearly: 999, people: 5, blocks: 60, aiCredits: 100 },
    High: { priceMonthly: 199, priceYearly: 1999, people: 10, blocks: 150, aiCredits: 400 },
  },
} as const;
