import express from "express";
import cors from "cors";

import routes from "./routes.js";

class Server {
  constructor() {
    this.server = express();
    this.Middlewares();
    this.Routes();
  }

  Middlewares() {
    this.server.use(express.json()); // Cambio aquí, usando express.json() en lugar de json()
    this.server.use(cors());
  }

  Routes() {
    this.server.get("/", (req, res) => {
      res.send("Bienvenido");
    });

    this.server.use("/enviarCorreo", routes);
  }

  startServer(port) {
    this.server.set("port", port || 3000);
    this.server.listen(this.server.get("port"), () => {
      console.log("server corriendo en el puerto", this.server.get("port"));
    });
  }
}

export default Server; // Cambio aquí, exportando la clase Server directamente
