type style = 'card' | 'colorless' | 'nopadding'

interface Properties {
    children: any
    style: style[]
}

export const Form = (properties: Properties) => {
    return (
        <form class={`ui ${properties.style ? properties.style.join(" ") : ""}`}>
            {properties.children}
        </form>
    )
}