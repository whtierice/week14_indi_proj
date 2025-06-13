# 1) 베이스 이미지
FROM node:18-alpine AS dev-backend

# 2) 작업 디렉토리
WORKDIR /app

# 3) 의존성만 먼저 복사하고 설치
COPY backend/package.json backend/yarn.lock ./
RUN yarn install --frozen-lockfile

# 4) 소스 복사
COPY backend .

# 5) 개발용 포트
EXPOSE 3000

# 6) Dev 모드로 실행 (watch 모드)
CMD ["yarn", "start:dev"]
