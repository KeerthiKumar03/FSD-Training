import http from "http";
import { URL } from "url";

const server = http.createServer((req, res) => {
    // Parse URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const method = req.method;

    console.log(`Request: ${method} ${path}`);

    // Home Route
    if (path === "/" && method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end("Welcome to Node.js HTTP Module Demo!");
    }

    // JSON Response
    else if (path === "/api/user" && method === "GET") {
        const user = {
            id: 1,
            name: "Keerthi",
            role: "Developer"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(user));
    }

    // Query Parameters
    else if (path === "/search" && method === "GET") {
        const keyword = url.searchParams.get("q");

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(`Search Query: ${keyword}`);
    }

    // Request Headers
    else if (path === "/headers" && method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(req.headers, null, 2));
    }

    // POST Request
    else if (path === "/submit" && method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "Data received successfully",
                receivedData: body
            }));
        });
    }

    // Custom Headers
    else if (path === "/custom-header") {
        res.writeHead(200, {
            "Content-Type": "text/plain",
            "X-Powered-By": "Node.js"
        });

        res.end("Custom header sent!");
    }

    // 404 Route
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

// Start Server
const PORT = 3000;

server.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});