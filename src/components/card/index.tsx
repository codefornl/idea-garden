import './style.scss'

type style = "color" | "colorless" | "footerimage" | "footer"

interface Properties {
    children: any
    style: style[]
    centered?: boolean
}

export const Card = (properties: Properties) => (
    <div class={`ui card ${properties.style.join(" ")}`}>
       {properties.children}
    </div>
)