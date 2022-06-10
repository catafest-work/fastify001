const fastify = require('fastify')({ logger: true })
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
})
fastify.register(require('./routes/items'))

// const items = require('./Items')

// fastify.get('/items', (req, reply) => {
//   //reply.send({ test: 'Hello' })
//   reply.send(items)
// })

// fastify.get('/items/:id', (req, reply) => {
//   const {id} = req.params
//   const item = items.find(item => item.id === id)
//   reply.send(items)
// })

const PORT = 5000

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()