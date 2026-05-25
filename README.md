# 🔔 PromoAlerta

> Plataforma web de cadastro para recebimento de alertas de promoções por e-mail.  
> Projeto desenvolvido no **Módulo 3 – Low Code / No Code / Vibecode**

---

## 📋 Sobre o Projeto

O **PromoAlerta** permite que usuários se cadastrem para receber notificações de promoções de produtos de tecnologia, filtrando por categoria e faixa de preço. Atualmente disponível para **monitores**, com arquitetura preparada para expansão.
[
**Demonstração:** https://gemini.google.com/share/7c7c3e94ae95

---

## 🚀 Como Executar

1. Abra a demonstração!
  

---

## 📁 Estrutura de Arquivos

```
projeto-lowcode-nocode/
│
├── index.html               ← Página principal
│
├── src/
│   ├── css/
│   │   └── styles.css       ← Estilos da interface
│   └── js/
│       ├── config.js        ← ⭐ Configuração de produtos (escalável)
│       └── app.js           ← Lógica da aplicação
│
├── docs/
│   └── RELATORIO.md         ← Relatório completo do projeto
│
├── README.md
└── requisitos.md
```

---

## ⭐ Como Adicionar Novos Produtos

Toda a configuração de produtos fica em **`src/js/config.js`**. Para adicionar uma nova categoria (ex: Notebooks), basta inserir um novo objeto seguindo o padrão:

```javascript
// Em src/js/config.js → AppConfig.products

notebooks: {
  id: "notebooks",
  label: "Notebooks",
  icon: "💻",
  description: "Notebooks para trabalho, estudo e games",
  priceRanges: [
    { id: "nb-entry",  label: "Entrada",       description: "Uso básico e escritório",         display: "R$ 1.500 – R$ 2.500" },
    { id: "nb-mid",    label: "Intermediário",  description: "Bom desempenho geral",            display: "R$ 2.500 – R$ 4.000" },
    { id: "nb-gamer",  label: "Gamer",          description: "Alta performance, GPU dedicada",  display: "R$ 4.000 – R$ 8.000" },
    { id: "nb-pro",    label: "Profissional",   description: "Workstation e criação de conteúdo", display: "R$ 8.000+" }
  ]
}
```

**Nenhuma outra alteração necessária** — a interface é gerada automaticamente! 🎉

---

## 🖥️ Funcionalidades Atuais

- ✅ Cadastro com nome e e-mail
- ✅ Seleção de categorias de produtos
- ✅ Faixas de preço por categoria (monitores)
- ✅ Validação de formulário em tempo real
- ✅ Tela de confirmação com resumo das preferências
- ✅ Design responsivo (mobile-friendly)
- ✅ Arquitetura escalável para novos produtos

### 🖥️ Monitores — Faixas Disponíveis

| Faixa          | Preço              | Perfil                          |
|----------------|--------------------|----------------------------------|
| Básico         | R$ 300 – R$ 800   | Telas 21–24", Full HD, uso geral |
| Intermediário  | R$ 800 – R$ 1.500 | 24–27", FHD/QHD, melhor resposta |
| Gamer          | R$ 1.500 – R$ 3.000 | 144Hz+, QHD, alta taxa           |
| Profissional   | R$ 3.000+          | 4K, precisão de cores            |

---

## 🛣️ Próximos Passos

- [ ] Integração com Make (Integromat) para envio de e-mails
- [ ] Adicionar Notebooks, Teclados, Headsets
- [ ] Painel administrativo
- [ ] Autenticação de usuários
- [ ] Integração com IA para recomendação de produtos

---

## 🤝 Colaboração

| Responsabilidade   | Descrição                                       |
|--------------------|-------------------------------------------------|
| Caio Macedo | Interação com Ia              |
| Kayla           | Organização dos arquivos                        |

---

## 📅 Registro da Aula

- **Data:** 25/05/2026  
- **Atividade:** Discussão crítica + Projeto de cadastro  
- **Professora:** Kadidja Valéria  

---

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Make](https://img.shields.io/badge/Make_(Integromat)-6D00CC?style=flat&logo=make&logoColor=white)
