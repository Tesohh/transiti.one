import prisma from "$lib/prisma"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async ({ url }) => {
  const id = url.searchParams.get("id")
  if (id == null) throw error(406, "No ID Provided")
  if (Number.isNaN(parseInt(id))) throw error(406, "ID Unacceptable")
  const transition = await prisma.findFirst({
    where: { id: parseInt(id) },
  })

  if (transition) return transition

  throw error(404, "Not found")
}) satisfies PageServerLoad
