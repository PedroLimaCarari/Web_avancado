import { Request, Response } from 'express';
import AgendaService from '../services/agendaServices';

class AgendaController {
  constructor(){}
  async criarAgenda(req: Request, res: Response) {
    
    try {
      const novaAgenda = await AgendaService.criarAgenda(req.body);
      res.status(201).json(novaAgenda);
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async lerAgendas(req: Request, res: Response) {
    try {
      const agendas = await AgendaService.lerAgendas();
      res.json(agendas);
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async obterAgendaPorId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const agenda = await AgendaService.obterAgendaPorId(parseInt(id));
      if (agenda) {
        res.json(agenda);
      } else {
        res.status(404).json({ error: 'Agenda não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message});
    }
  }

  async atualizarAgenda(req: Request, res: Response) {
    const { id } = req.params;
    const { data, nomePcente } = req.body;
    try {
      const agendaAtualizada = await AgendaService.atualizarAgenda(parseInt(id), nomePcente);
      res.json(agendaAtualizada);
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async excluirAgenda(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await AgendaService.excluirAgenda(parseInt(id));
      res.json({ message: 'Agenda excluída com sucesso.' });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }
}

export default new AgendaController();
