import pClient from "../prisma"

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("Está faltando informar o ID do Usuário!")
        }

        const findCustomer = await pClient.customer.findFirst({
            where: {
                id: id
            }
        });

        if (!findCustomer) {
            throw new Error("Cliente não existe!");
        }

        await pClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        });

        return {
            message: "Deletado com sucesso!"
        }
    }
}

export {
    DeleteCustomerService
}