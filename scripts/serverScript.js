const server = { };

server.runServer = (expressInstance, serverPort) => {
    expressInstance.listen(serverPort, () => {
        console.log(`Server running on: http://localhost:${serverPort}`);
    });
};

module.exports = server;