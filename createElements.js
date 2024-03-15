export const createElements = async (array, div) => {
  div.innerHTML = '';
  return array.map((e, index) => div.innerHTML += `
  <th scope="row">${index + 1}</th>
  <td><img src="${e.escudoUrl}" class="img-fluid"/></td>
  <td>${e.tabela.pontos}</td>
  <td>${e.tabela.jogos}</td>
  <td>${e.tabela.vitorias}</td>
  <td>${e.tabela.empates}</td>
  <td>${e.tabela.derrotas}</td>
  <td>${e.tabela.gp}</td>
  <td>${e.tabela.gc}</td>
  <td>${e.tabela.sg}</td>
  `)
};


// pq tive que colocar i index no mapa dps do "e" para funcionar'