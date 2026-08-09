# Tá Pago? (Tapago)

**A minimal fitness tracker for lazy devs.** Mark the days you actually trained, keep the streak honest, close the tab. No streaks-shaming, no subscriptions.

Built because every fitness app I tried was a full-time job. This one is a day picker and a database.

## Stack

- Next.js 14 (App Router)
- React 18, Tailwind CSS, Radix UI
- PostgreSQL via `pg` (API route under `app/api/getDates`)

## Run it

```bash
npm install
# set DATABASE_URL to your PostgreSQL connection string
npm run dev
```

## Status

Personal project, minimal by design. UI text is currently in Portuguese ("Tá Pago?" = "Is it paid?"). The point is the pattern: one honest page, one API route, one table — a complete CRUD loop you can read in an afternoon.
