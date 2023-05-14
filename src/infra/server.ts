import { app } from "./app";

async function bootstrap() {
  await app.listen({ host: '0.0.0.0', port: 3333 })

  console.log('🚀 server started at port 3333')
}

bootstrap()
