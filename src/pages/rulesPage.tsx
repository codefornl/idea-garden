import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';

export const RulesPage = () => (
    <Page>
    <Section size={"col-12"}>
        <Card style={["color"]}>
        <Paragraph title="Regels" centered={true}>
            Alles wat op Ideeënvijver wordt gedeeld valt onder een <a href="">Creative Commons Licentie</a>. 
            Dit betekent dat je al je rechten behoudt en anderen toestemming geeft om het werk te delen, 
            verspreiden en te gebruiken. Dit kan in elk medium en format voor elk doel, ook voor commerciële 
            doeleinden.
        </Paragraph>
        <Paragraph centered={true}>
            Posts met grof taalgebruik of schokkend beeldmateriaal worden verwijderd.
        </Paragraph>
        </Card>
    </Section>
    </Page>
)