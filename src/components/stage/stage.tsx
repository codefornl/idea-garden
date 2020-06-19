import { For, Show } from 'solid-js'
import './style.scss'
export interface StageProperties {
    image: string
    title: any
    text: string

}
interface Properties {
    stages: StageProperties[]
    centered?: boolean
}

export const Stage = (properties: StageProperties) => {
    return (
        <div class="stage">
            <img class="img" src={properties.image}/>
            <div class="explain">
                <Show when={properties.title}>
                    <h2>{properties.title}</h2>
                </Show>
                <p>{properties.text}</p>
            </div>
        </div>
    )
}

export const Stages = (properties: Properties) => {
    return (
        <p class={`stages${properties.centered ? " centerimage": ""}`}>
            <For each={properties.stages} fallback={<div class="stage">No stages</div>}>
                {stage => (
                    <Stage {...stage} />
                )}
            </For>
        </p>
    )
}