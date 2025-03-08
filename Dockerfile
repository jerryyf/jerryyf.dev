FROM node:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN --mount=type=secret,id=NEXT_PUBLIC_AWS_REGION,env=NEXT_PUBLIC_AWS_REGION \
    --mount=type=secret,id=NEXT_PUBLIC_AWS_ACCESS_KEY_ID,env=NEXT_PUBLIC_AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,env=NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY \
    --mount=type=secret,id=NEXT_PUBLIC_LAMBDA_FUNCTION_NAME,env=NEXT_PUBLIC_LAMBDA_FUNCTION_NAME \
    pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]