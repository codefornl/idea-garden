import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';
import { Stages, StageProperties } from '../components/stage/stage';


export const Explain = () => {
    const stages: StageProperties[] = [
        {
            image: "static/stage1_hi.png",
            title: "Het kikkervisje",
            text: "Je hebt een idee bedacht en gepost"
        },
        {
            image: "static/stage2_hi.png",
            title: "Hetkleine visje",
            text: "e hebt jouw idee aangevuld met extra informatie en schetsen/afbeeldingen!"
        },
        {
            image: "static/stage3_hi.png",
            title: "De grote vis",
            text: "Jouw idee spreekt anderen aan! Er word op gestemd, toevoegingen gedaan, vragen gesteld en schetsen toegevoegd."
        },
        {
            image: "static/stage4_hi.png",
            title: "De kei grote vis",
            text: "Jouw idee staat in de top 5! Er is zo veel op gestemd dat jouw idee tot één van de vijf beste ideeën hoort."
        },
        {
            image: "static/stage4_hi.png",
            title: "De koningsvis",
            text: "Jouw idee staat op nummer 1 in de top 5! Een jury zal uiteindelijk kiezen of jouw idee ook daadwerkelijk de titel “Koningsvis 2016” verdient."
        }
    ]
    return (
        <Page>
            <Section size={"col-12"}>
                <Card style={["colorless"]}>
                    <Paragraph centered={true} title="Hoe werkt de Ideënvijver?">
                        Elke vis in de vijver is een idee. Hoe groter je vis, hoe verder je 
                        idee al ontwikkeld is. Elke vis kan uitgroeien tot hét winnende idee: 
                        de Koningsvis! Hieronder kun je zien welke stappen je idee kan zetten. 
                        Je vis groeit dus mee, met jouw idee!
                </Paragraph>
                </Card>
                <Card style={["color"]}>
                    <Stages centered={true} stages={stages} />
                </Card>
                <Card style={["colorless"]}>
                    <Paragraph centered={true} title="Hoe kan ik winnen?">
                        Er zijn twee prijzen. Je kunt winnen door het winnende idee 
                        in te dienen óf door zoveel en zo goed mogelijk bij te dragen 
                        aan de ideeën van anderen.
                    </Paragraph>
                    <Paragraph centered={true}>
                        We zijn op zoek naar leuke en innovatieve ideeën om het centrum 
                        en Strijp-s met elkaar te verbinden. Maak het leuker voor voetgangers 
                        om er te lopen of bedenk een vervoersconcept. De kans dat je wint is 
                        extra groot als de pijlers van Eindhoven Design, Kennis en Technologie, 
                        terugkomen in jouw idee. 
                    </Paragraph>
                    <Paragraph centered={true}>
                        We geloven dat de beste ideeën tot stand komen als je samenwerkt. 
                        Daarom wordt samenwerken beloond: er is een prijs voor degene die het 
                        beste heeft meegedacht met de ideeën van anderen. Dit doe je door ideeën 
                        van anderen aan te vullen met vragen, opmerkingen, schetsen, afbeeldingen 
                        of vragen te stellen.
                    </Paragraph>
                    <Paragraph centered={true} title="Wat kan ik winnen?">
                        De mogelijkheid dat jouw idee werkelijkheid wordt! Als je wilt mag je 
                        hier zelf ook een rol in nemen en meewerken aan de totstandkoming van 
                        jouw idee. Je krijgt een officiële publicatie in Groot Eindhoven, een 
                        artikel op de website van Eindhoven en een publieksonthulling tijdens 
                        de Dutch Design Week. Bovendien is er €1000,- te winnen! €500,- voor 
                        de Indiener van hét winnende idee en €500,- voor de Beste Samenwerker.
                    </Paragraph>
                    <Paragraph centered={true}>
                        In de maand juli kun je jouw idee indienen. Van 1 juli tot en met 26 
                        juli kun je jouw ideeën posten, de ideeën van anderen bekijken, deze 
                        aanvullen en omhoog of omlaag stemmen. Van 27 juli tot en met 30 juli 
                        gaat de jury in beraad over wie de winnaars zijn. Op 31 juli worden de 
                        winnaars bekend gemaakt!
                    </Paragraph>
                    <Paragraph centered={true} title="Crowdsourcing">
                        Een goed plan begint altijd met een idee. Via crowdsourcing, waarbij 
                        kennis en ideeën van een grote groep mensen gebundeld kan worden, 
                        denken er ineens honderden mensen na over een vraagstuk in plaats van 
                        een paar specialisten. De kans op een innovatief en verrassend idee is 
                        hierdoor vele malen groter.
                    </Paragraph>
                </Card>
            </Section>
        </Page>
    )
}