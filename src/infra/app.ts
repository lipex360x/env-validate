import fastify, { FastifyReply, FastifyRequest } from "fastify";

const app = fastify()

app.get('/hello', (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send({ message: 'hello world' })
})

export { app }
