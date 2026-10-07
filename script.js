/* =====================================================
   DROPDOWN DO MENU
===================================================== */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {

    const botao = dropdown.querySelector(".dropdown-btn");

    if (!botao) {
        return;
    }

    botao.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        /* Fecha os outros menus */

        dropdowns.forEach(function (outro) {

            if (outro !== dropdown) {
                outro.classList.remove("aberto");
            }

        });


        /* Abre ou fecha o menu clicado */

        dropdown.classList.toggle("aberto");

    });

});


/* =====================================================
   FECHAR MENU CLICANDO FORA
===================================================== */

document.addEventListener("click", function (event) {

    dropdowns.forEach(function (dropdown) {

        if (!dropdown.contains(event.target)) {

            dropdown.classList.remove("aberto");

        }

    });

});


/* =====================================================
   DATA ATUAL
===================================================== */

const dataAtual = document.getElementById("dataAtual");

if (dataAtual) {

    const agora = new Date();

    dataAtual.textContent =
        "Data atual: " +
        agora.toLocaleDateString("pt-BR");

}


/* =====================================================
   TELEFONE
===================================================== */

const telefone = document.querySelector(
    'a[href^="tel:"]'
);

if (telefone) {

    telefone.addEventListener("click", function () {

        console.log(
            "Telefone: (32) 9912-4578"
        );

    });

}


/* =====================================================
   EMAIL / OUTLOOK
===================================================== */

const btnEmail = document.getElementById("btnEmail");

if (btnEmail) {

    btnEmail.addEventListener("click", function (event) {

        event.preventDefault();

        const email =
            "finançasbank@gmail.com.br";

        const assunto =
            "Contato - Poupe Bank";

        const mensagem =
            "Olá, Poupe Bank!";


        const mailto =
            "mailto:" +
            encodeURIComponent(email) +
            "?subject=" +
            encodeURIComponent(assunto) +
            "&body=" +
            encodeURIComponent(mensagem);


        /* Abre o aplicativo de e-mail padrão do computador */

        window.location.href = mailto;

    });

}