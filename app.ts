import * as express from "express";

const app = express();

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: "Hello welcome from darshan!!!";
//     });
// });

app.use((req, res, next) => {
    res.status(200).json({
        message: "Hello, from darshan"
    });
});

module.exports = app;

