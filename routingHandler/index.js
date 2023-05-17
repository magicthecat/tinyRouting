export default function routingHandler(callback) {
    try {
        if (typeof callback !== "function") {
            throw new Error("Callback function is required.");
        }

        const handleRoutingCallback = () => {
            const parseQueryParameters = (queryString) => {
                const queryParams = {};
                const searchParams = new URLSearchParams(queryString);

                for (let [key, value] of searchParams.entries()) {
                    queryParams[key] = value;
                }

                return queryParams;
            };
            const currentRoute = window.location.pathname;
            const queryParams = parseQueryParameters(window.location.search);
            callback(currentRoute, queryParams);
        };

        window.addEventListener("popstate", handleRoutingCallback);
        handleRoutingCallback();
    } catch (error) {
        console.error("Error occurred:", error);
    }
}