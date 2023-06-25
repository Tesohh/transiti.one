import { error } from "@sveltejs/kit"

export async function load({ url }) {
  let redirectTo = url.searchParams.get("redirect")
  if (redirectTo == null) {
    throw error(500, "Redirect missing")
  }
  let customSid = url.searchParams.get("customsid")
  url.searchParams.delete("redirect")
  url.searchParams.delete("customsid")
  let additionalSearchParameters = url.search

  // let query = url.searchParams.get("query")

  return {
    redirectTo,
    customSid,
    additionalSearchParameters,
  }
}
