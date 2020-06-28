import { createSignal, onCleanup } from "solid-js";

/**
 * A simple router to handle internal href's
 */
export function createRouteHandler() {
    const [location, setLocation] = createSignal(
        window.location.hash.slice(2).split('/')[0] || "home"
    )

    const locationHandler = () => {
        let location = window.location.hash.slice(2);
        if (location === "") {
            location = "home";
        }
        // If there is another slash involved, pass the second part as parameter.
        location = location.split('/')[0]
        setLocation(location)
    }

    window.addEventListener("hashchange", locationHandler);

    onCleanup(() => window.removeEventListener("hashchange", locationHandler));

    return (match: string) => match === location();
}