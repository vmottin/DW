function Login(){
    let user = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    
    if(user == 'rafaelLiberato' && senha == 'dw1_2022'){
        window.location.href = 'main.html';
    } else{
        alert("Dados incorretos. \nLogin: 'rafaelLiberato' \nSenha: 'dw1_2022'")
    }
}