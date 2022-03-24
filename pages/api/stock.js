import { requireAuth } from "@clerk/nextjs/api";
const iexApiKey = process.env.IEX_TRADING_API_KEY;
const apiUrl = "https://cloud.iexapis.com/v1";

export default requireAuth(async (req, res) => {
  console.log(req.query.request);
  // If no parameter is defined in the request, send back an error
  if (req.query.request === undefined) {
    res.status(400).json({ error: "No request parameter provided" });
  } else {
    // Get the Request Params to know what is requested
    const param = req.query.request;
    // These are the possible request
    switch (param) {
      // LOGO REQUEST
      case "logo":
        // Check if there is a ticker in the request
        if (req.query.ticker) {
          let ticker = req.query.ticker;
          let logo = await fetch(
            apiUrl + "/stock/" + ticker + "/logo?token=" + iexApiKey
          );
          let data = await logo.json();
          console.log(data);
          res.status(200).json({ request: data });
        } else {
          res.status(401).json({ error: "The is no ticker provided" });
        }
        break;
      // COMPANY REQUEST
      case "company":
        // Check if there is a ticker in the request
        if (req.query.ticker) {
          let ticker = req.query.ticker;
          let company = await fetch(
            apiUrl + "/stock/" + ticker + "/company?token=" + iexApiKey
          );
          let data = await company.json();
          res.status(200).json({ request: data });
        } else {
          res.status(401).json({ error: "The is no ticker provided" });
        }
        break;
      // SEARCH REQUEST
      case "search":
        // Check if there is a ticker in the request
        if (req.query.fragment) {
          let fragment = req.query.fragment;
          console.log(fragment);
          let company = await fetch(
            apiUrl + "/search/" + fragment + "?token=" + iexApiKey
          );
          let data = await company.json();
          res.status(200).json({ request: data });
        } else {
          res.status(401).json({ error: "The is no fragment provided" });
        }
        break;
      default:
        // If the param is not find return an
        res.status(400).json({ error: "The request does not exist" });
    }
  }
});
