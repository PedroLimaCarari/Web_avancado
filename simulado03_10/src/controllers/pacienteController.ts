import { Request, Response } from 'express';
import PacienteService from '../services/pacienteServices';

class PacienteController {
  async criarPaciente(req: Request, res: Response) {
    const dados = req.body;
    try {
      await PacienteService.criarPaciente(dados);
      res.status(201).json({ message: 'Paciente criado com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar paciente.' });
    }
  }

  async listarPacientes(req: Request, res: Response) {
    try {
      const pacientes = await PacienteService.lerPaciente();
      res.json(pacientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter pacientes.' });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    const { id } = req.params;
    const dados = req.body;
    try {
      const pacienteAtualizado = await PacienteService.atualizarPaciente(dados, parseInt(id));
      if (pacienteAtualizado) {
        res.json({ message: 'Paciente atualizado com sucesso.' });
      } else {
        res.status(404).json({ error: 'Paciente não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
  }

  async excluirPaciente(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await PacienteService.excluirPaciente(parseInt(id));
      res.json({ message: 'Paciente excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir paciente.' });
    }
  }
}

export default new PacienteController();
