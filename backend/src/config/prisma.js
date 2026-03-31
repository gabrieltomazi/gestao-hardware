import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaConnect = async () => {
  try {
    await prisma.$connect();
    console.log("✅ DB conectado com sucesso!")
  } catch (error) {
    console.log("❗ Falha ao conectar no DB! ", error)
  }
}

export default prisma