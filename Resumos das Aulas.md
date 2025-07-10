# Anotações NLW Agents - Trilha Iniciante

**Fonte:** Rocketseat - NLW Agents 2025

---

## Aula 01: Fundamentos da Web

### 1. Conceitos de Programação

- **Programar:** É o ato de criar algoritmos e dar instruções para uma máquina resolver problemas.
- **Pilar mencionado:**
  - **Inteligência Artificial:** Utilizada como exemplo de resolução de problemas, destacando a importância do pensamento crítico.

### 2. Fundamentos da Web (Cliente-Servidor)

A web opera sobre um conjunto de protocolos e tecnologias que permitem a comunicação:

- **HTTP (HyperText Transfer Protocol):** O protocolo (regras de comunicação) para transferir dados, como páginas HTML, entre o servidor e o navegador.
- **URL (Uniform Resource Locator):** O endereço único e específico de um recurso na internet.
- **IP (Internet Protocol):** O endereço numérico que identifica unicamente um dispositivo na rede.
- **DNS (Domain Name System):** O sistema que traduz um nome de domínio (ex: `google.com`) para o endereço IP correspondente, funcionando como uma "agenda" da web.


### 3. As 3 Tecnologias do Front-end

- **HTML (HyperText Markup Language):** Define a **estrutura** e o conteúdo da página. (O esqueleto).
- **CSS (Cascading Style Sheets):** Aplica **estilos** visuais à estrutura HTML. (A roupa e a aparência).
- **JavaScript (JS):** Adiciona **interatividade** e comportamento dinâmico à página. (O cérebro e os movimentos).

---


### Resumo da Aula

Esta aula introdutória apresentou os pilares do desenvolvimento web. Aprendemos como a internet funciona em um nível fundamental (HTTP, DNS, etc.) e demos os primeiros passos com HTML para estruturar o conteúdo e CSS para estilizar visualmente as páginas.

### HTML: A Linguagem de Estrutura

O HTML (Hypertext Markup Language) usa "etiquetas" (tags) para marcar e organizar o conteúdo de uma página.

* **Tags:** Elementos que definem a estrutura. Ex: `<p>` para um parágrafo, `<h1>` para um título principal, `<img>` para uma imagem.
* **Atributos:** Informações adicionais dentro de uma tag para configurar seu comportamento. Ex: o atributo `href` na tag `<a>` define o link de destino: `<a href="https://rocketseat.com.br">Visitar Rocketseat</a>`.

### CSS: A Linguagem de Estilo

O CSS (Cascading Style Sheets) é usado para aplicar estilos visuais ao conteúdo HTML.

* **Seletores:** A forma como escolhemos qual elemento HTML queremos estilizar. Ex: `h1`, `.classe`, `#id`.
* **Propriedades:** O que queremos mudar no elemento selecionado. Ex: `color`, `font-size`, `background-color`.
* **Valores:** O valor que a propriedade vai receber. Ex: `blue`, `16px`, `#FFFFFF`.

<hr>

---

## Aula 02: Primeiros Passos com JavaScript

### 1. O Papel do JavaScript

- Se o HTML é o esqueleto e o CSS é a roupa, o **JavaScript é o cérebro e os músculos**, responsável por adicionar interatividade, lógica e dinamismo a uma página web.

### 2. Conceitos Fundamentais de Programação

- **Variáveis:** "Caixas" ou "recipientes" na memória para armazenar dados que podem ser usados e modificados ao longo do código. Declaradas com `let` (pode mudar de valor) e `const` (valor constante).
- **Funções:** Blocos de código reutilizáveis que executam uma tarefa específica quando são "chamados". Ajudam a organizar e modularizar o código.
- **Lógica de Programação:** O uso de estruturas como condicionais (`if`/`else`) para que o programa possa tomar decisões e executar ações diferentes com base em certas condições.

### 3. O DOM: A Ponte entre HTML e JavaScript

- **DOM (Document Object Model):** É uma representação em formato de objeto de toda a estrutura de um documento HTML. O navegador cria essa "árvore" de objetos a partir do HTML.
- **Como funciona:** O JavaScript não lê o arquivo `.html` diretamente. Ele interage com o DOM, que é uma representação "viva" da página.
- **Interatividade:** Usando o DOM, o JavaScript pode:
  - Encontrar elementos HTML (ex: `document.querySelector('button')`).
  - Alterar o conteúdo de um elemento (ex: mudar um texto).
  - Mudar o estilo de um elemento (ex: adicionar ou remover uma classe CSS).
  - Reagir a eventos do usuário (ex: cliques de mouse, digitação no teclado).

---