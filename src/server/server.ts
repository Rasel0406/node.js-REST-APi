import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routeHandler } from "../routes/routes";
const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req);
 routeHandler(req,res);
  },
);

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});