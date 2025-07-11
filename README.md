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

### Docker

```bash
docker buildx build -t jerryyf.dev .
docker run -p 127.0.0.1:3000:3000 jerryyf.dev:latest
```