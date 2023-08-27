FROM docker.io/node:18-alpine AS builder

COPY . /app

RUN apk add --no-cache bash curl

RUN curl -fsSL https://bun.sh/install | bash
RUN export BUN_INSTALL="$HOME/.bun"
RUN export PATH="$BUN_INSTALL/bin:$PATH"

RUN cd /app && bun install
RUN cd /app && bun run build

FROM docker.io/oven/bun

COPY --from=builder /app/.output/ /app
COPY --from=builder /app/nuxt.config.ts /nuxt.config.ts

LABEL org.opencontainers.image.authors "Gaspard Wierzbinski (https://cpluspatch.com)"
LABEL org.opencontainers.image.source "https://github.com/Uden-AI/joinmastodon"
LABEL org.opencontainers.image.vendor "Uden AI"
LABEL org.opencontainers.image.licenses "GPL-3.0"
LABEL org.opencontainers.image.title "Join-Mastodon.de"
LABEL org.opencontainers.image.description ""

CMD ["bun", "/app/server/index.mjs"]
