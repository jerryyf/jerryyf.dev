FROM node:latest

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN --mount=type=secret,id=aws_region,env=AWS_REGION \
    pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]