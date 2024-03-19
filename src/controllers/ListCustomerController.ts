import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomerController {
    async handle(req: FastifyRequest, rep: FastifyReply) {
        const listCustom = new ListCustomerService();
        const customers = await listCustom.execute();

        rep.send(customers);
    }
}

export {
    ListCustomerController
}