"use strict";
const fs = require("fs");
// An empty type is a type that cannot have any value
// uninhabitable type or empty type because no instance of it can be created.
function raise(message) {
    console.log(`Error: "${message}" raised: ${new Date()}`);
    throw new Error(message);
}
function readConfig(configFile) {
    if (!fs.existsSync(configFile))
        raise(`Configuration file ${configFile} missing`);
    return fs.readFileSync(configFile, "utf8");
}
