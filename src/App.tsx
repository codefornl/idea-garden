import { Switch, Match } from 'solid-js';
import { createRouteHandler } from './Router';
import { Menu } from './components/menu';
import { Home } from './pages/home';
import { IdeasPage } from './pages/ideasPage';
import { ExplainPage } from './pages/explainPage';
import { PrizePage } from './pages/prizePage';
import { PlatformPage } from './pages/platformPage';
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
          <Match when={matches("idea")}>
            <IdeaPage idea={window.location.hash.slice(2).split('/')[1]}/>
          </Match>
          <Match when={matches("ideas")}>
            <IdeasPage />
          </Match>
          <Match when={matches("explain")}>
            <ExplainPage />
          </Match>
          <Match when={matches("prize")}>
            <PrizePage />
          </Match>
          <Match when={matches("platform")}>
            <PlatformPage />
          </Match>
          <Match when={matches("rules")}>
            <RulesPage/>
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default App;
