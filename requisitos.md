# Requisitos do Projeto – PromoAlerta

## Requisitos Funcionais

| ID   | Requisito                                                                 | Status |
|------|---------------------------------------------------------------------------|--------|
| RF01 | O sistema deve permitir o cadastro de usuários com nome e e-mail          | ✅ Implementado |
| RF02 | O usuário deve poder escolher a categoria de produto de interesse         | ✅ Implementado |
| RF03 | O usuário deve poder selecionar faixas de preço por categoria             | ✅ Implementado |
| RF04 | O formulário deve validar campos obrigatórios                             | ✅ Implementado |
| RF05 | O sistema deve exibir confirmação visual após o cadastro                  | ✅ Implementado |
| RF06 | O sistema deve enviar e-mail automático de confirmação ao usuário         | 🔧 Pendente (Make) |
| RF07 | O sistema deve suportar múltiplas categorias de produtos                  | ✅ Arquitetura pronta |
| RF08 | O administrador deve conseguir visualizar os cadastros                    | 🔧 Pendente |

## Requisitos Não Funcionais

| ID    | Requisito                                                    | Status |
|-------|--------------------------------------------------------------|--------|
| RNF01 | Interface responsiva (mobile-first)                          | ✅ Implementado |
| RNF02 | Tempo de carregamento < 2s                                   | ✅ Sem dependências externas |
| RNF03 | Código escalável para adição de novos produtos               | ✅ Implementado (via config.js) |
| RNF04 | Compatibilidade com principais navegadores modernos          | ✅ HTML5 + CSS3 + ES6 |
| RNF05 | Acessibilidade básica (atributos ARIA, labels)               | ✅ Implementado |

## Faixas de Preço — Monitores

| Faixa          | Mínimo    | Máximo    | Perfil de Uso                     |
|----------------|-----------|-----------|-----------------------------------|
| Básico         | R$ 300    | R$ 800    | Uso geral, escritório, estudo     |
| Intermediário  | R$ 800    | R$ 1.500  | Trabalho e uso prolongado         |
| Gamer          | R$ 1.500  | R$ 3.000  | Games, alta taxa de atualização   |
| Profissional   | R$ 3.000  | —         | Edição, design, 4K                |
