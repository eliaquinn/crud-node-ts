import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {
    async handle(req: FastifyRequest, rep: FastifyReply) {
        const { id } = req.query as { id: string };
        const customService = new DeleteCustomerService();
        const customer = await customService.execute({ id });

        rep.send(customer);
    }
}

export {
    DeleteCustomerController
}