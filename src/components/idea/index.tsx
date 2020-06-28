import './style.scss'
import { Idea } from '../../services'
import { Section } from '../../pages/page';
import { Card } from '../card';
import { For, Show } from 'solid-js';

interface Properties {
    children?: any
    idea: Idea
}
export const IdeaComponentCompact = (properties: Properties) => {

    return (
        <Card style={['ideacard']}>
            <div class="top">
                <div class="status">
                    <img class="largefish" src="static/stage5.png" />
                </div>
                <div class="info">
                    <a href={`/#/idea/${properties.idea._id}`}>
                        <h3 id={`${properties.idea._id}`} class="ui">{properties.idea.title}</h3>
                    </a>
                    <p>{properties.idea.summary}</p>
                </div>
            </div>
            <div class="bottom">
                <div class="voteset"></div>
                <div class="metric">
                    <span class="number">{properties.idea.votecount}</span>
                    <span class="label">credits</span>
                </div>
            </div>
        </Card>
    )
}

export const IdeaComponentFull = (properties: Properties) => {

    return (
        <>
            <Section size={"col-2"}>
                <div class="stats">
                    <div><img class="largefish" src="static/stage5.png" /></div>
                    <div class="metric">
                        <span class="number">{properties.idea.votecount}</span>
                        <span class="label">credits</span>
                    </div>
                    <div class="metric">
                        <span class="number">{properties.idea.additions.length}</span>
                        <span class="label">additions</span>
                    </div>
                    <div>
                        <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https%3A//ideeen.codefor.nl/%23/idea/" + properties.idea._id}>
                            <img class="ui sharebutton" src="/static/fb_share.png" title="Share on facebook" />
                        </a>
                        <a target="_blank" href={"https://twitter.com/home?status=Bekijk%20mijn%20idee%20op%20%23idee%C3%ABnvijver!%20https%3A//ideeen.codefor.nl/%23/idea/" + properties.idea._id}>
                            <img class="ui sharebutton" src="/static/tw_share.png" title="Share on twitter" />
                        </a>
                    </div>
                </div>
            </Section>
            <Section size={"col-8"}>
                <Card style={["ideacard-full"]}>
                    <div class="info">
                        <h3 id={`${properties.idea._id}`} class="ui">{properties.idea.title}</h3>
                        <p class="label">Summary</p>
                        <p>{properties.idea.summary}</p>
                    </div>
                </Card>
                <For each={properties.idea.additions} fallback={<Card style={["addition"]}>No additions</Card>}>
                {addition => (
                    <Card style={["addition"]}>
                        <p class="description">{addition.content.description}</p>
                        <Show when={addition.content.src}>
                            <div class="image">
                                <img src={addition.content.src}/>
                            </div>
                        </Show>
                        <For each={addition.comments} fallback={<></>}>
                        {c => (
                            <div>{c.comment}</div>
                        )}
                        </For>
                    </Card>
                )}
                </For>
            </Section>
        </>
    )
}

