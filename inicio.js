let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
// Puxa o nome do user no storage e, com template string, ele chama o nome cadastrado
let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${usuarioLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa efetuar o login!')
    window.location.href = './login.html'
    // Evita de acessar essa pagina sem efetuar o login
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('usuarioLogado')
    window.location.href = './login.html'
}

