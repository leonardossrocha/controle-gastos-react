
# Controle de Gastos Diários 📊

Aplicativo simples desenvolvido com **Expo** e **React Native** para registrar, editar e remover gastos diários. Ideal para estudantes iniciantes no desenvolvimento mobile com JavaScript.

---

## 📱 Funcionalidades

- ✅ Adicionar um gasto com descrição e valor.
- ✅ Listar todos os gastos cadastrados.
- ✅ Exibir o total dos gastos.
- ✅ Remover um gasto da lista.
- ✅ Editar um gasto existente diretamente na lista.

---

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- JavaScript (ES6+)
- StyleSheet para estilização

---

## 🚀 Como Executar o Projeto (Passo a Passo)

### 1. Instalar o Node.js
Acesse: https://nodejs.org/ e instale a versão LTS recomendada.

### 2. Instalar o Expo CLI
Abra o terminal e execute:
```bash
npm install -g expo-cli
```

### 3. Criar o projeto com Expo
No terminal:
```bash
npx create-expo-app controle-gastos
cd controle-gastos
```

### 4. Substituir o conteúdo do App.js
- Abra o projeto em um editor de código (como VS Code).
- Substitua todo o conteúdo do arquivo `App.js` pelo código fornecido do projeto Controle de Gastos.
- Além disso, será necessário criar o arquivo components > *ExpenseItem-styled-edit.js*

NOTA: Nesse projeto, estão sendo disponibilizados outras duas versões do arquivo *ExpenseItem-styled-edit.js* que contam com menos recursos. 

### 5. Instalar as dependências (se necessário)
```bash
npm install
```

### 6. Iniciar o projeto
```bash
npm start
```

### 7. Executar no celular
- Baixe o app **Expo Go** na Play Store (Android) ou App Store (iOS).
- Escaneie o QR Code que aparecerá no terminal ou navegador.

---

## 📁 Estrutura do Projeto

```
controle-gastos/
│
├── App.js                          # Tela principal com lógica de cadastro, edição e remoção
├── node_modules/                   # Dependências instaladas automaticamente
├── components/                     # Pasta de componentes do projeto
    │
    ├── ExpenseItem.js              # Tela de cadastro de gastos sem estilização
    ├── ExpenseItem-styled.js       # Tela de cadastro de gastos cem estilização
    ├── ExpenseItem-styled-edit.js  # Tela de cadastro de gastos cem estilização e botões de dição e exclusão
├── package.json                    # Gerenciador de pacotes e scripts
├── app.json                        # Configurações específicas do Expo
└── README.md                       # Documentação do projeto
```

---

## ✅ Possíveis Melhorias Futuras

- Armazenamento local com `AsyncStorage`.
- Filtro de gastos por data ou categoria.
- Exportar dados como PDF ou CSV.
- Integração com banco de dados remoto (Firebase, Supabase, etc.).

---

## Fontes

A fonte utilizada para esse projeto foi a documentação oficial Expo que mostra como criar o seu [primeiro app](https://docs.expo.dev/tutorial/create-your-first-app/).

## 👨‍🏫 Projeto Acadêmico

Este aplicativo foi desenvolvido como atividade prática em sala de aula para alunos do 5º semestre de Análise e Desenvolvimento de Sistemas – disciplina de **Desenvolvimento Mobile** na **Unicesumar**.  
**Objetivo pedagógico:** consolidar conhecimentos de estrutura de componentes, uso de estados com `useState`, e manipulação de listas no React Native com Expo.

---

## 👨‍💻 Autor

**Leonardo Rocha**  
Professor de TI | Especialista em Projetos Educacionais com Tecnologias  
[LinkedIn](https://www.linkedin.com/in/leonardossrocha) | [GitHub - Leonardo Rocha](https://github.com/leonardossrocha) | [GitHub - Prof. Leonardo Rocha](https://github.com/profleonardorocha)

---
