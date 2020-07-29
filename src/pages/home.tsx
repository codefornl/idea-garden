import { Page, Section } from './page'
import { Card } from '../components/card'
import { Video } from '../components/video'
import { Button } from '../components/button'
import { Paragraph } from '../components/paragraph'
import { fetchChallenges, ChallengesResponse } from '../services'
import { createResource, Switch, Match, For } from 'solid-js';
import moment from 'moment'

export const Home = () => {
    let [response, loadChallenges] = createResource<ChallengesResponse>()
    loadChallenges(fetchChallenges())
    return (
        <Page>
            <Section size={"col-12"}>
                <Card style={["colorless"]}>
                    <div class="icon-row">
                        <div>Doe<br /><img class="" src="static/fish-1.svg" /></div>
                        <div>Mee<br /><img class="" src="static/fish-2.svg" /></div>
                        <div>Met<br /><img class="" src="static/fish-3.svg" /></div>
                        <div>Jouw<br /><img class="" src="static/fish-4.svg" /></div>
                        <div>Idee<br /><img class="" src="static/fish-5.svg" /></div>
                    </div>
                </Card>
            </Section>
            <Switch fallback={"No Ideas"}>
                <Match when={response.loading}>Loading...</Match>
                <Match when={response()}>
                    <For each={response()?.data}>
                        {(i) => (
                            <>
                                <Section size={"col-12"}>
                                    <Card style={["color"]}>
                                        <Paragraph centered={true}>
                                        <For each={i.paragraphs}>
                                        {(p) => {
                                            if (p.sequence === 0 || p.sequence === 1) {
                                            return (
                                            <p>
                                                {p.text}
                                            </p>)}}}
                                        </For>
                                            <img src={`${i.leader.image}`} />
                                            <h1>{i.title}</h1>
                                        </Paragraph>
                                        <Video url={`${i.leader.video.source}`} />
                                    </Card>
                                </Section>
                                <Section size={"col-12"}>
                                    <Card style={["color"]}>
                                        <p class="centerimage">
                                            <Button type="submit" style={["no-float"]}>
                                                <h2>Bekijk de ideëen</h2>
                                            </Button>
                                        </p>
                                        <For each={i.paragraphs}>
                                        {(p) => {
                                            if (p.sequence !== 0 && p.sequence !== 1){
                                            return (
                                        <Paragraph centered={true} title={p.title}>
                                            {p.text}
                                        </Paragraph>)}}}
                                        </For>
                                    </Card>
                                </Section>
                                <Section size={"col-12"}>
                                    <Card style={["color"]}>
                                        <Paragraph centered={true}>
                                            <i>{i.disclaimer}</i>
                                            <p><small>{moment(i.createdAt).format('D-MMM-Y')} - {moment(i.updatedAt).format('D-MMM-Y')}</small></p>
                                        </Paragraph>
                                    </Card>
                                </Section>
                            </>
                        )}
                    </For>
                </Match>
            </Switch>
        </Page>
    )
}
