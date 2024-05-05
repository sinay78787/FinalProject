import { LieuModel } from "@/src/db/Models/TravelModels"
import { readDatabase } from "@/src/db/readDatabase"
import { writeDatabase } from "@/src/db/writeDatabase"

const handle = async (req, res) => {
  const TravelId = req.query
  console.log(TravelId)

  if (req.method === "GET") {
    res.send(TravelId)
    return
  }

  if (req.method === "PATCH") {
    const { description, isDone } = req.body
    const updatedTravel = {
      ...Travel,
      description: description !== undefined ? description : Travel.description,
      isDone: isDone !== undefined ? isDone : Travel.isDone,
    }
    const updatedTravels = db.Travel.map(travel =>
      travel.id === TravelId ? updatedTravel : travel
    )

    await writeDatabase({ ...db, Travel: updatedTravels })

    res.send(updatedTravel)
    return
  }

  if (req.method === "DELETE") {
    await LieuModel.findByIdAndDelete(TravelId);
            return res.status(200).json({ success: true, message: "Message Deleted !" });
   
  }

  res.status(404).send({ error: "Not found" })
}

export default handle
