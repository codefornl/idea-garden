import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';
import { Component, createResource, Switch, Match, For } from 'solid-js';
import { IdeasResponse, fetchIdeas } from '../services';
import { IdeaComponentCompact } from '../components/idea';

export const IdeasPage: Component = () => {
    let [response, loadIdeas] = createResource<IdeasResponse>()

    loadIdeas(fetchIdeas())

    return (
        <Page>
            <Section size={"col-12"}>
                <Card style={["colorless"]}>
                    <Paragraph centered={true} title="Nog 1 dag om mee te doen!">
                        De Ideeënvijver is nog open tot en met 26 Juli.
                        Van 27 juli tot en met 30 juli gaat de jury in beraad
                        over wie de winnaars zijn. Op 31 juli worden de winnaars bekend gemaakt!
                </Paragraph>
                </Card>
            </Section>
            <Section>
                <Switch fallback={"No Ideas"}>
                    <Match when={response.loading}>Loading...</Match>
                    <Match when={response()}>
                        <div class="ui col-6">
                        <For each={response()?.data}>
                        {(i) => (
                            <IdeaComponentCompact idea={i}/>
                        )}
                        </For>
                        </div>
                    </Match>
                </Switch>
            </Section>
        </Page>
    )
}