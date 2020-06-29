import { Switch, Match } from 'solid-js';
import { createRouteHandler } from './Router';
import { Menu } from './components/menu';
import { Home } from './pages/home';
import { IdeasPage } from './pages/ideasPage';
import { Explain } from './pages/explain';
import { Prize } from './pages/prize';
import { Platform } from './pages/platform';
import { IdeaPage } from './pages/ideaPage';
import { RulesPage } from './pages/rulesPage';


function App() {
  const matches = createRouteHandler();
  return (
    <div id="content">
      <div>
        <Menu />
        <Switch>
          <Match when={matches("home")}>
            <Home />
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("idea")}>
            <IdeaPage idea={window.location.hash.slice(2).split('/')[1]}/>
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("ideas")}>
            <IdeasPage />
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("explain")}>
            <Explain />
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("prize")}>
            <Prize />
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("platform")}>
            <Platform />
          </Match>
        </Switch>
        <Switch>
          <Match when={matches("rules")}>
            <RulesPage/>
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default App;
