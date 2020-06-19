type style = "no-float"
type type = "submit"

interface Properties {
    children: any
    style?: style[]
    type: type
}
export const Button = (properties: Properties) => (
    <button type={properties.type} class={`ui ${properties.style ? properties.style.join(" ") : ""}`}>
        {properties.children}
    </button>
)