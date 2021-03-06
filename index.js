const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const swaggerUi = require("swagger-ui-express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//app use cookie parser
app.use(cookieParser());

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//swagger
const apiDocs = require("./docs-api.json");
app.use("/docs-api", swaggerUi.serve, swaggerUi.setup(apiDocs));

app.use(morgan("dev"));

//routes
let routes = require("./routers/index");
routes(app);

//routes middleware
app.use("/middleware", require("./middleware"));

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
