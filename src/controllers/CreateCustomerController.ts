import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController {
    async handle(req: FastifyRequest, rep: FastifyReply) {
        const { name, email } = req.body as { name: string, email: string };

        const customService = new CreateCustomerService();
        const customer = await customService.execute({ name, email });

        rep.send(customer);
    }
}

export {
    CreateCustomerController
}