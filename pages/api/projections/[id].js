import { requireAuth } from "@clerk/nextjs/api";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";


export default requireAuth(async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  // Connect to the DB
  let { db } = await connectToDatabase();

  switch (method) {
    case "GET":
      break;

    case "PUT":
      break;

    case "DELETE":
      console.log("Delete Projection")
      try {
        let result = await db.collection("projections").deleteOne({ "_id": new ObjectId(id) });
        console.log(result)
        res.status(200).json("Document with id " + id + "has been deleted");
      } catch (error) {
        console.log(error)
        res.status(400).json({ error: error });
      }

      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
});
