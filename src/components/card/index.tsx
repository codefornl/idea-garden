import './style.scss'

type style = "color" | "colorless" | "footerimage" | "footer" | "ideacard" | "ideacard-full" | "addition"

interface Properties {
    children: any
    style: style[]
    centered?: boolean
}

export const Card = (properties: Properties) => {
    const style = ['ui', 'card']
    
    return (

        <div class={style.concat(properties.style).join(" ")}>
            {properties.children}
        </div>
    )
}