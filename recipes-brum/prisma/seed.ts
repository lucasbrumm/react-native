// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newRecipe = await prisma.recipe.create({
    data: {
      name: 'Bolo de Chocolateee',
      ingredients: 'Farinha, Açúcar, Ovos, Chocolate',
      directions: 'Misture tudo e asse por 40 minutos.',
      tested: false,
    },
  })

  console.log(`Nova receita criada: ${newRecipe.name}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
