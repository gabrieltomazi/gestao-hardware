import prisma from "../config/prisma.js";

export const HardwareController = {
  // Listar
  async list(req, res) {
    const { category, name } = req.query

    try {
      const components = await prisma.component.findMany({
        where: {
          category: category ? category : undefined,
          name: name ? {
            contains: name,
            mode: "insensitive"
          } : undefined
        }
      });
      res.json(components);
    } catch {
      res.status(500).json({ error: "Erro ao buscar componentes" })
    }
  },

  // Criar
  async create(req, res) {
    try {
      const component = await prisma.component.create({
        data: {
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
        },
      });
      res.status(201).json({ message: "Component created", component });
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar o Componente" });
    }
  },

  // Atualizar
  async update(req, res) {
    const { id } = req.params;
    const { name, category, price } = req.body;
    try {
      const updated = await prisma.component.update({
        where: { id },
        data: { name, category, price },
      });
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json({ error: "Erro ao atualizar" });
    }
  },

  // Deletar
  async delete(req, res) {
    const { id } = req.params;
    try {
      await prisma.component.delete({ where: { id } });
      res.status(200).json({ message: "Deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ error: "Erro ao deletar" });
    }
  }
};