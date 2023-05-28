import { error } from "@sveltejs/kit"

export async function load({ url }) {
  let redirectTo = url.searchParams.get("redirect")
  if (redirectTo == null) {
    throw error(500, "Developer fucked up")
  }
  // let query = url.searchParams.get("query")

  return {
    redirectTo,
    // query,
  }
}
