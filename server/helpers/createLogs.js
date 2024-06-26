const fs = require('fs');
const path = require('path');

const createLogs = (message, initialPath, nameFolder) => {
    const logDirectory = path.join(initialPath, nameFolder);
    const date = new Date(Date.now());

    const logFileName = date.toJSON().slice(0, 10) + ".log";
    const logFilePath = path.join(logDirectory, logFileName);

    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
    }

    if (!fs.existsSync(logFilePath)) {
        fs.writeFileSync(logFilePath, "");
    }

    fs.appendFileSync(logFilePath, message)
};

module.exports = { createLogs, path };
