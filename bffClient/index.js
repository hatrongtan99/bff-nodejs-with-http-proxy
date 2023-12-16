const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(
    cors({
        credentials: true,
    })
);

app.use(
    "/api/products",
    createProxyMiddleware({
        target: "http://product-service:8081",
        changeOrigin: true,
    })
);

app.use(
    "/*",
    createProxyMiddleware({
        target: "http://frontend",
        changeOrigin: true,
    })
);

app.listen(PORT, () => {
    console.log("bff pattern running on port: " + PORT);
});
