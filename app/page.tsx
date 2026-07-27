'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Trophy, Medal, Award, Unlock, ChevronDown, Zap, Settings, Activity, TrendingUp, Target, Clock, Gift, Lock, UploadCloud, Info, Link as LinkIcon, Search, X } from 'lucide-react';

const INITIAL_DATA = [
  { Vendedor: "Maria Silva", Treinamento: true, Sacado: "Tech Corp", DocSacado: "33.171.262/0001-78", TPV: 18000, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva A", DataOperacao: "2026-06-15", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 30 },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Global Ind", DocSacado: "74.797.663/0001-15", TPV: 22000, CreditoPedido: 50000, CreditoAceito: 50000, CategoriaProduto: "Curva B", DataOperacao: "2026-05-20", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 120, DataPago: "2026-08-20" },
  { Vendedor: "Paulo Henrique", Treinamento: false, Sacado: "Mega Store", DocSacado: "18.883.688/0001-60", TPV: 14500, CreditoPedido: 30000, CreditoAceito: 30000, CategoriaProduto: "Curva C", DataOperacao: "2026-07-01", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 90, DataPago: "2026-09-01" },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Super Varejo", DocSacado: "74.732.084/0001-94", TPV: 31000, CreditoPedido: 31000, CreditoAceito: 0, CategoriaProduto: "Curva A", DataOperacao: "2026-04-10", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 60 },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Tech Corp", DocSacado: "33.171.262/0001-78", TPV: 15000, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva B", DataOperacao: "2026-06-01", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 30, DataPago: "2026-07-01" },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Global Ind", DocSacado: "74.797.663/0001-15", TPV: 25000, CreditoPedido: 50000, CreditoAceito: 50000, CategoriaProduto: "Curva C", DataOperacao: "2026-06-05", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 90, DataPago: "2026-07-05" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Mega Store", DocSacado: "18.883.688/0001-60", TPV: 12000, CreditoPedido: 30000, CreditoAceito: 30000, CategoriaProduto: "Curva A", DataOperacao: "2026-05-10", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 30, DataPago: "2026-06-10" },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Distribuidora XYZ", DocSacado: "89.703.929/0001-90", TPV: 42000, CreditoPedido: 42000, CreditoAceito: 0, CategoriaProduto: "Curva C", DataOperacao: "2026-07-08", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 90 },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Comercial Silva", DocSacado: "86.919.248/0001-76", TPV: 10000, CreditoPedido: 10000, CreditoAceito: 0, CategoriaProduto: "Curva A", DataOperacao: "2026-07-01", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Recusado)", PrazoMedio: 60 },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Atacadão do Povo", DocSacado: "93.138.873/0001-46", TPV: 15000, CreditoPedido: 15000, CreditoAceito: 0, CategoriaProduto: "Curva B", DataOperacao: "2026-07-20", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Recusado)", PrazoMedio: 30 },
  { Vendedor: "Carlos Lima", Treinamento: true, Sacado: "Logística Brasil", DocSacado: "90.097.474/0001-96", TPV: 20000, CreditoPedido: 20000, CreditoAceito: 0, CategoriaProduto: "Curva C", DataOperacao: "2026-07-25", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 120 },
  { Vendedor: "Ana Paula", Treinamento: true, Sacado: "Indústria Moderna", DocSacado: "15.316.824/0001-42", TPV: 25000, CreditoPedido: 30000, CreditoAceito: 30000, CategoriaProduto: "Curva A", DataOperacao: "2026-08-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90 },
  { Vendedor: "Pedro Alves", Treinamento: true, Sacado: "Serviços Rápidos", DocSacado: "38.215.400/0001-97", TPV: 30000, CreditoPedido: 35000, CreditoAceito: 35000, CategoriaProduto: "Curva B", DataOperacao: "2026-08-05", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Pendente)", PrazoMedio: 60 },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Distribuidora Central", DocSacado: "14.897.704/0001-13", TPV: 35000, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva C", DataOperacao: "2026-08-10", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 90, DataPago: "2026-10-10" },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Varejo Mais", DocSacado: "73.180.013/0001-63", TPV: 40000, CreditoPedido: 45000, CreditoAceito: 45000, CategoriaProduto: "Curva A", DataOperacao: "2026-08-15", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 60 },
  { Vendedor: "Paulo Henrique", Treinamento: false, Sacado: "Tech Solutions BR", DocSacado: "79.560.490/0001-30", TPV: 45000, CreditoPedido: 45000, CreditoAceito: 0, CategoriaProduto: "Curva B", DataOperacao: "2026-08-20", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 120 },
  { Vendedor: "Maria Silva", Treinamento: true, Sacado: "Construtora Nova Era", DocSacado: "31.446.919/0001-37", TPV: 50000, CreditoPedido: 50000, CreditoAceito: 0, CategoriaProduto: "Curva C", DataOperacao: "2026-08-25", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 60 },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Alimentos Saborosos", DocSacado: "12.345.678/0001-90", TPV: 55000, CreditoPedido: 60000, CreditoAceito: 60000, CategoriaProduto: "Curva A", DataOperacao: "2026-08-30", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120 },
  { Vendedor: "Maria Silva", Treinamento: true, Sacado: "Nova Empresa Alpha", DocSacado: "95.284.038/0001-40", TPV: 20000, CreditoPedido: 60000, CreditoAceito: 60000, CategoriaProduto: "Curva A", DataOperacao: "2026-09-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Expirada)", PrazoMedio: 60 },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Beta Comércio", DocSacado: "71.672.375/0001-46", TPV: 30000, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva B", DataOperacao: "2026-09-05", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 60, DataPago: "2026-10-05" },
  { Vendedor: "Paulo Henrique", Treinamento: false, Sacado: "Gama Serviços", DocSacado: "42.389.694/0001-40", TPV: 15000, CreditoPedido: 15000, CreditoAceito: 0, CategoriaProduto: "Curva C", DataOperacao: "2026-09-10", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Pendente)", PrazoMedio: 90 },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Delta Indústria", DocSacado: "87.655.886/0001-90", TPV: 45000, CreditoPedido: 45000, CreditoAceito: 0, CategoriaProduto: "Curva A", DataOperacao: "2026-09-15", DataAnterior: "2025-01-01", Fase: "1 - Análise de Crédito (Recusado)", PrazoMedio: 120 },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Epsilon Logística", DocSacado: "80.696.366/0001-86", TPV: 25000, CreditoPedido: 45000, CreditoAceito: 45000, CategoriaProduto: "Curva B", DataOperacao: "2026-09-20", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Pendente)", PrazoMedio: 90 },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Zeta Tecnologia", DocSacado: "98.745.996/0001-69", TPV: 50000, CreditoPedido: 100000, CreditoAceito: 100000, CategoriaProduto: "Curva C", DataOperacao: "2026-09-25", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 30, DataPago: "2026-10-25" },
  { Vendedor: "Carlos Lima", Treinamento: true, Sacado: "Eta Distribuidora", DocSacado: "92.141.741/0001-00", TPV: 35000, CreditoPedido: 50000, CreditoAceito: 50000, CategoriaProduto: "Curva A", DataOperacao: "2026-10-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120 },
  { Vendedor: "Ana Paula", Treinamento: true, Sacado: "Theta Varejo", DocSacado: "08.436.814/0001-85", TPV: 18000, CreditoPedido: 75000, CreditoAceito: 75000, CategoriaProduto: "Curva C", DataOperacao: "2026-10-05", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Expirada)", PrazoMedio: 120 },
  { Vendedor: "Pedro Alves", Treinamento: true, Sacado: "Iota Construtora", DocSacado: "50.436.280/0001-53", TPV: 40000, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva A", DataOperacao: "2026-10-10", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 120, DataPago: "2026-11-10" },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Distribuidora Central", DocSacado: "14.897.704/0001-13", TPV: 5000, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva C", DataOperacao: "2026-11-01", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 90, DataPago: "2026-12-01" },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Beta Comércio", DocSacado: "71.672.375/0001-46", TPV: 40000, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva B", DataOperacao: "2026-11-10", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 90, DataPago: "2026-12-10" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Comércio SA", DocSacado: "63.352.656/0001-93", TPV: 10000, CreditoPedido: 10000, CreditoAceito: 10000, CategoriaProduto: "Curva B", DataOperacao: "2026-04-10", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 120, DataPago: "2026-08-10" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Comércio SA", DocSacado: "63.352.656/0001-93", TPV: 15000, CreditoPedido: 10000, CreditoAceito: 10000, CategoriaProduto: "Curva B", DataOperacao: "2026-05-05", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120 },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Supermercados Beta", DocSacado: "34.999.361/0001-05", TPV: 70000, CreditoPedido: 70000, CreditoAceito: 70000, CategoriaProduto: "Curva A", DataOperacao: "2026-07-21", DataAnterior: "2025-01-01", Fase: "3 - Faturado", PrazoMedio: 120 },
  { Vendedor: "Maria Silva", Treinamento: true, Sacado: "Tech Corp", DocSacado: "33.171.262/0001-78", TPV: 0, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva A", DataOperacao: "2026-06-15", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 30 },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Global Ind", DocSacado: "74.797.663/0001-15", TPV: 0, CreditoPedido: 50000, CreditoAceito: 50000, CategoriaProduto: "Curva B", DataOperacao: "2026-05-20", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120, DataPago: "2026-08-20" },
  { Vendedor: "Paulo Henrique", Treinamento: false, Sacado: "Mega Store", DocSacado: "18.883.688/0001-60", TPV: 0, CreditoPedido: 30000, CreditoAceito: 30000, CategoriaProduto: "Curva C", DataOperacao: "2026-07-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90, DataPago: "2026-09-01" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Tech Corp", DocSacado: "33.171.262/0001-78", TPV: 0, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva B", DataOperacao: "2026-06-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 30, DataPago: "2026-07-01" },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Global Ind", DocSacado: "74.797.663/0001-15", TPV: 0, CreditoPedido: 50000, CreditoAceito: 50000, CategoriaProduto: "Curva C", DataOperacao: "2026-06-05", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90, DataPago: "2026-07-05" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Mega Store", DocSacado: "18.883.688/0001-60", TPV: 0, CreditoPedido: 30000, CreditoAceito: 30000, CategoriaProduto: "Curva A", DataOperacao: "2026-05-10", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 30, DataPago: "2026-06-10" },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Distribuidora Central", DocSacado: "14.897.704/0001-13", TPV: 0, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva C", DataOperacao: "2026-08-10", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90, DataPago: "2026-10-10" },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Beta Comércio", DocSacado: "71.672.375/0001-46", TPV: 0, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva B", DataOperacao: "2026-09-05", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 60, DataPago: "2026-10-05" },
  { Vendedor: "Maria Souza", Treinamento: true, Sacado: "Zeta Tecnologia", DocSacado: "98.745.996/0001-69", TPV: 0, CreditoPedido: 100000, CreditoAceito: 100000, CategoriaProduto: "Curva C", DataOperacao: "2026-09-25", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 30, DataPago: "2026-10-25" },
  { Vendedor: "Pedro Alves", Treinamento: true, Sacado: "Iota Construtora", DocSacado: "50.436.280/0001-53", TPV: 0, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva A", DataOperacao: "2026-10-10", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120, DataPago: "2026-11-10" },
  { Vendedor: "Lucas Souza", Treinamento: true, Sacado: "Distribuidora Central", DocSacado: "14.897.704/0001-13", TPV: 0, CreditoPedido: 40000, CreditoAceito: 40000, CategoriaProduto: "Curva C", DataOperacao: "2026-11-01", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90, DataPago: "2026-12-01" },
  { Vendedor: "Douglas Santos", Treinamento: true, Sacado: "Beta Comércio", DocSacado: "71.672.375/0001-46", TPV: 0, CreditoPedido: 80000, CreditoAceito: 80000, CategoriaProduto: "Curva B", DataOperacao: "2026-11-10", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 90, DataPago: "2026-12-10" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Comércio SA", DocSacado: "63.352.656/0001-93", TPV: 0, CreditoPedido: 10000, CreditoAceito: 10000, CategoriaProduto: "Curva B", DataOperacao: "2026-04-10", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120, DataPago: "2026-08-10" },
  { Vendedor: "João Silva", Treinamento: false, Sacado: "Supermercados Beta", DocSacado: "34.999.361/0001-05", TPV: 0, CreditoPedido: 70000, CreditoAceito: 70000, CategoriaProduto: "Curva A", DataOperacao: "2026-07-21", DataAnterior: "2025-01-01", Fase: "2 - Assinatura (Assinada)", PrazoMedio: 120 },
];

const INITIAL_APP_DATA = INITIAL_DATA.map((item, index) => ({
  ...item,
  id: index.toString(),
  Novo: true,
  Reativacao: false
}));

const GLOBAL_META = 7000000;

const ACHIEVEMENTS_LIST = [
  { id: '1', title: 'Among Us', desc: 'Você vendeu 15+ projetos que não foi você que cadastrou', icon: Trophy, tier: 'bronze' },
  { id: '2', title: 'BBB', desc: 'Registrou 3 Novos buyers com a inicial B', icon: Award, tier: 'bronze' },
  { id: '3', title: 'Bola de um lado...', desc: 'Os cadastros foram aprovados 10+ vezes', icon: Zap, tier: 'silver' },
  { id: '4', title: 'GTA VI', desc: 'Vendeu para 6 diferentes buyers', icon: Target, tier: 'silver' },
  { id: '5', title: 'Me dá um autógrafo?', desc: 'Trouxe 10+ Buyers que assinaram', icon: Unlock, tier: 'silver' },
  { id: '6', title: 'O importante é participar', desc: 'Ficou em 4º lugar na classificação geral', icon: Medal, tier: 'bronze' },
  { id: '7', title: 'Amigo do Serasa', desc: 'Teve 3 créditos reprovados seguidos', icon: Activity, tier: 'bronze' },
  { id: '8', title: 'Hat-Trick', desc: 'Teve 3 créditos aprovados seguidos', icon: Zap, tier: 'bronze' },
  { id: '9', title: 'Top Gun', desc: 'Terminou em 1º lugar geral', icon: Trophy, tier: 'gold' },
  { id: '10', title: 'Hoje é sexta-feira', desc: 'Registrou um Buyer na sexta-feira', icon: Clock, tier: 'bronze' },
  { id: '11', title: 'Inception', desc: 'Convenceu um Buyer a entrar na plataforma', icon: Gift, tier: 'bronze' },
  { id: '12', title: 'Escolheu a Pílula vermelha', desc: 'Completou o treinamento AutoMaxPay', icon: Unlock, tier: 'gold' },
  { id: '13', title: 'E=MC²', desc: 'Usou a calculadora de Leads', icon: Settings, tier: 'bronze' },
  { id: '14', title: 'Completando o Pódio', desc: 'Terminou em 3º lugar geral', icon: Medal, tier: 'bronze' },
  { id: '15', title: 'Enxergando o topo', desc: 'Terminou em 2º lugar geral', icon: Medal, tier: 'silver' },
  { id: '16', title: 'Tirando poeira', desc: 'Vendeu 50 mil reais em Curva B + C', icon: Target, tier: 'silver' },
  { id: '17', title: 'Segurança Máxima', desc: 'Fez login 5 vezes na plataforma', icon: Lock, tier: 'bronze' },
  { id: '18', title: 'Amor Próprio', desc: 'Clicou no seu perfil por 7 dias seguidos', icon: Activity, tier: 'bronze' },
  { id: '19', title: 'Mãe eu tô famoso', desc: 'Entrou para o ranking geral', icon: TrendingUp, tier: 'bronze' },
  { id: '20', title: 'Uma luz no fim do túnel', desc: 'Atingiu o primeiro bônus individual', icon: Award, tier: 'bronze' },
  { id: '21', title: 'Nunca foi sorte', desc: 'Atingiu o segundo bônus individual', icon: Award, tier: 'silver' },
  { id: '22', title: 'O céu é o limite', desc: 'Atingiu o terceiro bônus individual', icon: Trophy, tier: 'gold' },
];

const getDaysDiff = (dateStr?: string) => {
  if (!dateStr) return 0;
  const targetDate = new Date(dateStr);
  const today = new Date("2026-07-15T00:00:00");
  const diffTime = today.getTime() - targetDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export default function Dashboard() {
  const [appData, setAppData] = useState(INITIAL_APP_DATA);
  const [selectedVendedor, setSelectedVendedor] = useState<string>("Visão Geral (Gestão)");
  const [isSellerDropdownOpen, setIsSellerDropdownOpen] = useState(false);
  const [sellerSearch, setSellerSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [reanaliseModal, setReanaliseModal] = useState<{ isOpen: boolean; card: any; type: 'assinatura' | 'assinatura-expirada' | 'credito-recusado' } | null>(null);
  const [boletosModal, setBoletosModal] = useState<{ isOpen: boolean; card: any } | null>(null);
  const [reanaliseForm, setReanaliseForm] = useState({ situacao: '', limiteAtual: '', saldoDevedor: '', valor: '', motivo: '' });

  const [globalSearch, setGlobalSearch] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [usedCalculatorSellers, setUsedCalculatorSellers] = useState<string[]>([]);
  const [calcMetaFaturamento, setCalcMetaFaturamento] = useState<number | ''>('');
  const [isCopied, setIsCopied] = useState(false);
  const [showLinkInfo, setShowLinkInfo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [blockedMessage, setBlockedMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'analise' | 'assinatura' | 'faturado'>('analise');
  const [mainView, setMainView] = useState<'esteira' | 'conquistas'>('esteira');
  const [showMobileRanking, setShowMobileRanking] = useState(false);
  const [showPrizeInfo, setShowPrizeInfo] = useState(false);

  const [toastQueue, setToastQueue] = useState<any[]>([]);
  const prevUnlockedIdsRef = useRef<Set<string>>(new Set());
  const currentSellerRef = useRef<string>(selectedVendedor);

  const isReanaliseFormValid = useMemo(() => {
    if (!reanaliseModal) return false;
    const { type } = reanaliseModal;
    if (type === 'assinatura') {
      return (
        reanaliseForm.limiteAtual.trim() !== '' &&
        reanaliseForm.saldoDevedor.trim() !== '' &&
        reanaliseForm.valor.trim() !== '' &&
        reanaliseForm.motivo.trim() !== ''
      );
    } else {
      return (
        reanaliseForm.valor.trim() !== '' &&
        reanaliseForm.motivo.trim() !== ''
      );
    }
  }, [reanaliseModal, reanaliseForm]);

  const handleSaveReanalise = () => {
    if (!reanaliseModal || !isReanaliseFormValid) return;
    const { card } = reanaliseModal;
    
    if (card.id.startsWith('sim-')) {
       const newCard = {
           ...card,
           id: Date.now().toString(),
           Fase: "1 - Análise de Crédito (Pendente)",
           DataOperacao: new Date("2026-11-15").toISOString().split('T')[0],
           CreditoPedido: Number(reanaliseForm.valor) || card.CreditoPedido,
           Novo: false
       };
       setAppData([...appData, newCard]);
    } else {
       setAppData(appData.map(c => 
           c.id === card.id 
               ? { ...c, Fase: "1 - Análise de Crédito (Pendente)", CreditoPedido: Number(reanaliseForm.valor) || c.CreditoPedido, DataOperacao: new Date("2026-11-15").toISOString().split('T')[0], Novo: false } 
               : c
       ));
    }
    setReanaliseModal(null);
  };

  const handleOpenReanalise = (card: any, type: string) => {
    const diasPassados = getDaysDiff(card.DataOperacao);
    const diasFaltantes = 90 - diasPassados;

    if (type === 'credito-recusado' && diasFaltantes > 0 && diasFaltantes <= 90) {
      setBlockedMessage(
        `Reanálise bloqueada pois ainda não se passaram os 90 dias necessários. Faltam ${diasFaltantes} dias para desbloquear seu pedido.`
      );
      return;
    }

    let situacao = '';
    if (type === 'assinatura-expirada') situacao = 'Assinatura Expirada';
    else if (type === 'credito-recusado') situacao = 'Crédito Recusado';
    else if (type === 'assinatura') situacao = 'Aumento de Limite';

    setReanaliseModal({ isOpen: true, card, type: type as any });
    setReanaliseForm({
        situacao,
        limiteAtual: '',
        saldoDevedor: '',
        valor: '',
        motivo: ''
    });
  };

  // Fechar dropdown de vendedores ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSellerDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Derived state updates handled directly via event handlers to avoid cascading render lint issues
  const isGestao = selectedVendedor === "Visão Geral (Gestão)";
  const currentView = isGestao ? 'esteira' : mainView;

  const getSimulatedLink = () => {
    if (selectedVendedor !== "Visão Geral (Gestão)") {
      const slug = selectedVendedor.toLowerCase().replace(/\s+/g, '-');
      return `https://automaxpay.com.br/cadastro?ref=${slug}`;
    }
    return 'https://automaxpay.com.br/cadastro';
  };

  const handleLinkClick = () => {
    const link = getSimulatedLink();
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleLinkDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLinkInfo(true);
  };

  const formatBRL = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }).format(value);
  };

  const getSellers = () => {
    const sellers = Array.from(new Set(appData.map(d => d.Vendedor))).sort((a, b) => a.localeCompare(b));
    return ["Visão Geral (Gestão)", ...sellers];
  };

  const filteredSellersList = getSellers().filter(s => 
    s.toLowerCase().includes(sellerSearch.toLowerCase())
  );

  // 1. Meta Global Computations
  const globalFaturado = useMemo(() => {
    return appData
      .filter(d => d.Fase.toLowerCase().includes("faturado"))
      .reduce((sum, d) => sum + d.TPV, 0);
  }, [appData]);

  const metaReached = globalFaturado >= GLOBAL_META;
  const metaProgress = Math.min((globalFaturado / GLOBAL_META) * 100, 100);

  // Lead Calculator Derived Values
  const metaVal = calcMetaFaturamento === '' ? 0 : calcMetaFaturamento;
  const volumeBuyersNecessarios = metaVal > 0 
    ? Math.ceil(metaVal / (16500 * (0.25 + 0.24 + (0.8 * 0.03))))
    : 0;
  const volumeBuyersMes = Math.ceil(volumeBuyersNecessarios / 3);

  // 2. Data Filtering based on Selector
  const filteredData = useMemo(() => {
    if (selectedVendedor === "Visão Geral (Gestão)") return appData;
    return appData.filter(d => d.Vendedor === selectedVendedor);
  }, [selectedVendedor, appData]);

  // 3. KPIs
  const kpis = useMemo(() => {
    const faturados = filteredData.filter(d => d.Fase.toLowerCase().includes("faturado"));
    
    // Aproveitamento: count of unique clients in Faturado / total unique clients
    const uniqueClientsFaturados = new Set(faturados.map(d => d.Sacado)).size;
    const uniqueClientsTotal = new Set(filteredData.map(d => d.Sacado)).size;
    const aproveitamento = uniqueClientsTotal > 0 ? ((uniqueClientsFaturados / uniqueClientsTotal) * 100).toFixed(1) : "0.0";

    const faturamentoPlataforma = faturados.reduce((sum, d) => sum + d.TPV, 0);
    const curvaA = faturados.filter(d => d.CategoriaProduto.includes("Curva A")).reduce((sum, d) => sum + d.TPV, 0);
    const curvasBC = faturados.filter(d => d.CategoriaProduto.includes("Curva B") || d.CategoriaProduto.includes("Curva C")).reduce((sum, d) => sum + d.TPV, 0);

    const naoFaturados = filteredData.filter(d => !d.Fase.toLowerCase().includes("faturado"));
    const volNovos = naoFaturados.filter(d => d.Novo).length;
    const totalCadastros = new Set(filteredData.map(d => d.Sacado)).size;
    const percentNovos = naoFaturados.length > 0 ? ((volNovos / naoFaturados.length) * 100).toFixed(1) : "0.0";

    return {
      volNovos,
      percentNovos,
      totalCadastros,
      aproveitamento,
      faturamentoPlataforma,
      curvaA,
      curvasBC,
    };
  }, [filteredData]);

  // 4. Funnel Data Processing (Applying Restrictive Rule & Global Search)
  const { funnelDataAnalise, funnelDataAssinatura, funnelDataFaturado, sacadoTotals } = useMemo(() => {
    const faturados = filteredData.filter(d => d.Fase.toLowerCase().includes('faturado'));
    
    // Explicit cards
    const analise = filteredData.filter(d => d.Fase.toLowerCase().includes('análise'));
    const assinaturaExplicitos = filteredData.filter(d => d.Fase.toLowerCase().includes('assinatura'));
    
    // To prevent simulated Faturado cards in Assinatura if the client already has a card in Analise or Assinatura
    const sacadosNaAnaliseOuAssinatura = new Set([...analise, ...assinaturaExplicitos].map(d => d.Sacado));
    
    const assinaturaFromFaturado: any[] = [];
    const assinaturaFromFaturadoMap = new Set();
    faturados.forEach(d => {
        if (!sacadosNaAnaliseOuAssinatura.has(d.Sacado) && !assinaturaFromFaturadoMap.has(d.Sacado)) {
            assinaturaFromFaturadoMap.add(d.Sacado);
            assinaturaFromFaturado.push({ ...d, Fase: "2 - Assinatura (Assinada)", id: `sim-${d.id}` });
        }
    });

    const assinaturaRaw = [...assinaturaExplicitos, ...assinaturaFromFaturado];
    const assinaturaUnica: any[] = [];
    const assinaturaSet = new Set();
    assinaturaRaw.forEach(d => {
        if (!assinaturaSet.has(d.Sacado)) {
            assinaturaSet.add(d.Sacado);
            assinaturaUnica.push(d);
        }
    });
    const assinatura = assinaturaUnica;

    const totals: Record<string, number> = {};
    faturados.forEach(d => {
      const numParcelas = Math.max(1, Math.floor((d.PrazoMedio || 30) / 30));
      const valorParcela = d.TPV / numParcelas;
      const dataOperacao = new Date(d.DataOperacao);
      let paidBoletos = 0;
      if (d.DataPago) {
        const payDate = new Date(d.DataPago);
        const diffMonths = (payDate.getFullYear() - dataOperacao.getFullYear()) * 12 + (payDate.getMonth() - dataOperacao.getMonth());
        paidBoletos = Math.max(0, diffMonths);
      }
      paidBoletos = Math.min(paidBoletos, numParcelas);
      const valorPago = paidBoletos * valorParcela;
      totals[d.Sacado] = (totals[d.Sacado] || 0) + d.TPV - valorPago;
    });

    const cleanText = (str: string) => str.toLowerCase().replace(/[.\-\/]/g, '');
    const searchClean = cleanText(globalSearch);

    const filterBySearch = (arr: any[]) => {
      if (!searchClean) return arr;
      return arr.filter(d => 
        cleanText(d.Sacado).includes(searchClean) ||
        cleanText(d.DocSacado || '').includes(searchClean)
      );
    };

    return {
      funnelDataAnalise: filterBySearch(analise),
      funnelDataAssinatura: filterBySearch(assinatura),
      funnelDataFaturado: filterBySearch(faturados),
      sacadoTotals: totals,
  selectedVendedor: totals
    };
  }, [filteredData, globalSearch]);

  // 4. Ranking Computations (Global, only those with Treinamento == true)
  const allSellers = useMemo(() => Array.from(new Set(appData.map(d => d.Vendedor))), [appData]);
  const eligibleSellers = useMemo(() => Array.from(new Set(appData.filter(d => d.Treinamento).map(d => d.Vendedor))), [appData]);

  const fullRankingWithIndex = useMemo(() => {
    const validSales = appData.filter(d => eligibleSellers.includes(d.Vendedor));
    
    const sellerStats: Record<string, any> = {};
    eligibleSellers.forEach(s => sellerStats[s] = {
      cadastrosAprovados: 0,
      cadastrosAtivados: 0,
      vendasCurvaA: 0,
      vendasCurvaBC: 0,
      bonusTPV: 0,
      totalTPV: 0,
      totalPoints: 0
    });

    const approvedCNPJs: Record<string, Set<string>> = {};
    const activatedCNPJs: Record<string, Set<string>> = {};
    eligibleSellers.forEach(s => {
      approvedCNPJs[s] = new Set<string>();
      activatedCNPJs[s] = new Set<string>();
    });
    
    validSales.forEach(s => {
      const isAprovado = s.Fase.includes('2 -') || s.Fase.includes('3 -');
      const isAtivado = s.Fase.includes('Assinada') || s.Fase.includes('3 -');
      const isFaturado = s.Fase.includes('3 -');
      
      const stats = sellerStats[s.Vendedor];
      if (!stats) return;

      const clientKey = s.DocSacado || s.Sacado;

      if (isAprovado) {
        if (!approvedCNPJs[s.Vendedor].has(clientKey)) {
          approvedCNPJs[s.Vendedor].add(clientKey);
          stats.cadastrosAprovados += 1;
        }
      }
      if (isAtivado) {
        if (!activatedCNPJs[s.Vendedor].has(clientKey)) {
          activatedCNPJs[s.Vendedor].add(clientKey);
          stats.cadastrosAtivados += 1;
        }
      }
      
      if (isFaturado) {
        const cat = s.CategoriaProduto || "";
        const isCurvaA = cat.includes("Curva A") || cat.includes("(Curva A)");
        const isCurvaBC = cat.includes("Curva B") || cat.includes("(Curva B)") || cat.includes("Curva C") || cat.includes("(Curva C)");
        
        if (isCurvaA) {
          stats.vendasCurvaA += 1;
        } else if (isCurvaBC) {
          stats.vendasCurvaBC += 1;
        }
        stats.totalTPV += s.TPV;
      }
    });

    return Object.entries(sellerStats)
      .map(([nome, stats]) => {
        const fatorTPV = Math.floor(stats.totalTPV / 10000);
        const subAprovados = stats.cadastrosAprovados * 5;
        const subAtivados = stats.cadastrosAtivados * 10;
        const subCurvaA = stats.vendasCurvaA * 1;
        const subCurvaBC = stats.vendasCurvaBC * 5;
        const subBonusTPV = fatorTPV * 1;
        
        const totalPoints = subAprovados + subAtivados + subCurvaA + subCurvaBC + subBonusTPV;
        const temBonusFinanceiroExtra = stats.totalTPV > 100000;
        
        return { 
          nome, 
          stats: { ...stats, fatorTPV, subAprovados, subAtivados, subCurvaA, subCurvaBC, subBonusTPV, temBonusFinanceiroExtra },
          faturado: stats.totalTPV,
          totalPoints 
        };
      })
      .sort((a, b) => b.totalPoints - a.totalPoints || b.faturado - a.faturado)
      .map((item, idx) => ({ ...item, originalIndex: idx, isBlurred: false }));
  }, [eligibleSellers, appData]);

  const visibleRanking = useMemo(() => {
    if (selectedVendedor === "Visão Geral (Gestão)") {
      return fullRankingWithIndex;
    }

    const userEligible = eligibleSellers.includes(selectedVendedor);
    if (!userEligible) {
      return fullRankingWithIndex.slice(0, 5);
    }
    
    const top3 = fullRankingWithIndex.slice(0, 3);
    const isInTop3 = top3.some(r => r.nome === selectedVendedor);
    const displayed: any[] = [...top3];

    if (!isInTop3) {
      const userEntry = fullRankingWithIndex.find(r => r.nome === selectedVendedor);
      if (userEntry) {
        if (userEntry.originalIndex > 3) {
          displayed.push({ isDots: true, nome: 'dots' } as any);
        }
        displayed.push(userEntry);
      }
    }

    return displayed;
  }, [selectedVendedor, fullRankingWithIndex, eligibleSellers]);

  const isCurrentSellerIneligible = selectedVendedor !== "Visão Geral (Gestão)" && !eligibleSellers.includes(selectedVendedor);

  const unlockedAchievements = useMemo(() => {
    if (selectedVendedor === "Visão Geral (Gestão)") return ACHIEVEMENTS_LIST.map(a => ({ ...a, isUnlocked: false }));
    const unlockedIds = new Set<string>();
    
    const sellerData = appData.filter(d => d.Vendedor === selectedVendedor);
    
    if (sellerData.some(d => d.Treinamento)) unlockedIds.add('12');
    
    const faturadoBC = sellerData.filter(d => d.Fase.includes('Faturado') && (d.CategoriaProduto.includes('Curva B') || d.CategoriaProduto.includes('Curva C'))).reduce((sum, d) => sum + d.TPV, 0);
    if (faturadoBC >= 50000) unlockedIds.add('16');
    
    const uniqueBuyers = new Set(sellerData.map(d => d.Sacado)).size;
    if (uniqueBuyers >= 6) unlockedIds.add('4');
    
    const sellerRank = fullRankingWithIndex.find(r => r.nome === selectedVendedor);
    if (sellerRank) {
      unlockedIds.add('19');
      if (sellerRank.originalIndex === 0) unlockedIds.add('9');
      if (sellerRank.originalIndex === 1) unlockedIds.add('15');
      if (sellerRank.originalIndex === 2) unlockedIds.add('14');
      if (sellerRank.originalIndex === 3) unlockedIds.add('6');
    }

    const mockHash = selectedVendedor.length;
    if (mockHash % 2 === 0) unlockedIds.add('11');
    if (mockHash % 3 === 0) unlockedIds.add('17');
    if (mockHash % 4 === 0) unlockedIds.add('18');
    if (usedCalculatorSellers.includes(selectedVendedor)) unlockedIds.add('13');
    if (sellerData.length > 3) unlockedIds.add('10');
    if (sellerData.filter(d => d.Fase.includes('Assinada')).length >= 2) unlockedIds.add('5');
    if (sellerData.filter(d => d.Fase.includes('Recusado')).length >= 1) unlockedIds.add('7');
    
    return ACHIEVEMENTS_LIST.map(ach => ({
      ...ach,
      isUnlocked: unlockedIds.has(ach.id)
    }));
  }, [selectedVendedor, appData, fullRankingWithIndex, usedCalculatorSellers]);

  useEffect(() => {
    const currentUnlockedIds = new Set(unlockedAchievements.filter(a => a.isUnlocked).map(a => a.id));
    
    if (selectedVendedor === currentSellerRef.current && selectedVendedor !== "Visão Geral (Gestão)") {
      const newlyUnlocked = unlockedAchievements.filter(a => a.isUnlocked && !prevUnlockedIdsRef.current.has(a.id));
      if (newlyUnlocked.length > 0) {
        setToastQueue(prev => [...prev, ...newlyUnlocked]);
      }
    }

    prevUnlockedIdsRef.current = currentUnlockedIds;
    currentSellerRef.current = selectedVendedor;
  }, [unlockedAchievements, selectedVendedor]);

  useEffect(() => {
    if (toastQueue.length > 0) {
      const timer = setTimeout(() => {
        setToastQueue(prev => prev.slice(1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastQueue]);

  const unlockedCount = unlockedAchievements.filter(a => a.isUnlocked).length;

  const getStatusTag = (card: any, columnType?: 'analise' | 'assinatura' | 'faturado') => {
    const faseStr = (card.Fase || '').toLowerCase();
    const daysDiff = getDaysDiff(card.DataOperacao);
    
    const isPendente = faseStr.includes('pendente');
    const isRecusado = faseStr.includes('recusado');
    const isAssinada = faseStr.includes('assinada');
    
    // 1. Cliente EXPIRADO (Tag "Expirada")
    // Critério: Se o cliente estiver na Fase 3 ("Cadastro do Convênio", que no funil é a coluna Assinatura / columnType === 'assinatura'), 
    // com status pendente, e a sua data de operação for maior que 60 dias (getDaysDiff > 60).
    // Ou se a fase já contiver explicitamente 'expirada'.
    const isExpirada = faseStr.includes('expirada') || (columnType === 'assinatura' && isPendente && daysDiff > 60);

    const tags: React.ReactNode[] = [];

    // Tag "Novo"
    if (card.Novo && columnType !== 'faturado' && !faseStr.includes('faturado')) {
      tags.push(
        <span key="novo" className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 font-medium">
          Novo
        </span>
      );
    }

    // Tag "Expirada" (anteriormente "Assinatura Expirada")
    if (isExpirada) {
      tags.push(
        <span key="expirada" className="text-[10px] bg-orange-500/10 text-orange-400 border-orange-500/20 font-bold px-1.5 py-0.5 rounded border">
          Expirada
        </span>
      );
    }

    // Outros Status da Esteira
    if (isRecusado) {
      tags.push(
        <span key="recusado" className="text-[10px] bg-red-500/10 text-red-400 border-red-500/20 font-bold px-1.5 py-0.5 rounded border">
          Recusado
        </span>
      );
    } else if (isAssinada) {
      tags.push(
        <span key="assinada" className="text-[10px] bg-green-500/10 text-green-400 border-green-500/20 px-1.5 py-0.5 rounded border">
          Assinado
        </span>
      );
    } else if (isPendente && !isExpirada) {
      tags.push(
        <span key="pendente" className="text-[10px] bg-yellow-500/10 text-yellow-400 border-yellow-500/20 px-1.5 py-0.5 rounded border">
          Pendente
        </span>
      );
    }

    return (
      <div className="flex flex-wrap gap-1.5">
        {tags}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen xl:h-screen p-4 xl:p-6 bg-[#0f1115] text-gray-200">
      
      {/* Toast PS4 Style */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3 pointer-events-none">
        {toastQueue.slice(0, 3).map((toast, index) => {
          const ToastIcon = toast.icon;
          return (
            <div 
              key={`${toast.id}-${index}`}
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 border border-yellow-400 shadow-[0_10px_40px_rgba(234,179,8,0.4)] rounded-full p-2 pr-8 flex items-center gap-4 min-w-[340px] animate-in slide-in-from-top-10 fade-in duration-500 pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full bg-black/40 border border-yellow-300/50 flex items-center justify-center shrink-0 shadow-inner">
                <ToastIcon size={24} className="text-white drop-shadow-md" />
              </div>
              <div>
                <div className="text-yellow-100 text-[10px] font-black uppercase tracking-widest mb-0.5 drop-shadow-md">
                  🏆 Troféu Desbloqueado!
                </div>
                <div className="text-white font-bold text-sm leading-tight drop-shadow-md">
                  {toast.title}
                </div>
                <div className="text-yellow-50 text-xs mt-0.5 leading-snug font-medium drop-shadow-sm">
                  {toast.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Header */}
      <header className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 mb-6 w-full">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M49.9999 10.0001L15.359 70.0001H38.453L49.9999 50.0001L61.5469 70.0001H84.6409L49.9999 10.0001Z" fill="white"/>
              <path d="M49.9999 90.0001L26.9059 50.0001L15.359 70.0001L49.9999 90.0001Z" fill="white"/>
              <path d="M49.9999 90.0001L84.6409 70.0001L73.094 50.0001L49.9999 90.0001Z" fill="white"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wider uppercase flex items-center gap-2">
              AUTOMAX <span className="text-red-500 font-light">| Rezultz</span>
            </h1>
          </div>
        </div>

        <div className="flex-1 w-full lg:max-w-3xl lg:px-12 order-3 lg:order-none mt-2 lg:mt-0">
          <div className="flex justify-between text-xs mb-2 font-mono">
            <span className="text-gray-400">{formatBRL(globalFaturado)}</span>
            <span className="text-red-500 font-semibold">{formatBRL(GLOBAL_META)}</span>
          </div>
          <div className="h-2.5 bg-[#1a1d24] rounded-full overflow-hidden border border-gray-800">
            <div 
              className="h-full bg-red-600 transition-all duration-1000 ease-out" 
              style={{ width: `${Math.max(metaProgress, 1)}%` }} // Minimum 1% just to be visible
            />
          </div>
          <div className="flex justify-end items-center mt-2">
            {metaReached ? (
              <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded flex items-center gap-1 uppercase font-bold border border-green-500/20">
                <Unlock size={12}/> Premiações Liberadas
              </span>
            ) : (
              <span className="text-[10px] bg-gray-800/50 text-gray-500 px-2 py-0.5 rounded flex items-center gap-1 uppercase font-semibold border border-gray-700/50">
                <Lock size={12}/> Premiações Bloqueadas
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full lg:w-auto order-2 lg:order-none">
          {selectedVendedor !== "Visão Geral (Gestão)" && (
            <button 
              onClick={handleLinkClick}
              onDoubleClick={handleLinkDoubleClick}
              title="Dê duplo clique para ver informações do link"
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#1a1d24] hover:bg-[#1f2229] border border-gray-700 hover:border-red-500/50 text-gray-200 text-sm rounded-md px-4 py-3 lg:py-2 min-h-[44px] transition-colors focus:outline-none shadow-sm"
            >
              <LinkIcon size={16} className={isCopied ? "text-green-500" : "text-gray-400"} />
              <span className="font-medium">{isCopied ? "Copiado!" : "Indicação"}</span>
            </button>
          )}
          <button 
            onClick={() => setIsCalculatorModalOpen(true)}
            className="flex-1 lg:flex-none flex items-center justify-center bg-[#1a1d24] hover:bg-[#1f2229] border border-gray-700 hover:border-red-500/50 text-gray-200 text-sm rounded-md px-4 py-3 lg:py-2 min-h-[44px] transition-colors focus:outline-none shadow-sm"
          >
            <span className="font-medium">Calculadora</span>
          </button>
          
          {/* Custom Seller Dropdown */}
          <div className="relative w-full lg:w-56" ref={dropdownRef}>
            <button 
              onClick={() => setIsSellerDropdownOpen(!isSellerDropdownOpen)}
              className="flex items-center justify-between w-full bg-[#1a1d24] border border-gray-700 text-gray-200 text-sm rounded-md px-4 py-3 lg:py-2 min-h-[44px] focus:outline-none focus:border-red-500 cursor-pointer shadow-sm transition-colors"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="truncate">{selectedVendedor}</span>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${isSellerDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSellerDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-[#22262f] border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col">
                <div className="p-2 border-b border-gray-700 bg-[#16181d]">
                  <div className="relative">
                    <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input 
                      type="text" 
                      placeholder="Buscar vendedor..."
                      value={sellerSearch}
                      onChange={(e) => setSellerSearch(e.target.value)}
                      className="w-full bg-[#1a1d24] border border-gray-600 rounded text-xs text-white pl-8 pr-3 py-1.5 focus:outline-none focus:border-red-500"
                    />
                    {sellerSearch && (
                      <button 
                        onClick={() => setSellerSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                  {filteredSellersList.length > 0 ? (
                    filteredSellersList.map(s => (
                      <button
                        key={s}
                        onClick={() => {
                          setSelectedVendedor(s);
                          setIsSellerDropdownOpen(false);
                          setSellerSearch('');
                          setShowDetails(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-[#1a1d24] ${s === selectedVendedor ? 'text-red-400 bg-[#1a1d24] font-medium' : 'text-gray-300'}`}
                      >
                        {s}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-xs text-gray-500 text-center">Nenhum vendedor encontrado.</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* View Toggle */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-px">
        <button
          onClick={() => setMainView('esteira')}
          className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
            currentView === 'esteira' ? 'border-red-500 text-red-500' : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          Painel de Vendas
        </button>
        {selectedVendedor !== "Visão Geral (Gestão)" && (
          <button
            onClick={() => setMainView('conquistas')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              currentView === 'conquistas' ? 'border-red-500 text-red-500' : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Trophy size={16} />
            Galeria de Troféus
          </button>
        )}
      </div>

      {currentView === 'esteira' ? (
        <>
          {/* KPIs Blocks */}
      <div className={selectedVendedor === "Visão Geral (Gestão)" 
        ? "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6" 
        : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6"
      }>
        {/* Comportamento */}
        <div className="bg-[#1a1d24] border border-gray-800 rounded-xl p-4 md:p-5 relative overflow-hidden group hover:border-red-900/30 transition-colors">
          <Activity size={120} className="absolute -right-6 -bottom-6 text-white/[0.02] -rotate-12 pointer-events-none" />
          <h3 className="text-red-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-5">
            <Zap size={14} /> Comportamento (Esforço)
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-gray-800/50 pb-3">
              <span className="text-xs text-gray-400">Volume de Cadastros na Plataforma</span>
              <span className="text-2xl font-semibold">{kpis.totalCadastros}</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-gray-400">Volume de Novos Cadastros</span>
              <span className="text-2xl font-semibold">{kpis.percentNovos}%</span>
            </div>
          </div>
        </div>

        {/* Eficiência da Esteira */}
        <div className="bg-[#1a1d24] border border-gray-800 rounded-xl p-4 md:p-5 relative overflow-hidden group hover:border-red-900/30 transition-colors">
          <Settings size={120} className="absolute -right-6 -bottom-6 text-white/[0.02] rotate-12 pointer-events-none" />
          <h3 className="text-red-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-5">
            <TrendingUp size={14} /> Métricas
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-gray-800/50 pb-3">
              <span className="text-xs text-gray-400">Aproveitamento de Cadastros</span>
              <span className="text-2xl font-semibold">{kpis.aproveitamento}%</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-gray-400">Volume Total de Pagamentos (TPV)</span>
              <span className="text-2xl font-semibold text-gray-300">{formatBRL(kpis.faturamentoPlataforma)}</span>
            </div>
          </div>
        </div>

        {/* Performance de Mix */}
        <div className="bg-[#1a1d24] border border-gray-800 rounded-xl p-4 md:p-5 relative overflow-hidden group hover:border-red-900/30 transition-colors">
          <Target size={120} className="absolute -right-6 -bottom-6 text-white/[0.02] -rotate-12 pointer-events-none" />
          <h3 className="text-red-500 text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-5">
            <Clock size={14} /> Performance de Mix
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-end border-b border-gray-800/50 pb-3">
              <span className="text-xs text-gray-400">Curva A</span>
              <span className="text-xl font-bold font-mono text-white">{formatBRL(kpis.curvaA)}</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xs text-gray-400">Curvas B e C</span>
              <span className="text-xl font-bold font-mono text-white">{formatBRL(kpis.curvasBC)}</span>
            </div>
          </div>
        </div>

        {/* Upload XML */}
        {selectedVendedor !== "Visão Geral (Gestão)" && (
          <div 
            onClick={() => setIsUploadModalOpen(true)}
            className="bg-[#1a1d24] border border-gray-800 rounded-xl p-4 md:p-5 relative overflow-hidden group hover:border-red-500/50 hover:bg-[#1f2229] transition-colors cursor-pointer flex flex-col justify-center items-center text-center"
          >
            <UploadCloud className="text-gray-500 group-hover:text-red-400 mb-3 transition-colors" size={32} />
            <h4 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors mb-1">Subir Nota Fiscal / XML</h4>
            <p className="text-[10px] text-gray-500">Clique para selecionar e enviar arquivo</p>
          </div>
        )}
      </div>

      {/* Main Area: Esteira & Ranking */}
      <div className="flex-1 flex flex-col xl:flex-row gap-6 min-h-[600px] xl:min-h-0">
        
        {/* Esteira de Vendas Pipefy */}
        <div className="flex-1 flex flex-col bg-[#111318] rounded-xl border border-gray-800/60 overflow-hidden min-w-0">
          
          <div className="p-4 border-b border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#16181d]">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-red-500" />
              <h2 className="text-sm font-bold text-gray-200">Esteira de Vendas</h2>
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Buscar cliente ou CNPJ..."
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-xs text-white pl-9 pr-3 py-2 focus:outline-none focus:border-red-500 shadow-sm"
              />
              {globalSearch && (
                <button 
                  onClick={() => setGlobalSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 min-h-[32px] min-w-[32px] flex items-center justify-center"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
          
          {/* Mobile Tabs */}
          <div className="flex md:hidden bg-[#16181d] border-b border-gray-800 p-2 gap-2 overflow-x-auto custom-scrollbar">
            <button onClick={() => setActiveTab('analise')} className={`px-4 py-3 h-11 whitespace-nowrap rounded-lg text-sm font-bold flex-1 text-center transition-colors ${activeTab === 'analise' ? 'bg-[#1a1d24] text-white border border-gray-700' : 'text-gray-500'}`}>1. Chegada/Análise</button>
            <button onClick={() => setActiveTab('assinatura')} className={`px-4 py-3 h-11 whitespace-nowrap rounded-lg text-sm font-bold flex-1 text-center transition-colors ${activeTab === 'assinatura' ? 'bg-[#1a1d24] text-white border border-gray-700' : 'text-gray-500'}`}>2. Convênio</button>
            <button onClick={() => setActiveTab('faturado')} className={`px-4 py-3 h-11 whitespace-nowrap rounded-lg text-sm font-bold flex-1 text-center transition-colors ${activeTab === 'faturado' ? 'bg-[#1a1d24] text-white border border-gray-700' : 'text-gray-500'}`}>3. Faturamento</button>
          </div>
          
          <div className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-4 p-4 overflow-y-auto md:overflow-x-auto min-h-0">
            {/* Col 1: Análise de Crédito */}
            <div className={`${activeTab === 'analise' ? 'flex' : 'hidden'} md:flex flex-col h-full min-h-0`}>
              <FunnelColumn 
                title="Análise de Crédito" 
                data={funnelDataAnalise} 
                getStatusTag={getStatusTag}
                formatBRL={formatBRL}
                type="analise"
                selectedVendedor={selectedVendedor}
                onReanalise={handleOpenReanalise}
                getDaysDiff={getDaysDiff}
              />
            </div>
            {/* Col 2: Assinatura / Convênio */}
            <div className={`${activeTab === 'assinatura' ? 'flex' : 'hidden'} md:flex flex-col h-full min-h-0`}>
              <FunnelColumn 
                title="Assinatura de Convênio" 
                data={funnelDataAssinatura} 
                getStatusTag={getStatusTag}
                formatBRL={formatBRL}
                type="assinatura"
                selectedVendedor={selectedVendedor}
                onReanalise={handleOpenReanalise}
                getDaysDiff={getDaysDiff}
              />
            </div>
            {/* Col 3: Faturado */}
            <div className={`${activeTab === 'faturado' ? 'flex' : 'hidden'} md:flex flex-col h-full min-h-0`}>
              <FunnelColumn 
                title="Faturado" 
                data={funnelDataFaturado} 
                getStatusTag={getStatusTag}
                formatBRL={formatBRL}
                type="faturado"
                sacadoTotals={sacadoTotals}
                selectedVendedor={selectedVendedor}
                onReanalise={handleOpenReanalise}
                onOpenBoletos={(card) => setBoletosModal({ isOpen: true, card })}
                getDaysDiff={getDaysDiff}
              />
            </div>
          </div>
        </div>

        {/* Floating Button for Mobile */}
        <button 
          onClick={() => setShowMobileRanking(true)} 
          className="fixed bottom-6 right-6 z-40 xl:hidden bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center transition-transform hover:scale-105 focus:outline-none"
        >
          <Trophy size={24} />
        </button>

        {/* Right Column (Ranking & Details) */}
        <div className={`xl:flex xl:w-80 flex-col gap-6 shrink-0 min-h-0 ${showMobileRanking ? 'fixed inset-0 z-50 bg-[#0f1115] p-4 sm:p-6 flex overflow-y-auto' : 'hidden'}`}>
          {showMobileRanking && (
            <div className="flex justify-between items-center mb-2 xl:hidden shrink-0">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Trophy className="text-red-500" />
                Painel do Vendedor
              </h2>
              <button 
                onClick={() => setShowMobileRanking(false)}
                className="bg-[#1a1d24] text-gray-400 hover:text-white rounded-full p-2"
              >
                <X size={24} />
              </button>
            </div>
          )}
          
          {/* Ranking Geral */}
          <div className="flex flex-col bg-[#111318] rounded-xl border border-gray-800/60 flex-1 xl:min-h-[300px]">
            <div className="p-4 border-b border-gray-800/60 flex items-center justify-between bg-[#16181d] rounded-t-xl overflow-visible z-20">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-red-500" />
                <h2 className="text-sm font-bold text-gray-200 flex items-center gap-2 relative">
                  Ranking Geral
                  <div 
                    className="flex items-center cursor-pointer relative" 
                    onMouseEnter={() => setShowPrizeInfo(true)} 
                    onMouseLeave={() => setShowPrizeInfo(false)}
                  >
                    <Info size={14} className="text-gray-500 hover:text-gray-300 transition-colors" />
                    
                    {showPrizeInfo && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#22262f] border border-gray-700 shadow-xl rounded-lg p-4 text-xs z-[60] cursor-default font-normal tracking-normal" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-2 mb-3">
                          <Gift size={16} className="text-red-400" />
                          <h3 className="text-white font-bold text-sm">Regras e Premiações</h3>
                        </div>
                        <div className="text-white mb-3 leading-relaxed">
                          <span className="text-red-400 font-bold">Regra:</span> Pontuação válida apenas para quem concluiu o treinamento.
                        </div>
                        <div className="text-gray-300 font-semibold mb-2">Premiações (Meta de R$ 7.000.000,00):</div>
                        <ul className="text-gray-400 space-y-2 pl-1 bg-[#1a1d24] p-3 rounded-lg border border-gray-800">
                          <li className="flex items-center gap-2"><span className="text-yellow-500 font-bold w-5">1º</span> Lugar: <strong className="text-white">R$ 1.200,00</strong></li>
                          <li className="flex items-center gap-2"><span className="text-gray-300 font-bold w-5">2º</span> Lugar: <strong className="text-white">R$ 900,00</strong></li>
                          <li className="flex items-center gap-2"><span className="text-amber-600 font-bold w-5">3º</span> Lugar: <strong className="text-white">R$ 600,00</strong></li>
                          <li className="pt-2 mt-1 border-t border-gray-700 leading-snug">A cada 50k de TPV: <strong className="text-green-400">R$ 120,00</strong></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </h2>
              </div>
              <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full" title="Vendedores Elegíveis / Total de Vendedores">
                {eligibleSellers.length} / {allSellers.length}
              </span>
            </div>

            <div className="p-4 flex-1 overflow-y-auto relative z-10 rounded-b-xl custom-scrollbar">
              {visibleRanking.length === 0 && !isCurrentSellerIneligible && (
                <div className="text-center text-sm text-gray-600 py-6">
                  Nenhum vendedor pontuando ainda.
                </div>
              )}

              <div className={`space-y-3 transition-all duration-300 ${isCurrentSellerIneligible ? 'blur-sm opacity-40 pointer-events-none select-none' : ''}`}>
                {visibleRanking.map((item) => {
                  if (item.isDots) {
                    return (
                      <div key="dots" className="flex justify-center py-1">
                        <span className="text-gray-600 tracking-widest leading-none">•••</span>
                      </div>
                    );
                  }

                  const realIndex = item.originalIndex;

                  let Icon = null;
                  let rankStyle = "text-gray-500";
                  let borderStyle = "border-gray-800/80";
                  
                  if (realIndex === 0) {
                    Icon = <Trophy size={16} className="text-yellow-500" />;
                    rankStyle = "text-yellow-500";
                    borderStyle = "border-yellow-900/30 bg-yellow-500/[0.02]";
                  } else if (realIndex === 1) {
                    Icon = <Medal size={16} className="text-gray-300" />;
                    rankStyle = "text-gray-300";
                    borderStyle = "border-gray-700/50 bg-gray-400/[0.02]";
                  } else if (realIndex === 2) {
                    Icon = <Award size={16} className="text-amber-600" />;
                    rankStyle = "text-amber-600";
                    borderStyle = "border-amber-900/30 bg-amber-600/[0.02]";
                  }

                  const isSelected = item.nome === selectedVendedor;

                  return (
                    <div 
                      key={item.nome} 
                      onClick={() => { if (isSelected) setShowDetails(!showDetails); }}
                      className={`flex items-center justify-between p-3 rounded-lg border ${borderStyle} bg-[#1a1d24] ${isSelected ? 'cursor-pointer hover:border-gray-500 hover:bg-[#22252c] transition-colors' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 text-center font-bold text-sm ${rankStyle}`}>
                          {Icon ? Icon : `${realIndex + 1}º`}
                        </div>
                        <div className="flex items-baseline gap-2">
                          <div className="text-white text-base font-bold">{item.nome}</div>
                          <span className="text-red-400 text-sm font-bold font-mono">{item.totalPoints} pts</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {isCurrentSellerIneligible && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center pb-20">
                    <div className="bg-[#0f1115]/90 p-5 rounded-xl border border-red-900/50 shadow-2xl">
                      <Lock className="mx-auto mb-3 text-red-500" size={28} />
                      <h3 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">Ranking Bloqueado</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">Você precisa concluir o treinamento obrigatório para visualizar o ranking e pontuar.</p>
                    </div>
                 </div>
              )}
            </div>
          </div>

          {/* Pontuação Detalhada (Individual) */}
          {selectedVendedor !== "Visão Geral (Gestão)" && showDetails && (
            <div className="flex flex-col bg-[#111318] rounded-xl border border-gray-800/60 shrink-0 shadow-lg">
              <div className="p-4 border-b border-gray-800/60 flex items-center justify-between bg-[#16181d] rounded-t-xl">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-red-500" />
                  <h2 className="text-sm font-bold text-gray-200">
                    Detalhamento de Pontos
                  </h2>
                </div>
              </div>
              
              {(() => {
                const sellerData = fullRankingWithIndex.find(r => r.nome === selectedVendedor);
                if (!sellerData) {
                  return (
                    <div className="p-6 text-sm text-gray-500 text-center">
                      Sem dados de pontuação válidos.
                    </div>
                  );
                }
                
                const { stats, totalPoints } = sellerData;
                
                return (
                  <div className="flex flex-col">
                    <div className="p-4 space-y-3 text-xs md:text-sm">
                      <div className={`flex justify-between items-center transition-opacity ${stats.subAprovados > 0 ? 'text-gray-300' : 'text-gray-500 opacity-40'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="truncate">Cadastros Aprovados</span>
                            <span className="bg-gray-800/80 text-gray-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">x{stats.cadastrosAprovados}</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vale 5 pts cada</span>
                        </div>
                        <span className={`font-mono font-bold ${stats.subAprovados > 0 ? 'text-white' : 'text-gray-500'}`}>{stats.subAprovados} pts</span>
                      </div>
                      
                      <div className={`flex justify-between items-center transition-opacity ${stats.subAtivados > 0 ? 'text-gray-300' : 'text-gray-500 opacity-40'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="truncate">Cadastros Ativados</span>
                            <span className="bg-gray-800/80 text-gray-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">x{stats.cadastrosAtivados}</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vale 10 pts cada</span>
                        </div>
                        <span className={`font-mono font-bold ${stats.subAtivados > 0 ? 'text-white' : 'text-gray-500'}`}>{stats.subAtivados} pts</span>
                      </div>
                      
                      <div className={`flex justify-between items-center transition-opacity ${stats.subCurvaA > 0 ? 'text-gray-300' : 'text-gray-500 opacity-40'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="truncate">Vendas Curva A</span>
                            <span className="bg-gray-800/80 text-gray-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">x{stats.vendasCurvaA}</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vale 1 pt cada</span>
                        </div>
                        <span className={`font-mono font-bold ${stats.subCurvaA > 0 ? 'text-white' : 'text-gray-500'}`}>{stats.subCurvaA} pts</span>
                      </div>
                      
                      <div className={`flex justify-between items-center transition-opacity ${stats.subCurvaBC > 0 ? 'text-gray-300' : 'text-gray-500 opacity-40'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="truncate">Vendas Curva B/C</span>
                            <span className="bg-gray-800/80 text-gray-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">x{stats.vendasCurvaBC}</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vale 5 pts cada</span>
                        </div>
                        <span className={`font-mono font-bold ${stats.subCurvaBC > 0 ? 'text-white' : 'text-gray-500'}`}>{stats.subCurvaBC} pts</span>
                      </div>
                      
                      <div className={`flex justify-between items-center transition-opacity ${stats.subBonusTPV > 0 ? 'text-gray-300' : 'text-gray-500 opacity-40'}`}>
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="truncate">Bônus Vol. (cada 10k)</span>
                            <span className="bg-gray-800/80 text-gray-400 text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">x{stats.fatorTPV}</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vale 1 pt cada</span>
                        </div>
                        <span className={`font-mono font-bold ${stats.subBonusTPV > 0 ? 'text-white' : 'text-gray-500'}`}>{stats.subBonusTPV} pts</span>
                      </div>
                    </div>
                      
                    <div className="p-4 bg-gradient-to-r from-red-500/10 to-transparent border-t border-red-500/20 flex justify-between items-center rounded-b-xl">
                      <span className="text-red-400 font-bold uppercase tracking-wide text-xs">Total Acumulado</span>
                      <span className="font-mono text-xl font-bold text-white drop-shadow-md">{totalPoints} <span className="text-sm text-gray-400 font-normal">pts</span></span>
                    </div>

                    {stats.temBonusFinanceiroExtra && (
                      <div className="mx-4 mb-4 bg-green-500/10 border border-green-500/20 rounded p-2 text-xs text-green-400 flex items-center gap-2 leading-tight">
                        <Gift size={16} className="shrink-0" />
                        <span>Bônus Acelerador (+ R$ 100) Desbloqueado! (TPV &gt; 100k)</span>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>

      </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col gap-6 relative">
          <div className="bg-[#14161b] border border-gray-800/60 rounded-xl p-8 relative overflow-hidden shadow-2xl">
            {/* Subtle glow background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-yellow-500/5 to-transparent opacity-50 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 relative z-10">
              <h2 className="text-xl font-bold flex items-center gap-3 text-white uppercase tracking-widest">
                <Trophy className="text-yellow-500" size={24} />
                Galeria de Troféus
              </h2>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-800"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-green-500 transition-all duration-1000 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                      strokeWidth="3"
                      strokeDasharray={`${(unlockedCount / ACHIEVEMENTS_LIST.length) * 100}, 100`}
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-green-500">
                    {Math.round((unlockedCount / ACHIEVEMENTS_LIST.length) * 100)}%
                  </span>
                </div>
                <div className="flex flex-col w-full sm:w-64">
                  <div className="text-sm text-gray-300 mb-2 font-medium text-right">
                    <span className="text-white font-bold">{unlockedCount}</span> de {ACHIEVEMENTS_LIST.length} troféus desbloqueados - {Math.round((unlockedCount / ACHIEVEMENTS_LIST.length) * 100)}%
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-visible border border-gray-700/50">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] rounded-full transition-all duration-1000 relative" 
                      style={{ width: `${(unlockedCount / ACHIEVEMENTS_LIST.length) * 100}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 relative z-10">
              {unlockedAchievements.map(ach => {
                const Icon = ach.icon;
                
                let tierStyles = {
                  bg: 'bg-[#16181d] opacity-40',
                  border: 'border-gray-800',
                  shadow: 'shadow-none',
                  iconBg: 'bg-[#111318]',
                  iconBorder: 'border-gray-800',
                  iconColor: 'text-gray-600',
                  iconGlow: ''
                };

                if (ach.isUnlocked) {
                  switch (ach.tier) {
                    case 'gold':
                      tierStyles = {
                        bg: 'bg-gradient-to-br from-[#FFD700]/15 to-transparent',
                        border: 'border-[#FFD700]',
                        shadow: 'shadow-[0_0_15px_rgba(255,215,0,0.2)]',
                        iconBg: 'bg-[#111318]',
                        iconBorder: 'border-[#FFD700]/40',
                        iconColor: 'text-[#FFD700]',
                        iconGlow: 'drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]'
                      };
                      break;
                    case 'silver':
                      tierStyles = {
                        bg: 'bg-gradient-to-br from-slate-300/10 to-transparent',
                        border: 'border-slate-300/80',
                        shadow: 'shadow-[0_0_15px_rgba(203,213,225,0.1)]',
                        iconBg: 'bg-[#111318]',
                        iconBorder: 'border-slate-300/40',
                        iconColor: 'text-slate-300',
                        iconGlow: 'drop-shadow-[0_0_8px_rgba(203,213,225,0.6)]'
                      };
                      break;
                    case 'bronze':
                    default:
                      tierStyles = {
                        bg: 'bg-gradient-to-br from-[#CD7F32]/15 to-transparent',
                        border: 'border-[#CD7F32]/80',
                        shadow: 'shadow-[0_0_15px_rgba(205,127,50,0.1)]',
                        iconBg: 'bg-[#111318]',
                        iconBorder: 'border-[#CD7F32]/40',
                        iconColor: 'text-[#CD7F32]',
                        iconGlow: 'drop-shadow-[0_0_8px_rgba(205,127,50,0.6)]'
                      };
                      break;
                  }
                }

                return (
                  <div 
                    key={ach.id} 
                    className={`relative p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${tierStyles.bg} ${tierStyles.border} ${tierStyles.shadow}`}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 border ${tierStyles.iconBg} ${tierStyles.iconBorder} ${tierStyles.iconColor}`}>
                      {ach.isUnlocked ? <Icon size={24} className={`${tierStyles.iconGlow}`} /> : <Lock size={20} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-bold text-xs md:text-sm mb-1 uppercase tracking-wider truncate ${ach.isUnlocked ? 'text-gray-200' : 'text-gray-500'}`}>
                        {ach.title}
                      </h4>
                      <p className={`text-[10px] md:text-xs leading-snug font-medium line-clamp-2 ${ach.isUnlocked ? 'text-gray-400' : 'text-gray-600'}`}>
                        {ach.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Floating Next Achievement Info */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <div className="bg-[#111318]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Lock size={18} className="text-gray-500" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Próximo Troféu Desbloqueável</div>
                <div className="text-sm font-bold text-gray-300">Continue vendendo para descobrir</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Info Premiações */}
      {/* Modal de Reanálise */}
      {reanaliseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#16181d] border border-gray-800 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between shrink-0">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Target size={18} className="text-red-500" />
                Reanálise de Crédito
              </h3>
              <button 
                onClick={() => setReanaliseModal(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl font-light leading-none px-2"
              >
                &times;
              </button>
            </div>
            
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto min-h-0 flex-1">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Nome do Cliente</label>
                <input 
                  type="text" 
                  value={reanaliseModal.card.Sacado} 
                  disabled 
                  className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-gray-500 px-3 py-2 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">CNPJ</label>
                <input 
                  type="text" 
                  value={reanaliseModal.card.DocSacado || 'N/A'} 
                  disabled 
                  className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-gray-500 px-3 py-2 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Situação</label>
                {reanaliseModal.type === 'assinatura' ? (
                  <select 
                    value={reanaliseForm.situacao}
                    onChange={(e) => setReanaliseForm({...reanaliseForm, situacao: e.target.value})}
                    className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-white px-3 py-2 focus:outline-none focus:border-red-500"
                  >
                    <option value="Aumento de Limite">Aumento de Limite</option>
                    <option value="Limite Excedente">Limite Excedente</option>
                  </select>
                ) : (
                  <input 
                    type="text" 
                    value={reanaliseForm.situacao} 
                    disabled 
                    className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-gray-500 px-3 py-2 cursor-not-allowed"
                  />
                )}
              </div>

              {reanaliseModal.type === 'assinatura' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Limite Atual</label>
                    <input 
                      type="number" 
                      value={reanaliseForm.limiteAtual}
                      onChange={(e) => setReanaliseForm({...reanaliseForm, limiteAtual: e.target.value})}
                      className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-white px-3 py-2 focus:outline-none focus:border-red-500"
                      placeholder="Ex: 50000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Saldo Devedor</label>
                    <input 
                      type="number" 
                      value={reanaliseForm.saldoDevedor}
                      onChange={(e) => setReanaliseForm({...reanaliseForm, saldoDevedor: e.target.value})}
                      className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-white px-3 py-2 focus:outline-none focus:border-red-500"
                      placeholder="Ex: 15000"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Valor {reanaliseModal.type === 'assinatura' ? 'Desejado' : 'Solicitado'}</label>
                <input 
                  type="number" 
                  value={reanaliseForm.valor}
                  onChange={(e) => setReanaliseForm({...reanaliseForm, valor: e.target.value})}
                  className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-white px-3 py-2 focus:outline-none focus:border-red-500"
                  placeholder="Ex: 60000"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Motivo</label>
                <textarea 
                  value={reanaliseForm.motivo}
                  onChange={(e) => setReanaliseForm({...reanaliseForm, motivo: e.target.value})}
                  className="w-full bg-[#1a1d24] border border-gray-700 rounded-md text-sm text-white px-3 py-2 focus:outline-none focus:border-red-500 min-h-[80px]"
                  placeholder="Descreva o motivo da reanálise..."
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-800 bg-[#111318] flex justify-end gap-3 shrink-0">
              <button 
                onClick={() => setReanaliseModal(null)}
                className="text-gray-400 hover:text-white text-xs font-bold px-4 py-2 rounded transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveReanalise}
                disabled={!isReanaliseFormValid}
                className={`bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2 rounded transition-colors flex items-center gap-2 ${!isReanaliseFormValid ? 'opacity-50 cursor-not-allowed bg-gray-700 hover:bg-gray-700' : ''}`}
              >
                Salvar e Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Reanálise Bloqueada */}
      {blockedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-[#16181d] border border-red-500/30 rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-red-500/10">
              <h3 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wide">
                <Info size={18} className="text-red-500" />
                Aviso: Reanálise Bloqueada
              </h3>
              <button 
                onClick={() => setBlockedMessage(null)}
                className="text-gray-400 hover:text-white transition-colors text-xl font-light leading-none"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 text-red-500 rounded-full flex items-center justify-center mx-auto">
                <Lock size={22} />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                {blockedMessage}
              </p>
            </div>
            
            <div className="p-4 border-t border-gray-800 bg-[#111318] flex justify-end">
              <button 
                onClick={() => setBlockedMessage(null)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2.5 rounded-md transition-all uppercase tracking-wider"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Upload */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#16181d] border border-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-white font-bold flex items-center gap-2">
                <UploadCloud size={18} className="text-red-500" />
                Upload de Nota Fiscal
              </h3>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl font-light leading-none"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-700/80 rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-500/50 hover:bg-[#1a1d24] transition-colors group">
                <UploadCloud className="text-gray-500 group-hover:text-red-400 mb-3 transition-colors" size={32} />
                <h4 className="text-sm font-semibold text-gray-300 group-hover:text-white mb-1 transition-colors">Selecionar arquivo</h4>
                <p className="text-xs text-gray-500 mb-4">Arraste e solte seu arquivo XML ou PDF aqui</p>
                <div className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded transition-colors inline-flex items-center gap-2">
                  <UploadCloud size={14} /> Procurar arquivos
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-800 bg-[#111318] flex justify-end">
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-white text-xs font-semibold px-4 py-2 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Info do Link */}
      {showLinkInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#16181d] border border-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <h3 className="text-white font-bold flex items-center gap-2">
                <LinkIcon size={18} className="text-red-500" />
                Informações do Link
              </h3>
              <button 
                onClick={() => setShowLinkInfo(false)}
                className="text-gray-400 hover:text-white transition-colors text-xl font-light leading-none"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-300 mb-4 leading-relaxed">
                Este é o link que você pode enviar para seus clientes.
              </div>
              <div className="bg-[#111318] border border-gray-800 rounded-lg p-3 overflow-hidden text-xs text-gray-400 font-mono break-all">
                {getSimulatedLink()}
              </div>
            </div>
            <div className="p-4 border-t border-gray-800 bg-[#111318] flex justify-end">
              <button 
                onClick={() => setShowLinkInfo(false)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2 rounded transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Calculadora de Leads */}
      {isCalculatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#16181d] border border-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between shrink-0">
              <h3 className="text-white font-bold flex items-center gap-2 text-sm sm:text-base">
                Calculadora de Leads Trimestral
              </h3>
              <button 
                onClick={() => {
                  setIsCalculatorModalOpen(false);
                  if (selectedVendedor !== "Visão Geral (Gestão)" && !usedCalculatorSellers.includes(selectedVendedor)) {
                    setUsedCalculatorSellers(prev => [...prev, selectedVendedor]);
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors text-2xl font-light leading-none px-2"
              >
                &times;
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row flex-1 overflow-y-auto min-h-0">
              {/* Left Column: Inputs */}
              <div className="flex-none md:flex-1 p-4 sm:p-8 border-b md:border-b-0 md:border-r border-gray-800 bg-[#1a1d24] flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Meta de Faturamento (R$)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">R$</span>
                      <input 
                        type="number" 
                        value={calcMetaFaturamento}
                        onChange={(e) => setCalcMetaFaturamento(e.target.value === '' ? '' : Number(e.target.value))}
                        className="w-full bg-[#111318] border border-gray-700 text-gray-200 text-lg rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        placeholder="Ex: 500000"
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-2 font-mono">
                      Formatado: <span className="text-gray-300 font-semibold">{formatBRL(Number(calcMetaFaturamento) || 0)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Results */}
              <div className="flex-none md:flex-1 p-4 sm:p-8 bg-[#111318] flex flex-col justify-center items-center relative overflow-hidden text-center">
                <Target size={180} className="absolute text-white/[0.02] pointer-events-none" />
                
                <div className="relative z-10 w-full flex flex-col gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Por Trimestre</h4>
                    <div className="text-7xl font-bold text-white mb-1 font-mono">
                      {volumeBuyersNecessarios}
                    </div>
                    <div className="text-lg text-gray-500 font-sans">
                      {volumeBuyersNecessarios === 1 ? 'Buyer' : 'Buyers'}
                    </div>
                  </div>
                  <div className="h-px bg-gray-800 w-2/3 mx-auto"></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Por Mês</h4>
                    <div className="text-5xl font-bold text-red-400 mb-1 font-mono">
                      {volumeBuyersMes}
                    </div>
                    <div className="text-base text-gray-500 font-sans">
                      {volumeBuyersMes === 1 ? 'Buyer' : 'Buyers'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-800 bg-[#16181d] flex justify-end shrink-0">
              <button 
                onClick={() => {
                  setIsCalculatorModalOpen(false);
                  if (selectedVendedor !== "Visão Geral (Gestão)" && !usedCalculatorSellers.includes(selectedVendedor)) {
                    setUsedCalculatorSellers(prev => [...prev, selectedVendedor]);
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-8 py-2.5 rounded transition-colors"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
      <BoletosModal 
        isOpen={boletosModal?.isOpen || false} 
        onClose={() => setBoletosModal(null)} 
        card={boletosModal?.card} 
        formatBRL={formatBRL} 
      />
    </div>
  );
}

// Funnel Column Component
function FunnelColumn({ 
  title, 
  data, 
  getStatusTag, 
  formatBRL,
  type,
  sacadoTotals,
  selectedVendedor,
  onReanalise,
  onOpenBoletos,
  getDaysDiff
}: { 
  title: string, 
  data: any[], 
  getStatusTag: (card: any, type?: 'analise' | 'assinatura' | 'faturado') => any, 
  formatBRL: (v: number) => string,
  type: 'analise' | 'assinatura' | 'faturado',
  sacadoTotals?: Record<string, number>,
  selectedVendedor?: string,
  onReanalise: (card: any, type: string) => void,
  onOpenBoletos?: (card: any) => void,
  getDaysDiff: (dateStr: string) => number
}) {
  return (
    <div className="bg-[#16181d] rounded-xl p-3 flex flex-col border border-gray-800/40 shadow-inner">
      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center justify-between">
        {title}
        <span className="bg-[#22262f] text-gray-400 text-[10px] px-2 py-0.5 rounded-full border border-gray-800">{data.length}</span>
      </h3>
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 pb-24 md:pb-4 custom-scrollbar">
        {data.length === 0 ? (
          <div className="text-center text-xs text-gray-600 py-4">Vazio</div>
        ) : (
          data.map((card, i) => {
            const daysDiff = getDaysDiff(card.DataOperacao);
            
            const isExpiradaCard = card.Fase.toLowerCase().includes('expirada') || (type === 'assinatura' && card.Fase.toLowerCase().includes('pendente') && daysDiff > 60);
            const isRecusadoCard = card.Fase.toLowerCase().includes('recusado');
            
            let canReanalise = false;
            let reanaliseType = null;
            let isBlocked = false;
            let blockedDays = 0;

            if (type === 'assinatura') {
                if (card.Fase.toLowerCase().includes('assinada')) {
                    canReanalise = true;
                    reanaliseType = 'assinatura';
                } else if (isExpiradaCard) {
                    canReanalise = true;
                    reanaliseType = 'assinatura-expirada';
                }
            } else if (type === 'analise' && isRecusadoCard) {
                canReanalise = true;
                const diasFaltantes = 90 - daysDiff;
                if (diasFaltantes > 0 && diasFaltantes <= 90) {
                    isBlocked = true;
                }
                reanaliseType = 'credito-recusado';
            }

            let cardClasses = card.Novo
              ? "bg-[#111c30] p-3.5 rounded-lg border border-blue-500/30 shadow-sm shadow-blue-500/5 hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all flex flex-col relative overflow-hidden"
              : "bg-slate-900 p-3.5 rounded-lg border border-slate-800 shadow-sm hover:border-slate-700 transition-all flex flex-col relative overflow-hidden";
            
            if (type === 'faturado') {
              cardClasses += " cursor-pointer hover:border-red-500/50";
            }

            return (
            <div 
              key={i} 
              className={cardClasses}
              onClick={() => {
                if (type === 'faturado' && onOpenBoletos) {
                  onOpenBoletos(card);
                }
              }}
            >
              <div className="flex justify-between items-start gap-2 mb-2">
                <div className="flex-1 min-w-0">
                  {(!selectedVendedor || selectedVendedor === "Visão Geral (Gestão)") && (
                    <div className="text-red-500 text-[10px] font-bold uppercase tracking-wider mb-1 truncate">{card.Vendedor}</div>
                  )}
                  <div className="text-gray-100 font-semibold text-sm leading-tight truncate">{card.Sacado}</div>
                  {card.DocSacado && (
                    <div className="text-slate-400 text-[10px] truncate">{card.DocSacado}</div>
                  )}
                </div>
                {canReanalise && (
                  <button 
                    onClick={() => onReanalise(card, reanaliseType as string)} 
                    className={`shrink-0 text-[10px] md:text-xs px-2 py-1.5 md:py-1 rounded border font-medium whitespace-nowrap transition-colors flex items-center justify-center ${
                      isBlocked
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                        : "bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20"
                    }`}
                  >
                    Reanálise
                  </button>
                )}
              </div>
              
              {type === 'analise' && (
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3 border-b border-gray-700/30 pb-2">
                  <span className="text-[10px] uppercase">Crédito Solicitado</span>
                  <span className="text-yellow-500 font-mono font-medium">{formatBRL(card.CreditoPedido)}</span>
                </div>
              )}
              {type === 'assinatura' && (
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3 border-b border-gray-700/30 pb-2">
                  <span className="text-[10px] uppercase">
                    {(card.Fase || '').toLowerCase().includes('assinada') ? 'Crédito Liberado' : 'Crédito Aprovado'}
                  </span>
                  <span className="text-blue-400 font-mono font-medium">{formatBRL(card.CreditoAceito)}</span>
                </div>
              )}
              {type === 'faturado' && (
                <>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                    <span className="text-[10px] uppercase">TPV</span>
                    <span className="text-green-500 font-mono font-medium">{formatBRL(card.TPV)}</span>
                  </div>
                  <div className="text-[10px] text-gray-400 mb-2 truncate" title={card.CategoriaProduto}>
                    {card.CategoriaProduto}
                  </div>
                  <div className="mt-3">
                    {(() => {
                      const total = card.CreditoAceito;
                      const usadoBruto = sacadoTotals ? (sacadoTotals[card.Sacado] || 0) : 0;
                      const usado = Math.min(usadoBruto, total);
                      const disponivel = Math.max(0, total - usado);
                      const percent = total > 0 ? (usado / total) * 100 : 0;
                      
                      return (
                        <>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[9px] text-gray-500 uppercase tracking-wider">Uso de Limite</span>
                            <span className="text-[9px] text-gray-400 font-medium">
                              <span className="text-white font-semibold">{formatBRL(usado)}</span> / {formatBRL(total)}
                            </span>
                          </div>
                          <div className="w-full bg-gray-800/60 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className="bg-blue-500 h-full rounded-full transition-all duration-500" 
                              style={{ width: `${Math.min(percent, 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between items-center mt-1.5 text-[9px] text-gray-500">
                            <span>Limite Disponível</span>
                            <span className="text-gray-300 font-medium font-mono">{formatBRL(disponivel)}</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </>
              )}
              
              <div className="flex flex-col gap-1.5 mt-3">
                {getStatusTag(card, type)}
              </div>
            </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function BoletosModal({
  isOpen,
  onClose,
  card,
  formatBRL,
}: {
  isOpen: boolean;
  onClose: () => void;
  card: any;
  formatBRL: (v: number) => string;
}) {
  const [selectedBoletos, setSelectedBoletos] = useState<number[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  if (!isOpen || !card) return null;

  const tpv = card.TPV;
  const prazoMedio = card.PrazoMedio || 30;
  const numParcelas = Math.max(1, Math.floor(prazoMedio / 30));
  const valorParcela = tpv / numParcelas;

  const dataOperacao = new Date(card.DataOperacao);
  let paidBoletos = 0;

  if (card.DataPago) {
    const payDate = new Date(card.DataPago);
    const diffMonths = (payDate.getFullYear() - dataOperacao.getFullYear()) * 12 + (payDate.getMonth() - dataOperacao.getMonth());
    paidBoletos = Math.max(0, diffMonths);
  }
  paidBoletos = Math.min(paidBoletos, numParcelas);

  const boletos = Array.from({ length: numParcelas }).map((_, i) => {
    const isPaid = i < paidBoletos;
    const dueDate = new Date(dataOperacao);
    dueDate.setMonth(dueDate.getMonth() + i + 1);
    
    return {
      id: i + 1,
      isPaid,
      dueDate: dueDate.toISOString().split('T')[0],
      value: valorParcela
    };
  });

  const pendingBoletos = boletos.filter(b => !b.isPaid);
  const allPendingSelected = pendingBoletos.length > 0 && selectedBoletos.length === pendingBoletos.length;

  const toggleSelectAll = () => {
    if (allPendingSelected) {
      setSelectedBoletos([]);
    } else {
      setSelectedBoletos(pendingBoletos.map(b => b.id));
    }
  };

  const toggleBoleto = (id: number) => {
    setSelectedBoletos(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const isBlocked = tpv > 50000;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-[#1a1d24] border border-gray-800 rounded-xl w-full max-w-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-start p-5 border-b border-gray-800">
          <div>
            <h2 className="text-lg font-bold text-gray-200">{card.Sacado}</h2>
            <p className="text-sm text-gray-500 font-mono mt-1">{card.DocSacado}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Valor Total</p>
            <p className="text-xl font-bold text-green-500 font-mono">{formatBRL(tpv)}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300 ml-4">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar">
          <div className="mb-4 text-sm text-gray-400">
            Prazo Médio: <span className="text-gray-200">{prazoMedio} dias</span> ({numParcelas} parcela{numParcelas > 1 ? 's' : ''})
          </div>

          <div className="space-y-2">
            {boletos.map((boleto) => (
              <div 
                key={boleto.id} 
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  boleto.isPaid 
                    ? 'border-gray-800 bg-[#16181d] opacity-60' 
                    : 'border-gray-700 bg-[#1f2229]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {!boleto.isPaid && (
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500/20"
                      checked={selectedBoletos.includes(boleto.id)}
                      onChange={() => toggleBoleto(boleto.id)}
                    />
                  )}
                  <div>
                    <p className={`text-sm font-medium ${boleto.isPaid ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                      Boleto {boleto.id}/{numParcelas}
                    </p>
                    <p className="text-xs text-gray-500 font-mono">Vencimento: {boleto.dueDate.split('-').reverse().join('/')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {boleto.isPaid && <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20 uppercase font-bold">Pago</span>}
                  <span className={`font-mono font-medium ${boleto.isPaid ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                    {formatBRL(boleto.value)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-800 flex items-center justify-between bg-[#16181d] rounded-b-xl">
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="selectAll"
              className="rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500/20 disabled:opacity-50"
              checked={allPendingSelected}
              onChange={toggleSelectAll}
              disabled={pendingBoletos.length === 0}
            />
            <label htmlFor="selectAll" className="text-sm text-gray-400 cursor-pointer select-none">Selecionar Todos</label>
          </div>
          
          <div className="relative group">
            <button
              onClick={() => {
                if (isBlocked) {
                  setShowNotification(true);
                  setTimeout(() => setShowNotification(false), 3000);
                }
              }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isBlocked 
                  ? 'bg-gray-800 text-gray-500 border border-gray-700 opacity-50 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              Baixar / Imprimir
            </button>
            {isBlocked && (
              <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#22262f] text-xs text-gray-300 rounded border border-gray-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center">
                Requer assinatura para adquirir o boleto
              </div>
            )}
            
            {showNotification && (
              <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-red-900/90 text-xs text-white font-medium rounded border border-red-500 shadow-2xl text-center flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Info size={14} /> Requer assinatura para adquirir o boleto
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
