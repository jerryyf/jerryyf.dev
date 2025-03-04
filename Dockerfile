FROM node:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN --mount=type=secret,id=AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=AWS_SECRET_ACCESS_KEY \
    --mount=type=secret,id=AWS_REGION \
    --mount=type=secret,id=LAMBDA_FUNCTION_NAME \
    export AWS_ACCESS_KEY_ID=$(cat /run/secrets/AWS_ACCESS_KEY_ID) && \
    export AWS_SECRET_ACCESS_KEY=$(cat /run/secrets/AWS_SECRET_ACCESS_KEY) && \
    export AWS_REGION=$(cat /run/secrets/AWS_REGION) && \
    export LAMBDA_FUNCTION_NAME=$(cat /run/secrets/LAMBDA_FUNCTION_NAME) && \
    pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]