export const handleNavigation = (path) => {
    try {
        window.history.pushState(null, "", path);
        const event = new PopStateEvent("popstate");
        window.dispatchEvent(event);
    } catch (error) {
        console.error("Error occurred while navigating:", error);
    }
};