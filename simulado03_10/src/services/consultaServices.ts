import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ConsultaService {
    constructor(private readonly prisma: PrismaClient) { }

    async criarConsulta(dados: any) {
        try {
            const novaConsulta = await this.prisma.consulta.create({
                data: {
                    data: dados.data,
                    nomePcente: dados.nomePcente,
                    nomeDents: dados.nomeDents,
                    pacienteId: dados.pacienteId,
                    secretariaId: dados.secretariaId,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    async lerConsulta() {
        try {
            const consultas = await this.prisma.consulta.findMany();
            return consultas;
        } catch (error) {
            console.log(error)
        }
    }

    async atualizarConsulta(dados: any, id: number) {
        try {
            const consultaAtualizada = await this.prisma.consulta.update({
                where: { id:id },
                data: {
                    data: dados.data,
                    nomePcente: dados.nomePcente,
                },
            });
            return consultaAtualizada;
        } catch (error) {
            console.log(error)
        }
    }

    async excluirConsulta(id: number) {
        try {
            await this.prisma.consulta.delete({
                where: { id:id },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ConsultaService(prisma);