import { requireAuth } from "@clerk/nextjs/api";
import { connectToDatabase } from "../../../lib/mongodb";

export default requireAuth(async (req, res) => {
  // Connect to the DB
  let { db } = await connectToDatabase();

  console.log(req.method)
  // Check the request method
  if (req.method === "POST") {
    // If no parameter is defined in the request, send back an error
    if (req.body.request === undefined) {
      res.status(400).json({ error: "No request parameter provided" });
    } else {
      // Get the Request Params
      const param = req.body.request;
      // Define the document that will be inserted in the DB
      let doc = req.body;
      // Delete the param from the object that will be inserted as a document in the DB
      delete doc["request"];

      // Depending on the request, do the proper action
      switch (param) {
        case "addProjection":
          await db.collection("projections").insertOne(req.body);
          console.log("Data added to the DB");
          res.status(200).json({ response: "Data added to the DB" });
          break;
        default:
          // If the param is not find return an
          res.status(400).json({ error: "The request does not exist" });
      }
    }
  } else if (req.method === "GET") {
    console.log("Request Param :", req.query.request)
    // If no parameter is defined in the request, send back an error
    if (req.query.request === undefined) {
      res.status(400).json({ error: "No request parameter provided" });
    } else {
      // Get the Request Params
      const param = req.query.request;
      switch (param) {
        case "getProjections":
          let cursor = await db.collection("projections").find({ userId: req.query.userId });
          let data = await cursor.toArray()
          console.log("Projections : ", data)
          res.status(200).json({data: data})
          break;
        default:
          // If the param is not find return an
          res.status(400).json({ error: "The request does not exist" });
      }
    }
  }
});
