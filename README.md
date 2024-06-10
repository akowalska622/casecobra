This is a [Next.js](https://nextjs.org/) portfolio project, containing demo shop with product customization, sandbox payments and admin dashboard.

## Stack

| **Aspect**              | **Tool/Framework**  |
|:------------------------|:--------------------|
| Framework               | NextJS 14           |
| Styles                  | Tailwind CSS        |
| Component library       | shadcn/ui           |
| Database                | PostreSQL           |
| ORM                     | Prisma              |
| Fetching library        | React Query         |
| Hosting images          | Uploadthing         |
| Payments                | Stripe              |
| Authorization           | Kinde               |
| Deployment              | Vercel              |

## Getting Started

Visit the [production deployment](https://casecobra-ruddy.vercel.app/)

or setup the local environment

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Create .env file and following .env.example fill it with your own credentials.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About project

This project is a demo of phone cases shop. It contains landing page, case customization tool and admin dashboard.

### Phone customization

Follow the steps after clicking "create case" to upload your own image and place it in the desired place on the phone.

### Payments

In order to create a test payment (you won't be asked to pass your real credentials and it won't charge you) you need to pass address data (can/should be fake), card number 4242 4242 4242 4242, future expiring date and any 3 digits in CVV code.

### Admin dashboard

In order to access admin dashboard you need to setup project locally and change email in .env file
