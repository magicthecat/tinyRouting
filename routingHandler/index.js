export default function routingHandler(callback) {
    try {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }

        const handleRoutingCallback = () => {
            const currentRoute = window.location.pathname;
            callback(currentRoute);
        };

        window.addEventListener("popstate", handleRoutingCallback);
        handleRoutingCallback();
    } catch (error) {
        console.error("Error occurred:", error);
    }
}