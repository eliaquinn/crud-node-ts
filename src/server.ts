import Fastify from 'fastify';
import { routes } from './route';
import cors from '@fastify/cors';

const app = Fastify({
    logger: true
});

//serve para manipular o erro.
app.setErrorHandler((err, req, rep) => {
    rep.code(400).send({ message: err.message });
})

const start = async () => {
    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({ port: 3333 });
    } catch (error) {
        process.exit(1);
    }
}

start();