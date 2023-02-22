
let botao = document.querySelector('.material-symbols-outlined')


botao.addEventListener('click', () =>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type' , 'text')
    } else {
        inputSenha.setAttribute('type' , 'password')
    }
})


    function logar () {
        let login = document.querySelector('#usuario')
        let loginLabel = document.querySelector('#labelLoginUsuario')


        let senha = document.querySelector('#senha')
        let loginSenha = document.querySelector('#labelLoginSenha')

        let mensagemErro = document.querySelector('#erro')
        let listaUsuario = []


        let usuarioValidado = {
            nome: '',
            usuario: '',
            senha: ''
        }
        //listaUser = lista do usuario cadastrado no Local Storage
        listaUsuario = JSON.parse(localStorage.getItem('listaUser'))

        listaUsuario.forEach((item) => {
            if(login.value == item.usuarioCadastrado && item.senhaCadastrado){
                
                // se for == o objeto vai ser preenchido por:
                usuarioValidado = {
                    nome: item.nomeCadastrado,
                    usuario: item.usuarioCadastrado,                    
                    senha: item.senhaCadastrado
                }
            }
        })

        // Verificar se o login e senha está correto
        if (usuario.value == usuarioValidado.usuario && senha.value == usuarioValidado.senha){
            window.location.href = './index.html'

            // autenticação em token aleatorio para manter logado // 16 strings
           let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
           localStorage.setItem('token' ,token)

           localStorage.setItem('usuarioLogado' , JSON.stringify(usuarioValidado))
    
        } else{
            loginLabel.setAttribute('style' , 'color: red')
            usuario.setAttribute('style' , 'color: red')
            loginSenha.setAttribute('style' , 'color: red')
            senha.setAttribute('style' , 'color: red')

            mensagemErro.setAttribute('style' , 'display: block')
            mensagemErro.innerHTML = 'Usuario não encontrado'
            // Volta para a aba de usuario para se reescrito
            usuario.focus()
            
        }

}

