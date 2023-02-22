let botao = document.querySelector('.material-symbols-outlined')
let botaoConfirma = document.querySelector('#confirmar')

// Campo de confirmação dos input
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmarSenha = document.querySelector('#senhaConfirmar')
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
let validConfirmarSenha = false

//Mensagem de certo ou errado
let mensagemErro = document.querySelector('#textoErro')
let mensagemSucesso = document.querySelector('#textoSucesso')

nome.addEventListener('keyup' , ()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<p>Nome *O mínimo permitido são 3 caracteres</p>'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true
    }
})

usuario.addEventListener('keyup' , ()=>{
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = '<p>Usuario *O mínimo permitido são 5 caracteres</p>'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        validUsuario = true
    }
})

senha.addEventListener('keyup' , ()=>{
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<p>Senha *O mínimo permitido são 6 caracteres</p>'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

confirmarSenha.addEventListener('keyup' , ()=>{
    if(senha.value != confirmarSenha.value){
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = '<p>Confirmar *As senhas não batem</p>'
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green')
        labelConfirmarSenha.innerHTML = 'Confirmar senha'
        validConfirmarSenha = true
    }
})
// FIM do campo de confirmação dos input 

// Preencher todos os campos
function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmarSenha){
        // transforma o storage em json             adicionar em uma lista ou criar uma vazia   
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')
        // Array de objeto adc
        listaUsuarios.push({
            nomeCadastrado: nome.value,
            usuarioCadastrado: usuario.value,
            senhaCadastrado: senha.value
        })

        // Criar registro
        localStorage.setItem('listaUser' , JSON.stringify(listaUsuarios))



        // Mensagem de preenchido corretamente ou não
        mensagemSucesso.setAttribute('style' , 'display:block')
        mensagemSucesso.innerHTML = '<p>Cadastrando, aguarde...</p>'

        mensagemErro.setAttribute('style' , 'display:none')
        mensagemErro.innerHTML = ''

        // TIMEOUT É UM ATRASO/DELAY
        setTimeout(()=>{
            window.location.href = './login.html'
        }, 4000 ) //4segundos
        

    } else {
        mensagemErro.setAttribute('style' , 'display:block')
        mensagemErro.innerHTML = '<p>Preencha todos os campos corretamente!</p>'

        mensagemSucesso.setAttribute('style' , 'display:none')
        mensagemSucesso.innerHTML = ''
    }
}

//Evento de ver senha ao clicar no icone
botao.addEventListener('click', () =>{
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type' , 'text');
    } else {
        inputSenha.setAttribute('type' , 'password');
    }
})


botaoConfirma.addEventListener('click', () =>{
    let inputConfirmarSenha = document.querySelector('#senhaConfirmar')

    if (inputConfirmarSenha.getAttribute('type') == 'password'){
        inputConfirmarSenha.setAttribute('type' , 'text')
    } else {
        inputConfirmarSenha.setAttribute('type' , 'password')
    }
})





