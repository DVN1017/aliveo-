# Veylan Digital

Site vitrine de Veylan Digital, agence digitale spécialisée en création de sites web, SEO, automatisation et stratégie digitale.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- API de contact avec Resend

## Développement local

```bash
npm install
npm run dev
```

## Configuration du formulaire de contact

Définir `RESEND_API_KEY` dans les variables d'environnement du déploiement. Vérifier également que l'adresse d'expédition utilisée par Resend est autorisée pour le compte et que les demandes arrivent bien à `servicealiveo@gmail.com`.

## Déploiement

Le projet est connecté à Vercel. Les changements sur `main` doivent déclencher le déploiement de production lorsque l'intégration Git est active.
