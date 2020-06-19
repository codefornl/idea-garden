import './style.scss';
import { Footer } from '../components/footer';

type size = "col-12"
interface Properties {
    children: any
}

interface SectionProperties {
    children: any
    size?: size[]
}

export const Section = (properties: SectionProperties) => (
    <div class={`ui ${properties.size ? properties.size.join(" ") : ""}`}>
        {properties.children}
    </div>
)
export const Page = (properties: Properties) => (
    <div class="ui page">
        <div class="ui grid">
            {properties.children}
            <Footer />
        </div>
    </div>
)