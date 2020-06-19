import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';
import { Component, createResource, Switch, Match } from 'solid-js';

interface Todo {
    id: number
    userId: number
    title: string
    completed: boolean
}

const fetchUser = async () => {
    const r = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const final: Todo = await r.json()
    return final
};

export const Ideas: Component = () => {
    let [user, load] = createResource<Todo>()
    load(fetchUser())
    return (
        <Page>
            <Section size={["col-12"]}>
                <Card style={["colorless"]}>
                    <Paragraph centered={true} title="Nog 1 dag om mee te doen!">
                        De Ideeënvijver is nog open tot en met 26 Juli.
                        Van 27 juli tot en met 30 juli gaat de jury in beraad
                        over wie de winnaars zijn. Op 31 juli worden de winnaars bekend gemaakt!
                </Paragraph>
                </Card>
            </Section>
            <Section>
                <Switch fallback={"Failed to load User"}>
                    <Match when={user.loading}>Loading...</Match>
                    <Match when={user()}>
                        {(todo: Todo) => (
                            <div>
                                Will something end up here?&nbsp;
                                {todo.title}
                            </div>
                        )}
                    </Match>
                </Switch>
            </Section>
        </Page>
    )
}