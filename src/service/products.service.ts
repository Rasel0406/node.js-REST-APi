
import type { IncomingMessage, ServerResponse } from "node:http";
import { productsRead } from "../controller/products.controller";

export const productsService = (req:IncomingMessage,res:ServerResponse) => {
    const url = req.url;
    const method = req.method;
 
    if (url ==="/products" && method ==="GET"){
             const productsData = productsRead();
         res.writeHead(200,{ "content-type": "application/json" });
      res.end(JSON.stringify({Message : "This is the products page", data: productsData}));
    }
};