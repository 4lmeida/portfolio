hoverChangeDescription(
    ".java",
    "Java é uma linguagem de programação originalmente orientada ao objeto que evoluiu para multi-paradigma. Ela é segura e confiável para codificar tudo, desde aplicações móveis, software empresarial e tecnologias do servidor."
);

hoverChangeDescription(
    ".spring",
    "O Spring é uma das framework mais popular do mundo quando falamos de Java. Ela otimiza otrabalho de desenvolvimento tornando a  programação java mais rápida, fácil e segura."
);

hoverChangeDescription(
    ".postegresql",
    "O PostegreSQL é um sistema gerenciador de banco de dados objeto relacional e hoje ele é um dos SGBDs de código aberto mais avançados."
);

hoverChangeDescription(
    ".html",
    "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);

hoverChangeDescription(
    ".css",
    "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);

hoverChangeDescription(
    ".js",
    "JavaScript é uma linguagem de programação de alto nível, criada para ser executada em navegadores e manipular comportamentos de páginas web."
);

hoverChangeDescription(
    ".react",
    ""
);




function hoverChangeDescription(nameCard, text) {
    var changeDescription = document.querySelector(".changeDescription");

    document.querySelector(nameCard).addEventListener("mouseover", () => {
    changeDescription.innerHTML = text;
    });

    document.querySelector(nameCard).addEventListener("mouseout", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse no card para ler*`;
    });
}