const Project = require('../models/project');

exports.createProject = async (req, res) => {
  try {
    const { title, description, technologies, repoLink } = req.body;
    const userId = req.user.id; // Assumindo que temos um middleware de autenticação que adiciona o usuário à requisição
    
    const projectId = await Project.create({ title, description, userId, technologies, repoLink });
    res.status(201).json({ message: 'Projeto criado com sucesso', projectId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar projeto', error: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    
    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar projeto', error: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const projects = await Project.findAll(parseInt(limit), parseInt(offset));
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar projetos', error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const { title, description, technologies, repoLink } = req.body;
    
    const success = await Project.update(projectId, { title, description, technologies, repoLink });
    
    if (!success) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    
    res.json({ message: 'Projeto atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar projeto', error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const success = await Project.delete(projectId);
    
    if (!success) {
      return res.status(404).json({ message: 'Projeto não encontrado' });
    }
    
    res.json({ message: 'Projeto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar projeto', error: error.message });
  }
};
