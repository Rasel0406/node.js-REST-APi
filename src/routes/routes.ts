import type { IncomingMessage, ServerResponse } from "node:http";
import { productsService } from "../service/products.service";

export const routeHandler = (req:IncomingMessage, res: ServerResponse)=>{
       const url = req.url;
    const method = req.method;
    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "application/JSON" });
      res.end(JSON.stringify({ Message: "WellCome to the server " }));
    }
    
     else if (url?.startsWith("/products")){
     productsService(req,res);
     }
    
    else {
      res.writeHead(404, { "content-type": "application/JSON" });
      res.end(JSON.stringify({ Message: "page not found" }));
    }

}