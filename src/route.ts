import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomerController } from './controllers/ListCustomerController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes(ff: FastifyInstance, opt: FastifyPluginOptions) {
    ff.get('/', async (req: FastifyRequest, rep: FastifyReply) => {
        return {
            ok: true,
        }
    });

    ff.post('/add', async (req: FastifyRequest, rep: FastifyReply) => {
        return new CreateCustomerController().handle(req, rep);
    });

    ff.get('/users', async (req: FastifyRequest, rep: FastifyReply) => {
        return new ListCustomerController().handle(req, rep);
    });

    ff.delete('/user', async (req: FastifyRequest, rep: FastifyReply) => {
        return new DeleteCustomerController().handle(req, rep);
    });
}