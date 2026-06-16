import fs from "fs/promises";
import { createReadStream, watch } from "fs";

async function fileOperations() {
    const dirName = "demo";
    const fileName = `${dirName}/sample.txt`;
    const renamedFile = `${dirName}/renamed.txt`;
    const symlinkPath = `${dirName}/link.txt`;

    try {
        // 1. Create a directory
        await fs.mkdir(dirName);
        console.log(" Directory created");

        // 2. Create/write a file
        await fs.writeFile(
            fileName,
            "Hello! This is the initial content."
        );
        console.log("File created and data written");

        // 3. Read the file
        const data = await fs.readFile(fileName, "utf8");
        console.log("\n File Content:");
        console.log(data);

        // 4. Append to the file
        await fs.appendFile(
            fileName,
            "\nThis line was appended."
        );
        console.log(" Data appended to file");

        // 5. Rename/move the file
        await fs.rename(fileName, renamedFile);
        console.log(" File renamed");

        // 6. Check if the file exists
        try {
            await fs.access(renamedFile);
            console.log(" File exists");
        } catch {
            console.log(" File does not exist");
        }

        // 7. Get file statistics
        const stats = await fs.stat(renamedFile);

        console.log("\n File Statistics:");
        console.log("Size:", stats.size, "bytes");
        console.log("Is File:", stats.isFile());
        console.log("Created:", stats.birthtime);
        console.log("Modified:", stats.mtime);

        // 8. Change file permissions
        await fs.chmod(renamedFile, 0o644);
        console.log(" File permissions changed");

        // 9. Work with file descriptors
        const fileHandle = await fs.open(renamedFile, "r");

        console.log("\n File Descriptor:", fileHandle.fd);

        await fileHandle.close();
        console.log(" File descriptor closed");

        // 10. Use file streams
        console.log("\n Reading using Stream:");

        const stream = createReadStream(
            renamedFile,
            { encoding: "utf8" }
        );

        stream.on("data", (chunk) => {
            console.log(chunk);
        });

        await new Promise((resolve) => {
            stream.on("end", () => {
                console.log(" Stream reading completed");
                resolve();
            });
        });

        // 11. Create a symbolic link
        try {
            await fs.symlink(renamedFile, symlinkPath);

            console.log(" Symbolic link created");
        } catch (err) {
            console.log(
                " Symbolic link creation failed:",
                err.message
            );
        }

        // 12. Watch the file/directory for changes
        console.log(
            "\n Watching directory for 10 seconds..."
        );

        const watcher = watch(dirName, (eventType, filename) => {
            console.log(
                `Event: ${eventType}, File: ${filename}`
            );
        });

        // Trigger a change
        await fs.appendFile(
            renamedFile,
            "\nWatching changes..."
        );

        await new Promise((resolve) =>
            setTimeout(resolve, 10000)
        );

        watcher.close();

        console.log(" Stopped watching");

        // 13. Delete symbolic link
        try {
            await fs.unlink(symlinkPath);
            console.log(" Symbolic link deleted");
        } catch {
            console.log(
                " No symbolic link to delete"
            );
        }

        // 14. Delete the file
        await fs.unlink(renamedFile);
        console.log("File deleted");

        // 15. Remove the directory
        await fs.rmdir(dirName);
        console.log("Directory removed");
    } catch (err) {
        console.error("Error:", err.message);
    }
}

fileOperations();