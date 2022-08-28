import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = parseInt(process.env["PORT"] ?? '8080');

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
