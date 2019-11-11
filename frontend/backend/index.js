import express from "express";
import bodyParser from "body-parser";
import authRouter from "./router/auth";
import companiesRouter from "./router/companies";
import productsRouter from "./router/products";
import usersRouter from "./router/users";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.use("/companies", companiesRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
