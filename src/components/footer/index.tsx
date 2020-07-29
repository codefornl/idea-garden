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
            <div class="ui col-6 third logos">
                <div>
                    <p>Ideeënvijver is een initiatief ontwikkeld door de community van:</p>
                    <a href="https://codefor.nl"><img class="keepsize" src="static/Logo-orange-01.png" width="200"/></a>
                </div>
            </div>
            <div class="ui col-6 third right">
                <div>
                    <a href="/#/rules">spelregels</a>
                </div>
                <div>
                    <a href="/#/explain">uitleg</a>
                </div>
                <div>
                    <a href="/#/">home</a>
                </div>
                <div>
                    <a href="mailto:info@ideeenvijver.nl">contact</a>
                </div>
            </div>
        </Card>
    </div>
)