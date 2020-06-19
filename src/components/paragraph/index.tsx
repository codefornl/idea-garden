import './style.scss'
import { Show } from 'solid-js'

interface Properties {
    title?: string
    centered?: boolean
    children?: any
}
export const Paragraph = (properties: Properties) => (
    <p class={`${properties.centered ? "centerimage": ""}`}>
        <Show when={properties.title}>
            <h2>{properties.title}</h2>
        </Show>
        {properties.children}
    </p>
)