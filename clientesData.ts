export interface ClienteData {
  id: number;
  nomeCliente: string;
  cnpjCliente: string;
  vendedor: string;
  cnpjVendedor: string;
  dataOperacao: string;
  faseAtual: string;
  creditoSolicitado: number;
  creditoAprovado: number;
  produtoMix: string;
}

export const clientesData: ClienteData[] = [
  {
    id: 1006,
    nomeCliente: "Tech Corp",
    cnpjCliente: "33.171.262/0001-78",
    vendedor: "Maria Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-06-15",
    faseAtual: "3-Faturado",
    creditoSolicitado: 50000,
    creditoAprovado: 40000,
    produtoMix: "45 Pneu (Curva A)"
  },
  {
    id: 1007,
    nomeCliente: "Global Ind",
    cnpjCliente: "74.797.663/0001-15",
    vendedor: "Douglas Santos",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-05-20",
    faseAtual: "3-Faturado",
    creditoSolicitado: 50000,
    creditoAprovado: 50000,
    produtoMix: "30 Óleo (Curva B)"
  },
  {
    id: 1008,
    nomeCliente: "Mega Store",
    cnpjCliente: "18.883.688/0001-60",
    vendedor: "Paulo Henrique",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-07-01",
    faseAtual: "3-Faturado",
    creditoSolicitado: 40000,
    creditoAprovado: 30000,
    produtoMix: "60 Filtro (Curva C)"
  },
  {
    id: 1009,
    nomeCliente: "Super Varejo",
    cnpjCliente: "74.732.084/0001-94",
    vendedor: "Lucas Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-04-10",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 80000,
    creditoAprovado: 70000,
    produtoMix: "90 Bateria (Curva A)"
  },
  {
    id: 1001,
    nomeCliente: "Tech Corp",
    cnpjCliente: "33.171.262/0001-78",
    vendedor: "João Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-06-01",
    faseAtual: "3-Faturado",
    creditoSolicitado: 50000,
    creditoAprovado: 40000,
    produtoMix: "30 Pastilha de Freio (Curva B)"
  },
  {
    id: 1002,
    nomeCliente: "Global Ind",
    cnpjCliente: "74.797.663/0001-15",
    vendedor: "Maria Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-06-05",
    faseAtual: "3-Faturado",
    creditoSolicitado: 50000,
    creditoAprovado: 50000,
    produtoMix: "30 Amortecedor (Curva C)"
  },
  {
    id: 1003,
    nomeCliente: "Mega Store",
    cnpjCliente: "18.883.688/0001-60",
    vendedor: "João Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-05-10",
    faseAtual: "3-Faturado",
    creditoSolicitado: 40000,
    creditoAprovado: 30000,
    produtoMix: "30 Vela de Ignição (Curva A)"
  },
  {
    id: 1005,
    nomeCliente: "Distribuidora XYZ",
    cnpjCliente: "89.703.929/0001-90",
    vendedor: "Maria Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-07-08",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 60000,
    creditoAprovado: 50000,
    produtoMix: "45 Palheta do Limpador (Curva C)"
  },
  {
    id: 1010,
    nomeCliente: "Comercial Silva",
    cnpjCliente: "86.919.248/0001-76",
    vendedor: "João Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-07-15",
    faseAtual: "1-Análise de Crédito (Recusado)",
    creditoSolicitado: 15000,
    creditoAprovado: 15000,
    produtoMix: "30 Aditivo para Radiador (Curva A)"
  },
  {
    id: 1011,
    nomeCliente: "Atacadão do Povo",
    cnpjCliente: "93.138.873/0001-46",
    vendedor: "Maria Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-07-20",
    faseAtual: "1-Análise de Crédito (Recusado)",
    creditoSolicitado: 25000,
    creditoAprovado: 20000,
    produtoMix: "30 Fluido de Freio (Curva B)"
  },
  {
    id: 1012,
    nomeCliente: "Logística Brasil",
    cnpjCliente: "90.097.474/0001-96",
    vendedor: "Carlos Lima",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-07-25",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 30000,
    creditoAprovado: 25000,
    produtoMix: "30 Filtro de Ar (Curva C)"
  },
  {
    id: 1013,
    nomeCliente: "Indústria Moderna",
    cnpjCliente: "15.316.824/0001-42",
    vendedor: "Ana Paula",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-01",
    faseAtual: "2-Assinatura (Assinada)",
    creditoSolicitado: 30000,
    creditoAprovado: 30000,
    produtoMix: "30 Filtro de Combustível (Curva A)"
  },
  {
    id: 1014,
    nomeCliente: "Serviços Rápidos",
    cnpjCliente: "38.215.400/0001-97",
    vendedor: "Pedro Alves",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-05",
    faseAtual: "2-Assinatura (Pendente)",
    creditoSolicitado: 40000,
    creditoAprovado: 35000,
    produtoMix: "30 Bomba d'Água (Curva B)"
  },
  {
    id: 1015,
    nomeCliente: "Distribuidora Central",
    cnpjCliente: "14.897.704/0001-13",
    vendedor: "Lucas Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-10",
    faseAtual: "3-Faturado",
    creditoSolicitado: 40000,
    creditoAprovado: 40000,
    produtoMix: "30 Cabo de Vela (Curva C)"
  },
  {
    id: 1016,
    nomeCliente: "Varejo Mais",
    cnpjCliente: "73.180.013/0001-63",
    vendedor: "Douglas Santos",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-15",
    faseAtual: "2-Assinatura (Assinada)",
    creditoSolicitado: 50000,
    creditoAprovado: 45000,
    produtoMix: "30 Disco de Freio (Curva A)"
  },
  {
    id: 1017,
    nomeCliente: "Tech Solutions BR",
    cnpjCliente: "79.560.490/0001-30",
    vendedor: "Paulo Henrique",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-20",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 50000,
    creditoAprovado: 50000,
    produtoMix: "30 Kit Embreagem (Curva B)"
  },
  {
    id: 1018,
    nomeCliente: "Construtora Nova Era",
    cnpjCliente: "31.446.919/0001-37",
    vendedor: "Maria Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-25",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 60000,
    creditoAprovado: 55000,
    produtoMix: "30 Lâmpada do Farol (Curva C)"
  },
  {
    id: 1019,
    nomeCliente: "Alimentos Saborosos",
    cnpjCliente: "12.345.678/0001-90",
    vendedor: "João Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-08-30",
    faseAtual: "2-Assinatura (Assinada)",
    creditoSolicitado: 60000,
    creditoAprovado: 60000,
    produtoMix: "30 Fluido de Direção (Curva A)"
  },
  {
    id: 1020,
    nomeCliente: "Nova Empresa Alpha",
    cnpjCliente: "95.284.038/0001-40",
    vendedor: "Maria Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-01",
    faseAtual: "2-Assinatura (Expirada)",
    creditoSolicitado: 70000,
    creditoAprovado: 60000,
    produtoMix: "30 Pneu (Curva A)"
  },
  {
    id: 1021,
    nomeCliente: "Beta Comércio",
    cnpjCliente: "71.672.375/0001-46",
    vendedor: "Douglas Santos",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-05",
    faseAtual: "3-Faturado",
    creditoSolicitado: 80000,
    creditoAprovado: 80000,
    produtoMix: "30 Óleo (Curva B)"
  },
  {
    id: 1022,
    nomeCliente: "Gama Serviços",
    cnpjCliente: "42.389.694/0001-40",
    vendedor: "Paulo Henrique",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-10",
    faseAtual: "1-Análise de Crédito (Pendente)",
    creditoSolicitado: 90000,
    creditoAprovado: 70000,
    produtoMix: "45 Filtro (Curva C)"
  },
  {
    id: 1023,
    nomeCliente: "Delta Indústria",
    cnpjCliente: "87.655.886/0001-90",
    vendedor: "Lucas Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-15",
    faseAtual: "1-Análise de Crédito (Recusado)",
    creditoSolicitado: 100000,
    creditoAprovado: 90000,
    produtoMix: "60 Bateria (Curva A)"
  },
  {
    id: 1024,
    nomeCliente: "Epsilon Logística",
    cnpjCliente: "80.696.366/0001-86",
    vendedor: "João Silva",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-20",
    faseAtual: "2-Assinatura (Pendente)",
    creditoSolicitado: 50000,
    creditoAprovado: 45000,
    produtoMix: "30 Pastilha de Freio (Curva B)"
  },
  {
    id: 1025,
    nomeCliente: "Zeta Tecnologia",
    cnpjCliente: "98.745.996/0001-69",
    vendedor: "Maria Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-09-25",
    faseAtual: "3-Faturado",
    creditoSolicitado: 120000,
    creditoAprovado: 100000,
    produtoMix: "30 Amortecedor (Curva C)"
  },
  {
    id: 1026,
    nomeCliente: "Eta Distribuidora",
    cnpjCliente: "92.141.741/0001-00",
    vendedor: "Carlos Lima",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-10-01",
    faseAtual: "2-Assinatura (Assinada)",
    creditoSolicitado: 60000,
    creditoAprovado: 50000,
    produtoMix: "45 Vela de Ignição (Curva A)"
  },
  {
    id: 1027,
    nomeCliente: "Theta Varejo",
    cnpjCliente: "08.436.814/0001-85",
    vendedor: "Ana Paula",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-10-05",
    faseAtual: "2-Assinatura (Expirada)",
    creditoSolicitado: 75000,
    creditoAprovado: 75000,
    produtoMix: "30 Palheta do Limpador (Curva C)"
  },
  {
    id: 1028,
    nomeCliente: "Iota Construtora",
    cnpjCliente: "50.436.280/0001-53",
    vendedor: "Pedro Alves",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-10-10",
    faseAtual: "3-Faturado",
    creditoSolicitado: 85000,
    creditoAprovado: 80000,
    produtoMix: "30 Aditivo para Radiador (Curva A)"
  },
  {
    id: 1029,
    nomeCliente: "Distribuidora Central",
    cnpjCliente: "14.897.704/0001-13",
    vendedor: "Lucas Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-10-15",
    faseAtual: "3-Faturado",
    creditoSolicitado: 25000,
    creditoAprovado: 25000,
    produtoMix: "30 Cabo de Vela (Curva C)"
  },
  {
    id: 1030,
    nomeCliente: "Distribuidora Central",
    cnpjCliente: "14.897.704/0001-13",
    vendedor: "Lucas Souza",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-11-01",
    faseAtual: "3-Faturado",
    creditoSolicitado: 15000,
    creditoAprovado: 15000,
    produtoMix: "30 Cabo de Vela (Curva C)"
  },
  {
    id: 1031,
    nomeCliente: "Beta Comércio",
    cnpjCliente: "71.672.375/0001-46",
    vendedor: "Douglas Santos",
    cnpjVendedor: "21.398.612/0001-54",
    dataOperacao: "2026-11-10",
    faseAtual: "3-Faturado",
    creditoSolicitado: 45000,
    creditoAprovado: 45000,
    produtoMix: "30 Óleo (Curva B)"
  }
];
