import express from "express"; 
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const _direname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userIsAuthorised = false;


app.use(bodyParser.urlencoded({ extended: true }));

// static file
app.use(express.static("public"));

// Middleware to check password
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  password === "IFallInLove" ? (userIsAuthorised = true) : (userIsAuthorised = false);
  next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(_direname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(_direname + "/public/secret.html");
  }
   else {
    res.sendFile(_direname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});