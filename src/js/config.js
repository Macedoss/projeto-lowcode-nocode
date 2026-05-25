/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              ARQUIVO DE CONFIGURAÇÃO DE PRODUTOS             ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Para adicionar um novo produto, basta inserir um novo       ║
 * ║  objeto seguindo o padrão dos produtos existentes.           ║
 * ║                                                              ║
 * ║  Exemplo – Notebooks:                                        ║
 * ║                                                              ║
 * ║  notebooks: {                                                ║
 * ║    id: "notebooks",                                          ║
 * ║    label: "Notebooks",                                       ║
 * ║    icon: "💻",                                               ║
 * ║    description: "Notebooks para trabalho e games",           ║
 * ║    priceRanges: [                                            ║
 * ║      { id: "nb-entry", label: "Entrada",                     ║
 * ║        description: "Uso básico e escritório",               ║
 * ║        display: "R$ 1.500 – R$ 2.500" },                     ║
 * ║      ...                                                     ║
 * ║    ]                                                         ║
 * ║  }                                                           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const AppConfig = {
  products: {

    // ── MONITORES ─────────────────────────────────────────────────
    monitors: {
      id: "monitors",
      label: "Monitores",
      icon: "🖥️",
      description: "Monitores para trabalho, estudo e games",
      priceRanges: [
        {
          id: "monitor-basico",
          label: "Básico",
          description: "Telas 21–24\", Full HD, uso geral",
          display: "R$ 300 – R$ 800"
        },
        {
          id: "monitor-intermediario",
          label: "Intermediário",
          description: "Telas 24–27\", FHD/QHD, boa resposta",
          display: "R$ 800 – R$ 1.500"
        },
        {
          id: "monitor-gamer",
          label: "Gamer",
          description: "144Hz+, QHD, alta taxa de atualização",
          display: "R$ 1.500 – R$ 3.000"
        },
        {
          id: "monitor-profissional",
          label: "Profissional",
          description: "4K, precisão de cores, telas grandes",
          display: "R$ 3.000+"
        }
      ]
    },

    // ── PARA ADICIONAR NOVOS PRODUTOS, DESCOMENTE ABAIXO ──────────

    // notebooks: {
    //   id: "notebooks",
    //   label: "Notebooks",
    //   icon: "💻",
    //   description: "Notebooks para trabalho, estudo e games",
    //   priceRanges: [
    //     { id: "nb-entry",  label: "Entrada",        description: "Uso básico e escritório",         display: "R$ 1.500 – R$ 2.500" },
    //     { id: "nb-mid",    label: "Intermediário",   description: "Bom desempenho geral",            display: "R$ 2.500 – R$ 4.000" },
    //     { id: "nb-gamer",  label: "Gamer",           description: "Alta performance, GPU dedicada",  display: "R$ 4.000 – R$ 8.000" },
    //     { id: "nb-pro",    label: "Profissional",    description: "Workstation e criação de conteúdo", display: "R$ 8.000+" }
    //   ]
    // },

    // teclados: {
    //   id: "teclados",
    //   label: "Teclados",
    //   icon: "⌨️",
    //   description: "Teclados mecânicos e de membrana",
    //   priceRanges: [
    //     { id: "tec-membrana",  label: "Membrana",   description: "Teclados de membrana silenciosos",  display: "R$ 50 – R$ 200"   },
    //     { id: "tec-mecanico",  label: "Mecânico",   description: "Teclados mecânicos básicos",        display: "R$ 200 – R$ 600"  },
    //     { id: "tec-premium",   label: "Premium",    description: "Mecânicos com RGB e switches top",  display: "R$ 600+"          }
    //   ]
    // },

    // headsets: {
    //   id: "headsets",
    //   label: "Headsets",
    //   icon: "🎧",
    //   description: "Headsets para games e home office",
    //   priceRanges: [
    //     { id: "hs-entry",  label: "Básico",       description: "Com fio, uso geral",          display: "R$ 80 – R$ 250"   },
    //     { id: "hs-mid",    label: "Intermediário", description: "Boa qualidade de áudio",      display: "R$ 250 – R$ 600"  },
    //     { id: "hs-pro",    label: "Premium",       description: "Sem fio, cancelamento ruído", display: "R$ 600+"          }
    //   ]
    // },

  }
};
