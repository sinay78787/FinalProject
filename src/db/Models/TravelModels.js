import mongoose from "mongoose";
import { LieuSchema } from "@/src/db/schemas/schema"

export const LieuModel =
  mongoose.models.Lieu || mongoose.model("Lieu", LieuSchema)
