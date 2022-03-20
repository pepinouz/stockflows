import { requireAuth } from "@clerk/nextjs/api";

export default requireAuth(async (req, res) => {
  // Get the request
  console.log(req.query.request);
  // If no parameter is defined in the request, send back an error
  if (req.query.request === undefined) {
    res.status(400).json({ error: "No request parameter provided" });
  } else {
    // Get the Request Params to kno
    const param = req.query.request;

    switch (param) {
      case "addProjection":
        let { db } = await connectToDatabase();

        await db.collection("projetctions").insertOne(req.body);
        console.log("Data added to the DB");
        break;
      default:
        // If the param is not find return an
        res.status(400).json({ error: "The request does not exist" });
    }
  }
});
