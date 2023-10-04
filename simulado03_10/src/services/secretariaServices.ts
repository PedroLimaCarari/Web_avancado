import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class secretariaService {
    constructor(private readonly prisma: PrismaClient) { }

    async criarSecretaria(dados: any) {
        try {
            const novaSecretaria = await this.prisma.secretaria.create({
                data: {
                    nome: dados.nome,
                    RG: dados.RG,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    async lerSecretaria() {
        try {
            const secretarias = await this.prisma.secretaria.findMany();
            return secretarias;
        } catch (error) {
            console.log(error)
        }
    }

    async atualizarSecretaria(dados: any, id: number) {
        try {
            const secretariaAtualizada = await this.prisma.secretaria.update({
                where: { id:id },
                data: {
                    nome: dados.nome,
                    RG: dados.RG,
                },
            });
            return secretariaAtualizada;
        } catch (error) {
            console.log(error)
        }
    }

    async excluirSecretaria(id: number) {
        try {
            await this.prisma.secretaria.delete({
                where: { id:id },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new secretariaService(prisma);