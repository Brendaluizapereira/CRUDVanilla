alert("Os dados ficarão armazenados na minha database. NÃO USE SENHAS REAIS!");

    let tentativa = 3; 

    function validar() {
        let usuario = document.getElementById("usuario").value;
        let senha = document.getElementById("senha").value;

        if ( usuario == "brendapereira@gmail.com" && senha == "71397139") {
        alert ("Você acabou de logar.");
        window.location = "https://google.com"; 
        return false;
        }

        else {
            tentativa --;
            alert("Você tem mais " + tentativa + " tentativas. Se não for cadastrado, cadastre-se.");

            if( tentativa == 0){
                document.getElementById("usuario").disabled = true;
                document.getElementById("senha").disabled = true;
                document.getElementById("entrar").disabled = true;
                return false;
            }
        }
    }