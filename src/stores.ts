import { writable } from "svelte/store"

export const storedToken = writable<string | null>(null)
