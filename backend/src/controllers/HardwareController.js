import prisma from "../config/prisma.js";
import z from 'zod'
import { buildValidationErrorMessage } from '../utils/build-validation-error-message.util.js'

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

    console.log(req.body)

    const { name, category, price } = req.body
    const schema = z.object({
      name: z.string(),
      category: z.string(),
      price: z.number()
    })

    const validated = schema.safeParse(req.body)

    if (!validated.success) {
      const errors = buildValidationErrorMessage(validated.error.issues)
      return res.status(422).json({ message: errors })
    }

    try {
      const component = await prisma.component.create({
        data: {
          name,
          category,
          price,
        },
      });
      console.log(component)
      res.status(201).json({ message: "Component created", component });
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar o Componente", error });
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