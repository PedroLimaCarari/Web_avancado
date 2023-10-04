import { Request, Response } from 'express';
import ConsultaService from '../services/consultaServices';

class ConsultaController {
  constructor(){}
  async criarConsulta(req: Request, res: Response) {
    const dados = req.body;
    try {
      await ConsultaService.criarConsulta(dados);
      res.status(201).json({ message: 'Consulta criada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar consulta.' });
    }
  }

  async lerConsultas(req: Request, res: Response) {
    try {
      const consultas = await ConsultaService.lerConsulta();
      res.json(consultas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter consultas.' });
    }
  }

  async atualizarConsulta(req: Request, res: Response) {
    const { id } = req.params;
    const dados = req.body;
    try {
      const consultaAtualizada = await ConsultaService.atualizarConsulta(dados, parseInt(id));
      if (consultaAtualizada) {
        res.json({ message: 'Consulta atualizada com sucesso.' });
      } else {
        res.status(404).json({ error: 'Consulta não encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar consulta.' });
    }
  }

  async excluirConsulta(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await ConsultaService.excluirConsulta(parseInt(id));
      res.json({ message: 'Consulta excluída com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir consulta.' });
    }
  }
}

export default new ConsultaController();
