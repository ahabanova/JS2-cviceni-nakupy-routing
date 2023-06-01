import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";
import './style.css';

export const ErrorPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container">
    <h1 class="error">ERROR</h1>
  </main>
    `;
  element.append(Footer());

  return element;
}
