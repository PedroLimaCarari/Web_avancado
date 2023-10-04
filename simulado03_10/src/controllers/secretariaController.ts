import { Request, Response } from 'express';
import SecretariaService from '../services/secretariaServices';

class SecretariaController {
  async criarSecretaria(req: Request, res: Response) {
    const dados = req.body;
    try {
      await SecretariaService.criarSecretaria(dados);
      res.status(201).json({ message: 'Secretária criada com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar secretária.' });
    }
  }

  async listarSecretarias(req: Request, res: Response) {
    try {
      const secretarias = await SecretariaService.lerSecretaria();
      res.json(secretarias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter secretárias.' });
    }
  }

  async atualizarSecretaria(req: Request, res: Response) {
    const { id } = req.params;
    const dados = req.body;
    try {
      const secretariaAtualizada = await SecretariaService.atualizarSecretaria(dados, parseInt(id));
      if (secretariaAtualizada) {
        res.json({ message: 'Secretária atualizada com sucesso.' });
      } else {
        res.status(404).json({ error: 'Secretária não encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar secretária.' });
    }
  }

  async excluirSecretaria(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await SecretariaService.excluirSecretaria(parseInt(id));
      res.json({ message: 'Secretária excluída com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir secretária.' });
    }
  }
}

export default new SecretariaController();
