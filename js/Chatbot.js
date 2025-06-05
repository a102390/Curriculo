const qna = [
    {
        keywords: ["olá", "oi", "bom dia", "boa tarde", "boa noite", "saudações"],
        answer: "Olá! Sou o assistente virtual do currículo de Francisco Araújo. Como posso ajudar?"
    },
    {
        keywords: ["quem é você", "seu nome", "se apresenta"],
        answer: "Sou Francisco Araújo, um profissional em Engenharia e Gestão de Sistemas de Informação."
    },
    {
        keywords: ["contato", "contactar", "email", "telefone", "telemóvel", "whatsapp", "linkedin"],
        answer: "Você pode contatar Francisco Araújo através do email: xicoze.araujo@gmail.com, telemóvel/WhatsApp: (+351) 961840795, ou LinkedIn: https://www.linkedin.com/in/francisco-araújo-650833261/"
    },
    {
        keywords: ["email", "correio eletrónico"],
        answer: "O email de Francisco é xicoze.araujo@gmail.com."
    },
    {
        keywords: ["telefone", "telemóvel", "whatsapp"],
        answer: "O número de telemóvel e WhatsApp de Francisco é (+351) 961840795."
    },
    {
        keywords: ["linkedin", "perfil profissional"],
        answer: "O perfil do LinkedIn de Francisco é: https://www.linkedin.com/in/francisco-araújo-650833261/"
    },
    {
        keywords: ["sobre mim", "resumo", "perfil", "apresentação", "objetivo"],
        answer: "Francisco é um profissional em Engenharia e Gestão de Sistemas de Informação, com formação sólida em TI e gestão organizacional. Possui experiência prática no desenvolvimento de múltiplos projetos universitários, com destaque para Desenvolvimento de Aplicações Informáticas, Engenharia de Dados/Análise de Dados e Desenvolvimento Organizacional com Tecnologias de Informação. É motivado, com capacidade de aprendizagem rápida, espírito de equipa e foco na aplicação estratégica das tecnologias para otimizar processos e agregar valor."
    },
    {
        keywords: ["formação", "educação", "estudou", "licenciatura", "universidade"],
        answer: "Francisco está atualmente a cursar a Licenciatura em Engenharia e Gestão de Sistemas de Informação na Universidade do Minho (Guimarães, Portugal), desde 09/2022. O nível no QEQ é Nível 6 QRQ."
    },
    {
        keywords: ["idiomas", "línguas", "fala", "linguísticas"],
        answer: "A língua materna de Francisco é o português. Ele também possui competências em inglês: Compreensão Oral C1, Leitura C1, Escrita B2, Produção Oral B2 e Interação Oral B2."
    },
    {
        keywords: ["inglês", "english"],
        answer: "Em inglês, Francisco tem os seguintes níveis: Compreensão Oral C1, Leitura C1, Escrita B2, Produção Oral B2 e Interação Oral B2."
    },
    {
        keywords: ["competências", "habilidades", "skills", "técnicas", "conhecimentos"],
        answer: "Francisco possui competências em: Linguagens de Programação (Python, Java, C, SQL, HTML, CSS, JavaScript), Desenvolvimento de Software (Aplicações, Algoritmos, Estruturas de Dados, Testes), Engenharia/Análise de Dados (Modelação, Bases de Dados Relacionais/NoSQL, Ferramentas, Visualização), SI/Gestão (Análise de Requisitos, Modelação de Processos, Arquitetura SI, Gestão de Projetos, Impl. SI), Infraestrutura TI (Sistemas Operativos Linux, Redes), e Ferramentas (IDEs como VS Code, IntelliJ, Software de Modelação). Além disso, possui competências como Trabalho em Equipa, Resolução de problemas, Capacidade de Aprendizagem, Pensamento Crítico e Analítico, Ética Profissional, Proatividade e Orientação para Resultados."
    },
    {
        keywords: ["linguagens de programação", "programa em quê"],
        answer: "As linguagens de programação que Francisco domina incluem Python, Java, C, SQL, HTML, CSS e JavaScript."
    },
    {
        keywords: ["ferramentas", "ides", "software modelação"],
        answer: "Francisco utiliza IDEs como VS Code e IntelliJ, além de software de modelação."
    },
    {
        keywords: ["prémio", "prêmios", "distinções", "reconhecimento", "cpes"],
        answer: "Sim, em 13/06/2024, Francisco recebeu o Prémio CPES: 'Impacto nas Organizações' da TUB e Universidade do Minho. Este reconhecimento foi pelo projeto de desenvolvimento de uma aplicação para otimizar rotas de transporte público em Braga, utilizando algoritmos inteligentes e análise de dados de mobilidade. Mais detalhes: https://www.linkedin.com/posts/francisco-araújo-650833261_premio-cpes-impact-on-organisations-activity-7208955767129878528-IRIL"
    },
    {
        keywords: ["projetos", "trabalhos universitários", "experiência prática projetos"],
        answer: "Francisco participou em diversos projetos, incluindo: Desenvolvimento de Aplicações Informáticas (app Java para otimizar rotas de transporte em Braga, 02/2024-06/2024), Engenharia de Dados e Suporte à Tomada de Decisão (Python, Hadoop, Hive, Tableau, 09/2024-01/2025), Implantação de Aplicações Informáticas Empresariais (integração SAP S/4HANA e Moloni com Python, 09/2024-01/2025), Desenvolvimento Organizacional com Tecnologias de Informação (metodologia englS, 02/2025-06/2025), e Projeto de Programação para a Web (plataforma de gestão de auditorias com Vue.js, PWA, 02/2025-06/2025)."
    },
    {
        keywords: ["projeto aplicações informáticas", "java", "transporte braga"],
        answer: "No projeto de Desenvolvimento de Aplicações Informáticas (02/2024 - 06/2024), Francisco colaborou como Desenvolvedor numa aplicação em Java para otimizar rotas de transporte público em Braga, usando algoritmos inteligentes e análise de dados de mobilidade."
    },
    {
        keywords: ["projeto engenharia de dados", "python", "hadoop", "hive", "tableau"],
        answer: "No projeto de Engenharia de Dados e Suporte à Tomada de Decisão (09/2024 - 01/2025), Francisco participou na implementação de um processo de engenharia de dados usando Python 3, Hadoop e Hive para tratar e preparar datasets, e construiu dashboards no Tableau."
    },
    {
        keywords: ["projeto sap", "moloni", "integração", "empresariais"],
        answer: "No projeto de Implantação de Aplicações Informáticas Empresariais (09/2024 - 01/2025), Francisco participou no desenvolvimento de uma integração entre SAP S/4HANA e Moloni, utilizando serviços OData SAP, APIs e lógica de integração em Python."
    },
    {
        keywords: ["projeto desenvolvimento organizacional", "doti", "engis"],
        answer: "No projeto de Desenvolvimento Organizacional com TI (DOTI) (02/2025 - 06/2025), Francisco aplicou a metodologia englS para analisar o estado atual (AS-IS) de uma organização, propor melhorias, definir requisitos de TI e planejar a mudança organizacional e tecnológica (TO-BE)."
    },
    {
        keywords: ["projeto programação web", "vue.js", "pwa", "auditorias"],
        answer: "No projeto de Programação para a Web (02/2025 - 06/2025), Francisco desenvolveu uma plataforma completa para gestão de auditorias e ocorrências (Mobilidade e Transportes) com Front-Office, Back-Office e PWA, utilizando Vue.js, JavaScript, HTML/CSS, Browser Storage e APIs."
    },
    {
        keywords: ["experiência profissional", "trabalhou", "emprego"],
        answer: "Francisco teve experiência profissional como Part-Time em férias de verão em Viana Do Castelo, Portugal, na área de Atendimento ao Cliente (2022 - 2024). Suas responsabilidades incluíam acolher, aconselhar e servir clientes, gestão de stocks, controlo de mercadorias, inventário, planificação de encomendas e garantia das normas de higiene e segurança alimentar."
    },
    {
        keywords: ["atendimento ao cliente", "experiência verão"],
        answer: "Sim, Francisco trabalhou com Atendimento ao Cliente durante as férias de verão entre 2022 e 2024, onde era responsável por acolher clientes, gerir stocks e garantir as normas de higiene."
    },
    {
        keywords: ["nacionalidade"],
        answer: "Francisco é de nacionalidade Portuguesa."
    },
    {
        keywords: ["local de nascimento", "onde nasceu"],
        answer: "Francisco nasceu em Viana Do Castelo, Portugal."
    }
];

const defaultAnswer = "Desculpe, não consegui entender sua pergunta. Tente perguntar sobre formação, experiência, projetos, competências ou contato de Francisco Araújo.";

