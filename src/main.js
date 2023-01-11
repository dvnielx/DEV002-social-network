import { Home } from "./pages/Home.js";
import { Register } from "./pages/Register.js";

const root = document.getElementById('root')
const routes = {
'/': Home,
'/': Register,

};

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
    root.removeChild(root.firstChild);
    root.appendChild(routes[pathname]());
  };
  const component = routes[window.location.pathname];

    window.onpopstate = () => {
    root.removeChild(root.firstChild);
    root.append(component());
};

root.appendChild(component());

