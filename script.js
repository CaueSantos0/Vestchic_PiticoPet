document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o container onde o formulário será inserido
    const formContainer = document.getElementById("formContainer");

    // Cria o formulário de cadastro
    const form = document.createElement("form");
    form.id = "formCadastro";

    // Cria os campos do formulário
    const fields = [
        { label: "Email:", type: "email", id: "email", required: true },
        { label: "Senha:", type: "password", id: "senha", required: true },
        { label: "Telefone:", type: "text", id: "telefone", required: true, maxLength: 11 },
        { label: "CPF:", type: "text", id: "cpf", required: true, maxLength: 11 },
        { label: "Idade:", type: "number", id: "idade", required: true, max: 99 }
    ];

    fields.forEach(field => {
        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;
        if (field.maxLength) input.maxLength = field.maxLength;
        if (field.max) input.max = field.max;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    });

    // Botão de envio
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Cadastrar";
    form.appendChild(submitButton);

    // Insere o formulário no contêiner
    formContainer.appendChild(form);

    // Função para validar o formulário
    form.addEventListener("submit", function (event) {
        const telefone = document.getElementById("telefone").value;
        const cpf = document.getElementById("cpf").value;

        if (telefone.length !== 11) {
            alert("O telefone deve conter 11 dígitos.");
            event.preventDefault();
        }

        if (cpf.length !== 11) {
            alert("O CPF deve conter 11 dígitos.");
            event.preventDefault();
        }
    });

    function toggleMenu() {
        const menuMobile = document.getElementById("menu-mobile");
        const isMenuVisible = menuMobile.style.display === "block";
        menuMobile.style.display = isMenuVisible ? "none" : "block";
    }
});

// Lógica para adicionar itens ao carrinho
const cartItems = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        cartItems.push(product);
        renderCart();
    });
});

function renderCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = 'list-group-item';
        cartItemsList.appendChild(li);
    });
}

let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll) {
            // Rolando para baixo
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Rolando para cima
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });