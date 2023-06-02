import prisma from "$lib/prisma"
import { error } from "@sveltejs/kit"

export async function load({ url }) {
  let sid = url.searchParams.get("sid")
  if (sid == null) {
    throw error(500, "tid Parameter missing")
  }
  const transitions = await prisma.findMany({
    where: { OR: [{ song1: sid }, { song2: sid }] },
  })
  return {
    sid,
    transitions,
  }
}
