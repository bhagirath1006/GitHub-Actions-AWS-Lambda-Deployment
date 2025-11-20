exports.handler = async (event) => {
    console.log("Event Received:", event);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda via GitHub Actions!" }),
    };
};
