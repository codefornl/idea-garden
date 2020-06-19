import './style.scss'

interface Properties {
    url: string
}
export const Video = (properties: Properties) => (
    <div class="videoWrapper">
        <iframe src={properties.url}/>
    </div>
)