import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const cors = require("cors");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Server ready on ${host}:${port} - env [ ${process.env.NODE_ENV} ]`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
