var barra = document.getElementById('barra_de_navegacao');
var img_logotipo = document.getElementById('logotipo-img');
var img_hamburger_btn = document.getElementById('hamburuger-btn-simbolo');
var botaoPraCima = document.getElementById('botao-Pra-Cima');
var links_navbar = document.getElementsByClassName('link-navbar');
var Painel_Lateral = document.getElementById('painel-lateral');
var container_larguraHeader = document.getElementById('container-largura-txt-header');

window.onscroll = function(){
	mudarCorNav()
	mudarTamanhoNav()
	mudarImgLogotipo()
	mudarAlturaContainerHeader()
	mudarImg_Hamburguer_btn()
	mudarCorLinks_Nabvar()
	apareceOuSomeBTN()
};

function mudarCorNav(){
	
	/* se o número de pixels rolados no sentido Y da página for > 50.
	A barra de navegação deixará de ser transparente. */

	if(window.pageYOffset > 50){
		barra.style.background = "#fff";
		barra.style.boxShadow = "none";
	}else{
		barra.style.background = "transparent";
		barra.style.boxShadow = "none";
	}
}

function mudarTamanhoNav(){

	/*se a quantidade de pixels entre a barra de navegação e o topo da
		página for > 50, ela ficará com o padding maior. */

	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
		barra.style.padding = "10px 0px";
		img_logotipo.style.left= "10px"; 
	}else{
		barra.style.padding = "0px";
		img_logotipo.style.left= "0px"; 
	}
}

	/* se a qantidade de pxls entre a barra de navegação e o topo da página for > 100, 
	o logotipo irá mudar */

function mudarImgLogotipo(){
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		img_logotipo.src = "./img/logotipo-azul.png";
	}else{
		img_logotipo.src = "./img/logotipo.png";
	}
}

function mudarImg_Hamburguer_btn(){
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		img_hamburger_btn.src = "./img/menu-button.svg";
	}else{
		img_hamburger_btn.src = "./img/menu-button-branco.svg";
	}
}

function mudarCorLinks_Nabvar(){
	/*
		se a qantidade de pxls entre a barra de navegação e o topo da página for > 50, 
		o a cor de cada link dentro da classe "link navbar" irá mudar
	*/

	for(i = 0; i < links_navbar.length ; i++)
	{
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
		{ 
			links_navbar[i].style.color = "#19379c"; 
		}else{ 
			links_navbar[i].style.color = "#fff"; 
		}
	}
}

function mudarAlturaContainerHeader(){
	if(document.body.onscrollTop > 50 || document.documentElement.scrollTop > 50){
		container_larguraHeader.style.height = "calc(100% - 120px)";
	}else{
		container_larguraHeader.style.height = "calc(100% - 100px)";
	}
}

function apareceOuSomeBTN(){
	if(document.body.onscrollTop > 550 || document.documentElement.scrollTop > 550){
		botaoPraCima.style.display = "block";
	}else{
		botaoPraCima.style.display = "none";
	}
}

/*
	Ao click do meu link confi. como botão, essa função é executada
	para fazer o botao rolar a página até o topo.
*/

function irPraCima(){
	if(window.scrollY != 0)
	{
		/*
			caso o eixo Y da página não estiver em zero(ou seja, o topo)
			a função executará o processo setTimeout ou seja "definir tempo limite"
			, o qual definirá um evento interno que irá acontecer e o seu tempo limite em
			milissegundos. Aqui no caso, irá ex. o método perder - 120pxs pra cima, até
			chegar a zero, ou seja, até voltar ao topo da página. 
		*/

		setTimeout(function rolarProTopo(){
			window.scrollTo(0, window.scrollY - 120);
			irPraCima()
		}, 10);
	}
}


/*---------- Mostrar Painel Lateral: ----------*/

function abrirPainel(){
	Painel_Lateral.style.width = "265px";
	Painel_Lateral.style.boxShadow = "rgb(39, 39, 39) 40px 0px 35px 20px"; 
}

function fechar_painel(){
	Painel_Lateral.style.width = "0";
	Painel_Lateral.style.boxShadow = "none";
}