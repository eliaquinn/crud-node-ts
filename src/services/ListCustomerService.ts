import pClient from "../prisma";

class ListCustomerService {
    async execute() {
        const customers = await pClient.customer.findMany();

        return customers
    }
}

export {
    ListCustomerService
}