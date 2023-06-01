import { HomePage } from "./pages/HomePage/index.js";
import { RecipesPage } from "./pages/RecipesPage/index.js";
import { ErrorPage } from "./pages/ErrorPage/index.js";
import './style.css';

const appElement = document.querySelector('#app');

if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/recepty') {
  appElement.append(RecipesPage());
} else {
  appElement.append(ErrorPage());
};
