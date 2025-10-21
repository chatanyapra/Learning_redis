import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
app.post("/submit", async (req, res) => {
    const { problemId, code, language } = req.body;
    try {
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        // Store in the database
        res.status(200).send("Submission received and stored.");
    }
    catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
});
async function startserver() {
    try {
        await client.connect();
        console.log("Connected to server");
        app.listen(3000, () => {
            console.log("port listen on 3000");
        });
    }
    catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}
startserver();
//# sourceMappingURL=index.js.map