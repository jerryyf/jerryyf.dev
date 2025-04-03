# jerryyf.dev

## Dependencies

- nodejs
- pnpm

## Development

### Starting dev server

```bash
pnpm dev
```

### Building and starting prod server

```bash
pnpm build
pnpm start
```

### With Docker

```bash
docker build -t portfolio .
docker run -p 127.0.0.1:3000:3000 portfolio:latest
```