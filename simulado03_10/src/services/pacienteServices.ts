import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PacienteService {
    constructor(private readonly prisma: PrismaClient) { }

    async criarPaciente(dados: any) {
        try {
            const novaConsulta = await this.prisma.paciente.create({
                data: {
                    nomePcente: dados.nomePcente,
                    senha: dados.senha,
                    usuario: dados.usuario,
                },
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    async lerPaciente() {
        try {
            const pacientes = await this.prisma.paciente.findMany();
            return pacientes;
        } catch (error) {
            console.log(error)
        }
    }

    async atualizarPaciente(dados: any, id: number) {
        try {
            const pacienteAtualizado = await this.prisma.paciente.update({
                where: { id:id },
                data: {
                    nomePcente: dados.nomePcente,
                    senha: dados.senha,
                    usuario: dados.usuario,
                },
            });
            return pacienteAtualizado;
        } catch (error) {
            console.log(error)
        }
    }

    async excluirPaciente(id: number) {
        try {
            await this.prisma.paciente.delete({
                where: { id:id },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new PacienteService(prisma);