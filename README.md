# Medico website prototype

Website-first product prototype for the temporary Medico name. This version uses mock services and browser demo storage. It does not connect to a production database, authentication service, OCR provider, email service, AI model or payment provider.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. The dashboard can be reached from the sign-in screen using the demo button. On the signup screen, use any name/email and a password of at least 10 characters; consent to health data storage is required for the demo flow. The AI demo also requires its separate optional consent in signup or Settings.

## Demo routes

- `/` landing page; `/pricing` plans
- `/login`, `/signup`, `/forgot-password`, `/reset-password`, `/verify-email`
- `/dashboard`, `/records`, `/people`, `/lab`, `/blood`, `/ai`, `/billing`, `/settings`
- `/shared/example` single-record share-page concept
- `GET` and `POST /api/v1/records` versioned mock API using volatile in-memory data

All account, payment and health data here is synthetic demo data. Browser local storage is used for record and plan interactions. The mock API resets when its server process restarts. Do not enter real medical or personal information.

## Architecture direction

Keep the versioned API and adapter interfaces stable while replacing mock implementations after product development. The later mobile app should use the same API. Apple HealthKit and Android Health Connect connectors belong in that app; only user-approved, source-attributed fitness data should sync to the website and be offered to the AI with separate consent.
