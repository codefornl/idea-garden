import './style.scss'
import { createState } from 'solid-js';

export const Menu = (properties: any) => {
    const [state, setState] = createState({ shown: false})
    const toggle = () => {
        console.log("clicked" + properties.shown)
        setState('shown', c=> !c)
    }
    const hide = () => {
        setState('shown', c=> false)
    }
    return (
        <>
            <div class="ui menu">
                <img src="static/fish logo.png" class="ui menuelement" />
                <h3 class="ui menuelement">Ideeënvijver</h3>
                <span class="hamburger" onClick={toggle}></span>
                <nav style={state.shown ? "display:inline-block;": ""}>
                    <a onClick={hide} href="#/" class="ui menuelement option fold">Challenge</a>
                    <a onClick={hide} href="#/ideas" class="ui menuelement option fold">Ideas</a>
                    <a onClick={hide} href="#/explain" class="ui menuelement option fold">How it works</a>
                    <a onClick={hide} href="#/prize" class="ui menuelement option fold">Winners</a>
                    <a onClick={hide}href="#/platform" class="ui menuelement option fold">Platform</a>
                </nav>
                
            </div>
        </>
    )
}