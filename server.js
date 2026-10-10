const express = require("express");

const app = express();

app.use(express.json());

app.post("/payment", (req, res) => {

    res.json({
        transactionId:
            "TXN-" + Date.now(),
        status: "SUCCESS"
    });

});

app.listen(5006);
