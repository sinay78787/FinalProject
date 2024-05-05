import { writeFile } from "node:fs/promises"

export const writeDatabase = async (Travel) => {
  const json = JSON.stringify(Travel)

  await writeFile("./db.json", json, { encoding: "utf-8" })
}
