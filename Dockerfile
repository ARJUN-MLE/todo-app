FROM node:24-slim AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "run", "start"]
