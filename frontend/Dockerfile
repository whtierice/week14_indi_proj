FROM node:18-alpine AS dev-frontend
WORKDIR /app
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY frontend .
EXPOSE 5173
CMD ["yarn", "dev"]
