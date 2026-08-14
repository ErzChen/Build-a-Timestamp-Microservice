import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api", (req, res) => {
  const dateParam = req.params.date;
  if (!dateParam) {
    return res.json({
      unix: Date.now(),
      utc: new Date().toUTCString()
    });
  }
  let date = isNaN(dateParam) ? new Date(dateParam) : new Date(parseInt(dateParam));
  if (date.toString() === "Invalid Date") {
    return res.json({
      error: "Invalid Date",
    });
  }
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;
  if (!dateParam) {
    return res.json({
      unix: Date.now(),
      utc: new Date().toUTCString()
    });
  }
  let date = isNaN(dateParam) ? new Date(dateParam) : new Date(parseInt(dateParam));
  if (date.toString() === "Invalid Date") {
    return res.json({
      error: "Invalid Date",
    });
  }
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
