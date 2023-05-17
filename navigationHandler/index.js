export const handleNavigation = (path, parameters) => {
    try {
        if (parameters && typeof parameters === "object") {
            const queryString = Object.entries(parameters)
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                )
                .join("&");

            path += `?${queryString}`;
        }

        window.history.pushState(null, "", path);
        const event = new PopStateEvent("popstate");
        window.dispatchEvent(event);
    } catch (error) {
        console.error("Error occurred while navigating:", error);
    }
};