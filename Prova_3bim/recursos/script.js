function Login(){
    let user = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    
    if(user == 'victoria' && senha == 'dw'){
        window.location.href = 'main.html';
    } else{
        alert("Senha incorreta")
    }
}