import { createClient } from "redis";

const client = createClient();
const i = 0;
async function startServer() {
    try {
        await client.connect();
        while (true) {
            const response = await client.brPop("problems", 0);
            await new Promise((resolve) => { setTimeout(resolve, 1000) })
            // pub sub code-----------
            console.log("processed user submission " + i);
        }
    } catch (error) {

    }
}
startServer();

// commands for node server using typescript-----------
    // npm install -D typescrip
    // npx tsc --init
    // node src/index.j


// docker commands for redis server -----------
    //  docker exec -it b027535617aa /bin/bash  
        // redis-cli