document.getElementById("btn-submit").addEventListener('click', e=>{
    console.log('botao clicado');
});

document.getElementById("form-login").addEventListener('mouseenter', e=>{
    console.log('o mouse esta sobe o form');
});

document.querySelector('#form-login').addEventListener('mouseleave', e=>{
    console.log('o mouse esta fora o form');
});

document.querySelector('#form-login').addEventListener('submit', e=>{
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let json={
        email,
        password
    }
    if (!json.email){
        console.error("o campo deve ser preenchido");
    } else if (!json.password){
        console.error("o campo deve ser preenchico");
    } else{
        console.info("foi");
    }
});

