import app from "./app";

const main = () => {
  app.listen(app.get("PORT"));
  console.log("Server up");
};

main();
