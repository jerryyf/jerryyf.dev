FROM node:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN --mount=type=secret,id=AWS_ACCESS_KEY_ID,env=AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=AWS_SECRET_ACCESS_KEY,env=AWS_SECRET_ACCESS_KEY \
    --mount=type=secret,id=AWS_REGION,env=AWS_REGION \
    --mount=type=secret,id=LAMBDA_FUNCTION_NAME,env=LAMBDA_FUNCTION_NAME \
    pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]