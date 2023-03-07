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
    "O React é um biblioteca JavaScript que fornece uma estrutura de trabalho para criar interfaces para usuários."
);

hoverChangeDescription(
    ".ts",
    "O TypeScript é um superconjuto do JavaScript que adciona alguns recursos à linguagem do JavaScript, como tipagem estática, classes e interfaces."
);

hoverChangeDescription(
    ".junit",
    "O JUnit é a principal biblioteca do Java, ela facilita a  criação e manutenção do código para automação de testes de unidade."
);

hoverChangeDescription(
    ".git",
    "O Git é o principal sistema de controle de versões distribuído, sendo possível viajar entre as versões de maneira simples e rápido, podendo também criar e compartilhar repositórios."
);

hoverChangeDescription(
    ".docker",
    "Docker é uma plataforma que facilita a criação e administração de ambientes isolados. Ele possibilita empacotar uma aplicação ou ambiente dentro de um container."
);

hoverChangeDescription(
    ".mockito",
    "O Mockito é uma Framework que simula comportamentos de outra classe para que realize testes de métodos e suas dependências."
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