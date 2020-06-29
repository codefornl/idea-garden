import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';

export const PrizePage = () => (
    <Page>
        <Section size={"col-12"}>
            <Card style={["colorless"]}>
                <Paragraph centered={true} title="Dankjewel voor jullie ideeën!">
                    De Ideeënvijver vroeg afgelopen zomer aan Eindhoven 
                    'Hoe zou jij het centrum met Strijp-s verbinden?'. 
                    Jullie enthousiasme zorgde voor vette ideeën, 
                    kudos en aanvullingen op elkaars ideeën. 
                    Het resultaat? Vier winnaars!
                </Paragraph>
            </Card>
            <Card style={["color"]}>
                <Paragraph centered={true}>
                    Het winnende Idee:
                </Paragraph>
                <Paragraph centered={true} title="Pop-up Promenade">
                    Het plaatsen van transparante pop-up boxen (omgebouwde containers) 
                    waar steeds verschillende exposities of activiteiten rondom design 
                    in plaats kunnen vinden, langs een groenere route die meer 
                    aantrekkelijk is voor de voetgangers.
                </Paragraph>
                <Paragraph centered={true}>
                    Beste samenwerkers:
                </Paragraph>
                <Paragraph centered={true} title={"PSV Walk of Fame & Eindje om"} />
                <Paragraph centered={true}>
                    De Gouden Guppie:
                </Paragraph>
                <Paragraph centered={true} title={"Big Objects"} />
                <Paragraph centered={true}>
                    Publieksprijs:
                </Paragraph>
                <Paragraph centered={true} title={"De Luchtbrug Eindhoven"} />
            </Card>
            <Card style={["colorless"]}>
                <Paragraph centered={true}>
                    Tijdens de Dutch Design Week hebben alle winnaars hun ideeën mogen 
                    presenteren in het Van Abbemuseum. De ideeën hebben zelfs een plekje 
                    gekregen in de expositieruimte “Van wie is de straat?” 4 maanden lang, 
                    van de Dutch Design Week tot GloW. Maar wat is er nu precies gebeurd 
                    met al deze mooie ideeën?
                </Paragraph>
                <img style="width:100%;" src="/static/presentation1.JPG"/>
                <Paragraph centered={true}  title={"Wat is er gebeurd met het winnende idee?"}>
                    Mathijs Dielissen, de bedenker van het winnende idee bleek een student 
                    Landscape Design te zijn aan de HAS Hogeschool in Den Bosch. Gemeente 
                    Eindhoven heeft hem na een kennismakingsgesprek direct een afstudeerplek 
                    aangeboden. Zo kreeg Mathijs de mogelijkheid om zijn eigen idee te toetsen 
                    aan de bestaande situatie en visie van de gemeente Eindhoven. Het idee 
                    wordt steeds concreter en wordt overal erg goed ontvangen! Momenteel zijn 
                    we op zoek naar een geschikte ruimte om de pop-up boxen te plaatsen en 
                    kijken hoe ze er precies uit komen te zien. Dit kan in de vorm van omgebouwde 
                    containers, maar misschien ook wel als omgebouwde Engelse telefooncellen. 
                    Daarnaast wordt er naar de financiering gekeken. Het idee Pop-up Promenade 
                    sluit goed aan bij de ambities van een ander project genaamd de Groene Corridor. 
                    De mogelijkheden voor een mooie koppeling loopt as we speak!
                </Paragraph>
                <img style="width:100%;" src="/static/presentation2.JPG"/>
                <img style="width:100%;" src="/static/presentation3.JPG"/>
                <Paragraph centered={true}>
                    Dankzij het idee van de Pop-up Promenade zijn we een stap dichterbij de 
                    realisatie van een aantrekkelijker gebied tussen het centrum en Strijp-s 
                    en we verwachten de eerste stappen dit jaar al te kunnen zetten!
                </Paragraph>
            </Card>
        </Section>
    </Page>
)