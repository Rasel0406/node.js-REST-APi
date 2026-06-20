import { createServer, IncomingMessage, Server, ServerResponse } from "http";
const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log(req);
  },
);
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
