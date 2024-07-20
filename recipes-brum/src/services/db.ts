import '@prisma/react-native'
import { PrismaClient } from '@prisma/client/react-native'
import { reactiveHooksExtension } from '@prisma/react-native'

const baseClient = new PrismaClient({
  log: ['query', 'info', 'warn'],
})

export const prismaClient = baseClient.$extends(reactiveHooksExtension())

export async function initializeDb() {
  try {
    baseClient.$applyPendingMigrations()
  } catch (error) {
    console.log('File: db.ts, Function: initializeDb, Error: ', error)
    throw new Error('Error initializing database')
  }
}
