import './style.scss';
import { Page, Section } from './page';
import { Card } from '../components/card';
import { Paragraph } from '../components/paragraph';

export const PlatformPage = () => (
    <Page>
        <Section size={"col-12"}>
            <Card style={["color"]}>
                <Paragraph title="Crowdsourcing?" centered={true}>
                    Het crowdsourcing platform Ideeënvijver is van iedereen.
                    Daarom nodigen wij gemeenten en instanties van harte uit om ook
                    gebruik te maken van dit platform. Als u intresse heeft om ook
                    eens iets te doen met crowdsourcing, neem dan contact op met 
                    <a href="mailto://info@codefor.nl">info.at.codefor.nl</a>. 
                    We denken graag met u mee.
                </Paragraph>
            </Card>
        </Section>
    </Page>
)