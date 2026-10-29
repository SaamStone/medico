# Medico launch decisions

- Storage cap per plan: founder to decide; default none.
- Final prices, credit amounts and plan limits: placeholders, centralise in config.
- Product name and logo are placeholders.
- Confirm GST treatment and registration details.
- Set real AI and document-reading costs after provider evaluation.
- Legal review: privacy, DPDP consent, children's data, blood-section rules, AI and medical-software rules.
- Confirm provider data-processing terms for medical documents.
- Estimate fixed costs and marketing budget.
- Verify Razorpay QR fees before launch.
- v2: phone OTP, doctor and hospital finder, UPI AutoPay, authenticator 2FA, push/WhatsApp, more languages, mobile app.

## Phase 1 status

Website prototype drafted with a landing page, pricing, demo account flow, dashboard, records, people, lab, blood, AI, billing and settings screens. Core interactions use mock services and browser demo storage. Legal copy remains placeholder material for review. No production database or live service is connected.

## Product direction (confirmed)

- Website first; a mobile app follows later and should use the same API and product concepts.
- Defer connecting the production database until the application development is complete. Until then, use mock adapters and local demo data; keep types and service boundaries ready for a later database adapter.
- “Medico” is a temporary working name. Keep the product name in one config value when configuration is introduced.
- The later mobile app should offer opt-in fitness data connections, including Apple HealthKit on Apple devices and Android Health Connect. Google Fit's developer APIs are being deprecated in 2026; prefer Health Connect for Android mobile integrations rather than starting a new Google Fit API integration.
- Plan to show connected-source fitness data on the website with source, date/time, units and sync status, after the mobile app syncs it to the shared API.
- Future fitness metrics may include steps, distance/runs/workouts, active calories, height and weight. Add new types only where supported and permissioned by the source.
- The AI may use the user's health records, blood group and fitness data only with clear consent and appropriate access controls. Fitness and clinical record data should remain distinguishable and show their source.
