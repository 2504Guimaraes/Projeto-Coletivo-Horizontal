/*---- Função de Rolagem da Barra Lateral: ----*/

/*
	Essa é baseada nos links de lista encontrados dentro de "#painel-lateral" que contenham
	rash(#) dentro do seu href.
*/

const ItemsPnelLateral = document.querySelectorAll('#painel-lateral a[href^="#"]');

/*
	Para cada item (link com endereço ou <a href="#endereço"></a>  ) 
	dentro do painel lateral, é retornado ele mesmo, e ao clicar, a função 
	de "Rolagem Para o Destino" será ativada.
*/

ItemsPnelLateral.forEach( item_do_pnelLateral => {
	item_do_pnelLateral.addEventListener('click', Rolar_para_ID_noClick);

})


/*---- Função de Rolagem da Barra de Navegação Padrão: ----*/
/*
	Já essa é baseada nos links de lista encontrados dentro de "#lista-navbar" que contenham
	rash(#) dentro do seu href.
*/

const ItemsNav = document.querySelectorAll('#lista-navbar li a[href^="#"]');

ItemsNav.forEach( item_da_Navbar => {
	item_da_Navbar.addEventListener('click', Rolar_para_ID_noClick);
})

/*---- Função de Rolagem dos links no Footer: ----*/
/*
	Já essa é baseada nos links de lista encontrados dentro de "li .navegacao" que contenham
	rash(#) dentro do seu href.
*/

const Links_Footer = document.querySelectorAll('#links-do-footer li a[href^="#"]');

Links_Footer.forEach( item_do_Footer => {
	item_do_Footer.addEventListener('click', Rolar_para_ID_noClick);
})


/*---- Função de Rolagem do Botão Contate-nos: ----*/

/* mesma explicação */

const Btn_Contato = document.querySelectorAll('#container-btnlink-contatenos a[href^="#"]');

Btn_Contato.forEach( item_do_btn => {
	item_do_btn.addEventListener('click', Rolar_para_ID_noClick);
})


/*---- ----------------------------------- ----*/

function Rolar_para_ID_noClick(event){
	/*
		primeiro desativamos o comportamento padrão de pular para o 
		link direto sem o smooth. Simplesmente cancelamos o comportamento
		padrão do evento.
	*/

	event.preventDefault();
	const ElementoClicado =	event.target; /* elemento clicado = endereço do link */
	const idElemento = ElementoClicado.getAttribute('href'); /* texto contido dentro do href = Atributo "href" do link */
	const secaoDestino = document.querySelector(idElemento).offsetTop; 
	/* cordenada do destino (afinal estamos rolando para cima e para baixo no eixo Y) = valor de deslocamento verdical
	necessário para alcançar cada endereço de link consultado. */


	window.scroll({ /* valor retornado ao fazermos tudo isso: */
		top: secaoDestino - 120, /* cordenada do destino - 120px (altura da minha barra de navegação) */
		behavior: "smooth" 
		/*o comportamento do deslocamento é definido como suave em vez do deslocamento direto padrão que
			haviamos cancelado antes. */
	});
}