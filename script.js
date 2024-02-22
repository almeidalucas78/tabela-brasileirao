import { fetchJson } from "./fetchJson.js";

const divTimes = document.getElementById('times');

const createElements = async () => {
  const data = await fetchJson();
  return data.map(e => divTimes.innerHTML += `
    <p>${e.nome}</p>
    <img src="${e.escudoUrl}"/>
  `)
};

window.addEventListener("load", createElements);

