import { app } from "./app";
import { env } from "./env";

async function bootstrap() {
  await app.listen({ host: '0.0.0.0', port: env.API_PORT })

  console.log(`🚀 server started at port ${env.API_PORT}`)
}

bootstrap()
