
const  controleBotaoTeste = document.getElementById('.container__button__rules');

function listenToTheButton () {
    alert('deu bom parsa');
}
 
const teste = controleBotaoTeste.addEventListener('click', listenToTheButton);

export { teste };
