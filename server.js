const express = require("express");
const next = require("next");
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
     .prepare()
     .then(() => {
          const server = express();
          server.use(cors());
          dotenv.config();

          server.use(express.urlencoded({ extended: true }));
          server.use(express.json());

          server.get("*", (req, res) => {
               return handle(req, res);
          });

          server.listen(PORT, err => {
               if (err) throw err;
               console.log(`> Ready on http://localhost:${PORT}`);
          });
     })
     .catch(ex => {
          console.error(ex.stack);
          process.exit(1);
     });
