import { createRoute } from "@/src/API/createRoute";
import { LieuModel } from "@/src/db/Models/TravelModels";

const handle = createRoute(async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { type_lieu, nom_lieu, adresse, ville, code_postal, pays, isPaid, price, artMovement, artType, starRating, barType, parkType, parkAccessType } = req.body;
      const Lieu = new LieuModel({
        type_lieu,
        nom_lieu,
        adresse,
        ville,
        code_postal,
        pays,
        isPaid,
        price,
        artMovement,
        artType,
        starRating,
        barType,
        parkType,
        parkAccessType
      });

      await Lieu.save();
      res.status(201).json({ success: true, data: Lieu });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const Lieux = await LieuModel.find();
      res.send(Lieux);
    } catch (error) {
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
});

export default handle;
