import { Switch, Match } from 'solid-js';
import { createRouteHandler } from './Router';
import { Menu } from './components/menu';
import { Home } from './pages/home';
import { Ideas } from './pages/ideas';
import { Explain } from './pages/explain';
import { Prize } from './pages/prize';
import { Platform } from './pages/platform';


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
          <Match when={matches("ideas")}>
            <Ideas />
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
      </div>
    </div>
  );
}

export default App;
