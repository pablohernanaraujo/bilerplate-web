This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Code Quality Tools

This project comes with the following code quality tools configured:

- **ESLint**: For code linting and enforcing code style rules
  - [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks): Enforces rules of hooks and exhaustive dependencies
  - [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn): Provides additional ESLint rules for better code quality
  - [Import](https://github.com/lydell/eslint-plugin-simple-import-sort): Manages import sorting and organization
- [**Prettier**](https://github.com/prettier/prettier): For code formatting and maintaining consistent code style

You can run the linter with:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## VSCode Settings

For optimal development experience, it's recommended to use the following VSCode settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.enable": true,
  "eslint.run": "onType",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
