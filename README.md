# HonoProxy

## Description

A simple proxy application

## Test

```txt
bun run dev
```

## Deploy

configure the `name` in  `wrangler.jsonc`, which is the domain in cloudflare worker like `xxxx.<username>.workers.dev`

```txt
bun run deploy
```

## Usage

If there are some free service that cannot custom domain, we can custom it via this project