import { createClient } from "redis";
const client = createClient();
const i = 0;
async function startServer() {
    try {
        await client.connect();
        while (true) {
            const response = await client.brPop("problems", 0);
            await new Promise((resolve) => { setTimeout(resolve, 1000); });
            // pub sub code-----------
            console.log("processed user submission " + i);
        }
    }
    catch (error) {
    }
}
startServer();
//# sourceMappingURL=index.js.map