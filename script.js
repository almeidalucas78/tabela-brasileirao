import { fetchJson } from "./fetchJson.js";
import { createElements } from "./createElements.js";

var dataGlobal;

const divTimes = document.getElementById('times');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');
const teamHome = document.getElementById('teamHome');
const teamOut = document.getElementById('teamOut');
const btnMatch = document.getElementById('btnMatch');
const inputHome = document.getElementById('inputHome');
const inputOut = document.getElementById('inputOut');



const createMatch = () => {
  dataGlobal.map(e => teamHome.innerHTML += `
    <option>${e.nome}</option>
  `)
  dataGlobal.map(e => teamOut.innerHTML += `
    <option>${e.nome}</option>
  `)
}

const getByName = (event) => {
  event.preventDefault();
  const teamFilter = dataGlobal.filter(e => e.nome === inputSearch.value);
  createElements(teamFilter, divTimes);
}

const app = async () => {
  const data = await fetchJson();
  if (!localStorage.getItem("teams")) {
    localStorage.setItem("teams", JSON.stringify(data))
  }
  const dataTeams = JSON.parse(localStorage.getItem("teams"));
  dataGlobal = dataTeams;
  dataTeams.sort((a, b) => b.tabela.pontos - a.tabela.pontos);
  createElements(dataTeams, divTimes)
  createMatch();
}


window.addEventListener("load", app);
btnSearch.addEventListener("click", getByName)
btnMatch.addEventListener("click", (event) => {
  event.preventDefault();
  const scoreHome = inputHome.value;
  const scoreOut = inputOut.value;
  const nameHome = teamHome.value;
  const nameOut = teamOut.value;
  const score = {
    'TimeHome': nameHome,
    'TimeOut': nameOut,
    scoreHome,
    scoreOut,
  };
  console.log(score);
})