import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AgendaService {
    constructor(private readonly prisma: PrismaClient) { }

    async criarAgenda(dado: any) {
        try {
          const agenda = await prisma.agenda.create({
            data: {
              data: dado.data,
              nomePcente: dado.nomePcente
            }
          });
          return agenda;
        } catch (error) {
          console.log(error);
          throw new Error("Erro ao criar agenda");
        }
      }

    async lerAgendas() {
        try {
            const agendas = await this.prisma.agenda.findMany();
            return agendas;
        } catch (error) {
            console.log(error)
        }
    }

    async obterAgendaPorId(id: number) {
        try {
            const agenda = await this.prisma.agenda.findUnique({
                where: { id:id },
            });
            return agenda;
        } catch (error) {
            console.log(error)
        }
    }

    async atualizarAgenda(id: number, dados: any) {
        try {
            const agendaAtualizada = await this.prisma.agenda.update({
                where: { id:id },
                data: {
                    nomePcente: dados.nomePcente,
                },
            });
            return agendaAtualizada;
        } catch (error) {
            console.log(error)
        }
    }

    async excluirAgenda(id: number) {
        try {
            await this.prisma.agenda.delete({
                where: { id:id },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new AgendaService(prisma);
