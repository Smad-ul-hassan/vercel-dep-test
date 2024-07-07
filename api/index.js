import express from "express";
import cors from "cors";

const app = express();

export var corsOptions = {
  origin: function (origin, callback) {
    return callback(null, true);
  },
  credentials: true,
};
app.use(cors(corsOptions));
// Sample route
app.get("/check", (req, res) => {
  return res.json({ message: "**Wellcome to epitap**" });
});

// app.use(logger("dev"));

app.listen(5555, () => {
  console.log(`server is listening on port 5555} 🚀🚀🚀🚀`);
});
