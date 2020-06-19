import './style.scss'

export const Menu = () => (
    <>
        <div class="ui menu">
            <div></div>
            <img src="static/fish logo.png" class="ui menuelement" />
            <nav>
                <h3 class="ui menuelement">Ideeënvijver</h3>
                <img src="static/hamburger.png" class="ui menuelement hamburger" />
                <a href="#/" class="ui menuelement option fold">Challenge</a>
                <a href="#/ideas" class="ui menuelement option fold">Ideas</a>
                <a href="#/explain" class="ui menuelement option fold">How it works</a>
                <a href="#/prize" class="ui menuelement option fold">Winners</a>
                <a href="#/platform" class="ui menuelement option fold">Platform</a>
            </nav>
        </div>
    </>
)