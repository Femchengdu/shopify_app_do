// nftservice.js - nftservice route module.
import { Router } from "express";
var router = Router();

// Home page route.
router.get("/nftservice", (req, res) => {
  console.log("Router called!!!!!", req.path);
  try {
    res.status(200).send("Test access scuccessful");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// router.get("/", function (req, res) {
//   res.send("NFT service home page!!!!");
// });

// About page route.
// router.get("/:campaingName/token/:tokenId", function (req, res) {
//   const { campaingName, tokenId } = req.params;
//   res.send(`NFT unclaimed ${tokenId} and ${campaingName}`);
// });

export default router;
