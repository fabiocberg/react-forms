# React Forms

## Descrição

Este projeto é uma aplicação em React focada na criação e validação de formulários dinâmicos. Ele demonstra as melhores práticas para construção de formulários reutilizáveis, gerenciamento de estado e integração com APIs, fornecendo uma base sólida para projetos que necessitam de entrada de dados de usuários de forma eficiente e confiável.

## Tecnologias Utilizadas

- **React** (Create React App)
- **TypeScript** (caso aplicável)
- **React Hook Form** ou Formik para gerenciamento de formulários
- **Yup** ou outra biblioteca de validação de esquemas
- **Styled Components** ou CSS Modules (caso aplicável)
- Integração com APIs REST (exemplo: ViaCEP, JSONPlaceholder, etc.)

## Funcionalidades

- Criação de formulários dinâmicos com campos customizáveis
- Validação de campos com mensagens de erro amigáveis
- Máscara para campos como CPF, telefone e CEP
- Submissão de dados para API e tratamento de respostas
- Feedback visual de carregamento e sucesso/erro
- Componentes reutilizáveis para inputs, selects e botões

## Como usar

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/fabiocberg/react-forms.git
    cd react-forms
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Rode o app:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O app estará disponível em `http://localhost:3000`.

## Exemplo de uso

O formulário pode ser adaptado para diferentes cenários, como cadastro de usuários, login, ou consulta de informações externas:

```plaintext
Nome: [__________]
E-mail: [__________]
CPF: [___._ _ _.___-__]
Telefone: [(__) _____-____]
CEP: [_____ - ___]
[Enviar]
```

Ao preencher e submeter, os dados são validados, enviados para a API, e o usuário recebe feedback sobre o resultado da operação.

## Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis de formulários
├── forms/             # Configurações e schemas dos formulários
├── services/          # Integração com APIs externas
├── App.js             # Componente principal
└── index.js           # Inicialização da aplicação
```

## Personalização

- Adicione/remova campos conforme a necessidade do seu caso de uso.
- Integre com a API do seu sistema para persistência dos dados.
- Adicione validações, máscaras e feedbacks visuais personalizados.

## Licença

MIT

---

> Este projeto serve como base para desenvolvimento de formulários modernos e eficientes em aplicações React.