import prisma from "$lib/prisma"
import type { PageServerLoad } from "./$types"
export const load: PageServerLoad = async () => {
  return { text: "MATTEO DECARLO" }
}
