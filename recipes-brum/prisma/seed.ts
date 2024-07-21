// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newRecipe = await prisma.recipe.create({
    data: {
      name: 'Bolo de Chocolate',
      ingredients: JSON.stringify([
        { ingredient: 'Farinha', count: '2 xícaras' },
        { ingredient: 'Açúcar', count: '1 xícara' },
        { ingredient: 'Ovos', count: '3' },
        { ingredient: 'Chocolate', count: '200g' },
      ]),
      directions: JSON.stringify(['Misture tudo', 'Asse por 40 minutos']),
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
