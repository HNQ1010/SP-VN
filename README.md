# SP-VN Procurement Proposal

Role-specific proposal for Nguyen Quoc Hung's application to the Bilingual Sourcing &
Procurement Specialist (Vietnam) contract.

Production target: [sp-vn.corepathfocus.com](https://sp-vn.corepathfocus.com)

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The site is a static Vite build served by Nginx in Docker on the shared `corepath_edge`
network. It deliberately contains no direct contact information so the link can be shared
during an Upwork pre-contract conversation.
