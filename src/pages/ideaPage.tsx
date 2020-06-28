import './style.scss';
import { Page } from './page';
import { Component, createResource, Switch, Match } from 'solid-js';
import { IdeaResponse, fetchIdea } from '../services';
import { IdeaComponentFull } from '../components/idea';

export const IdeaPage: Component = (properties: any) => {
    let [response, loadIdea] = createResource<IdeaResponse>()
    loadIdea(fetchIdea(properties.idea))

    return (
        <Page>
            <Switch fallback={"No Idea"}>
                <Match when={response.loading}>Loading...</Match>
                <Match when={response()}>
                    {(i: IdeaResponse) => <IdeaComponentFull idea={i.data}/>}
                </Match>
            </Switch>
        </Page>
    )
}