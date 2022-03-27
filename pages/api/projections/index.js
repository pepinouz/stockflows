import { requireAuth } from "@clerk/nextjs/api";
import { connectToDatabase } from "../../../lib/mongodb";

export default requireAuth(async (req, res) => {
  const { method, body } = req;

  // Connect to the DB
  let { db } = await connectToDatabase();

  switch (method) {
    case "GET":
      // Look for the userId parameter
      if (req.query.userId) {
        try {
          // Get the data from the DB
          let cursor = await db
            .collection("projections")
            .find({ userId: req.query.userId });
          // Convert the cursor received to array of object
          let data = await cursor.toArray();
          console.log("Projections : ", data);
          // Return the Data
          res.status(200).json({ data: data });
        } catch (error) {
          res.status(400).json({ "Database error": error });
        }
      } else {
        res.status(400).json({ error: "No user ID provided" });
      }
      break;

    case "POST":
      try {
        // Add the object to the DB
        await db.collection("projections").insertOne(req.body);
        res.status(200).json({ response: "Data added to the DB" });
      } catch (error) {
        res.status(400).json({ "Database error": error });
      }

      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
});
