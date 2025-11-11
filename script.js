// Botão "Voltar ao topo"
const topoBtn = document.createElement("button");
topoBtn.id = "topoBtn";
topoBtn.title = "Voltar ao topo";
topoBtn.textContent = "↑";
document.body.appendChild(topoBtn);

window.addEventListener("scroll", () => {
    topoBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

topoBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Saudação com base na hora
const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();
let mensagem = "Olá! Seja bem-vindo ao consultório do Dr. Daniel.";

if (hora < 12) {
    mensagem = "Bom dia! Pronto para cuidar do seu sorriso?";
} else if (hora < 18) {
    mensagem = "Boa tarde! Agende sua consulta com o Dr. Daniel.";
} else {
    mensagem = "Boa noite! Estamos prontos para te atender.";
}

saudacao.textContent = mensagem;

// Validação simples do formulário
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            e.preventDefault();
        }
    });
}

// Animação suave ao clicar nos links do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Destaque de seção ativa no menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

    navLinks.forEach(link => link.classList.remove("ativo"));
    navLinks[index].classList.add("ativo");
});

// Menu hambúrguer responsivo
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}