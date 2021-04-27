require('dotenv/config');
const express = require("express");
const app = express();
routes = require("./routes");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const expbs = require("express-handlebars");
const cors = require('cors')

const csrfMiddleware = csrf({ cookie: true });
const PORT = process.env.PORTS || 8080;

const hbs = expbs.create({
  defaultLayout: "main",
  extname: "hbs",
  defaultView: "main",
  layoutsDir: __dirname + "/views/layout",
  partialsDir: __dirname + "/views/partials",

  helpers: {
    select: function (value, options) {
      let out =
          "<select class='form-control select2bs4'" +
          "style='width:50%'" +
          "id='idSelect'" +
          ">",
        size = 0;
        console.log(value[1]);
      for (key in value) {
        if (value.hasOwnProperty(key)) size++;
      }
      for (let i = 0; i < size; i++) {
        out =
          out +
          "<option value=" +
          value[i].id +
          ">" +
          options.fn(value[i]) +
          "</option>";
      }
      return out + "</select>";
    },
  },
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static("public/"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/plugins", express.static(__dirname + "/plugins"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
