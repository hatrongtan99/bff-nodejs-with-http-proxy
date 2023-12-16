const express = require("express");
const cors = require("cors");
const PORT = 8081;
const app = express();

app.use(
    cors({
        credentials: true,
    })
);
app.get("/api/products", (req, res) => {
    const data = ["Iphone 13", "Ipad", "Tee", "shoppee"];
    return res.json({
        success: true,
        data,
    });
});

app.listen(PORT, () => {
    console.log("server running on port: " + PORT);
});
