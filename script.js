var carta1 ={
    nome:"LeBron James",
    imagem:"https://ogimg.infoglobo.com.br/in/25121792-a56-9ce/FT1086A/lebron-james.jpg",
    atributos:{
    Ataque: 9,
    Defesa: 8,
    Arremesso: 9
  }
};

var carta2 ={
    nome:"Stephen Curry",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png",
    atributos:{
    Ataque: 9,
    Defesa: 7,
    Arremesso: 10
  }
};

var carta3 ={
    nome:"Nikola Jokic",
    imagem:"https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png?imwidth=1040&imheight=760",
    atributos:{
    Ataque: 9,
    Defesa: 9,
    Arremesso: 8
  }
};

var carta4 ={
    nome:"Giannis Antetokoumpo",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203507.png",
    atributos:{
    Ataque: 9,
    Defesa: 8,
    Arremesso: 8
  }
};

var carta5 ={
    nome:"Joel Embiid",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203954.png",
    atributos:{
    Ataque: 9,
    Defesa: 9,
    Arremesso: 7
  }
};

var carta6 ={
    nome:"Demar DeRozan",
    imagem:"https://www.nba.com/resources/static/team/v2/bulls/roster/2021/players/201942-roster-cutout.png",
    atributos:{
    ataque: 8,
    defesa: 9,
    arremesso: 8
  }

};
var carta7 ={
    nome:"Kevin Durant",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201142.png",
    atributos:{
    Ataque: 9,
    Defesa: 9,
    Arremesso: 10
  }
};

var carta8 ={
    nome:"Kawhi Leonard",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png",
    atributos:{
    Ataque: 8,
    Defesa: 10,
    Arremesso: 8
  }
};

var carta9 ={
    nome:"Kyrie Irving",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202681.png",
    atributos:{
    Ataque: 9,
    Defesa: 6,
    Arremesso: 8
  }
};

var carta10 ={
    nome:"Klay Thompson",
    imagem:"https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202691.png",
    atributos:{
    Ataque: 7,
    Defesa: 9,
    Arremesso: 10
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9,carta10]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random()* 11);
  cartaMaquina = cartas [numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random()* 11);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 11);   
  
}
  
cartaJogador = cartas[numeroCartaJogador];
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}
  function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
    
  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}
 
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
     }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  //mostra no Tela
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


