import { Page, Section } from './page';
import { Card } from '../components/card';
import { Video } from '../components/video';
import { Button } from '../components/button';
import { Paragraph } from '../components/paragraph';

export const Home = () => (
    <Page>
        <Section size={"col-12"}>
            <Card style={["colorless"]}>
                <div class="icon-row">
                    <div>Doe<br/><img class="" src="static/fish-1.svg" /></div>
                    <div>Mee<br/><img class="" src="static/fish-2.svg" /></div>
                    <div>Met<br/><img class="" src="static/fish-3.svg" /></div>
                    <div>Jouw<br/><img class="" src="static/fish-4.svg" /></div>
                    <div>Idee<br/><img class="" src="static/fish-5.svg" /></div>
                </div>
            </Card>
        </Section>
        <Section size={"col-12"}>
            <Card style={["color"]}>
                <Paragraph centered={true}>
                    <p>Eindhoven nodigt je uit om <em>jouw stad</em> mooier, leuker, chiller en aantrekkelijker te maken!</p>
                    <p>Heel de maand juli kun je reageren op de vraag:</p>
                    <img src="static/route.png" />
                    <h1>Hoe zou jij het Centrum met Strijp-s verbinden?</h1>
                </Paragraph>
                <Video url="https://www.youtube.com/embed/hseiRm-JzXg?showinfo=0" />
            </Card>
        </Section>
        <Section size={"col-12"}>
            <Card style={["color"]}>
                <p class="centerimage">
                    <Button type="submit" style={["no-float"]}>
                        <h2>Bekijk de ideëen</h2>
                    </Button>
                </p>
                <Paragraph centered={true} title="Hoe?">
                    Een nieuw vervoersconcept? De reis spannender maken? Leuke ideeën? Doe Mee 
                    Met Jouw Idee! Je kunt ook de ideeën van anderen bekijken, aanvullen en 
                    stemmen op de ideeën die jou het meest aanspreken.
                </Paragraph>
                <Paragraph centered={true} title="Waarom?">
                    Strijp-s en het centrum van Eindhoven zijn nu twee gescheiden werelden. 
                    Je loopt niet voor je lol van het centrum naar Strijp-s of andersom. 
                    Dan pak je de trein of de bus of je gaat rechtstreeks naar huis. 
                    Hoe mooi zou het zijn als mensen die Strijp-s voor een evenement bezoeken, 
                    ook worden uitgenodigd de rest van Eindhoven te verkennen? Hoe mooi zou 
                    het zijn als winkelend publiek in het centrum ook even een hapje gaat eten op Strijp-s?
                </Paragraph>
                <Paragraph centered={true}>
                    Bezoekers zien meer, inwoners genieten meer en studenten ontdekken meer als we 
                    beide gebieden op een leuke manier met elkaar verbinden. Bovendien kunnen ondernemers 
                    profiteren van meer traffic.
                </Paragraph>
            </Card>
        </Section>
    </Page>
)
