import './style.scss';
import { Footer } from '../components/footer';

type size = "col-12" | "col-6" | "col-8" | "col-2"

interface Properties {
    children: any
}

interface SectionProperties {
    children: any
    size?: size
}

export const Section = (properties: SectionProperties) => (
    <div class={`ui ${properties.size ? properties.size : "col-12"}`}>
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