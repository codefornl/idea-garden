import { Card } from '../card'
import './style.scss'

export const Footer = () => (
    <div class="ui col-12">
        <Card style={["colorless", "footerimage"]}>
            <div class="centerimage">
                <img src="static/bottom2.png" />
            </div>
        </Card>
        <Card style={["color", "footer"]}>
            <div class="ui col-4 third">
                <div>
                    Dit crowdsourcing platform is een initiatief van de gemeente Eindhoven, en is als pilot ontwikkeld door Code for NL.
                    Vragen? Neem contact op met <a href="mailto:info@codefor.nl">info@codefor.nl</a>
                </div>
            </div>
            <div class="ui col-4 third logos">
                <div><img class="keepsize" src="static/eindhoven.png" /></div>
                <div><img class="keepsize" src="static/codefornl.png" /></div>
            </div>
            <div class="ui col-4 third right">
                <div>
                    <a href="/#/rules">'menu.rules'</a>
                </div>
                <div>
                    <a href="/#/explain">'menu.explain'</a>
                </div>
                <div>
                    <a href="/#/">'menu.challenge'</a>
                </div>
                <div>
                    <a href="mailto:info@ideeenvijver.nl">'menu.contact'</a>
                </div>
            </div>
        </Card>
    </div>
)