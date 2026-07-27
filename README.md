<div align="center">

# 🚗 AutoMax | Rezultz Gamification

### *Dashboard Conceitual & Engine de Gamificação B2B para alavancagem de Inside Sales, aceleração de curva de produtos e concessão de crédito inteligente.*

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[Visão Geral](#-visão-geral-do-projeto) • [Objetivos](#-objetivos-de-negócio-kpis) • [Funcionalidades](#%EF%B8%8F-funcionalidades-do-dashboard) • [Stack](#-stack-tecnológica) • [Instalação](#-como-executar-o-projeto-localmente) • [Estrutura](#-estrutura-de-arquivos)

</div>

---

## 📌 Visão Geral do Projeto

A **AutoMax** é uma indústria brasileira de autopeças (fundada em 1982 e sediada em Caxias do Sul/RS) que combina a fabricação de componentes de suspensão pesada com a distribuição de mais de 15.000 SKUs.

Este repositório contém a aplicação **AutoMaxPay (Powered by Rezultz)**, um Dashboard analítico e gamificado desenvolvido em Next.js (App Router) para resolver as três dores centrais do time de Vendas Internas (*Inside Sales*):

* 🔴 **Baixa Proatividade:** Vendedores focados apenas em atendimento/pedidos passivos.
* 🟡 **Mix de Produtos Pobre:** Acúmulo de estoque parado nas Curvas B e C.
* 🔵 **Falta de Visibilidade:** Falta de acompanhamento de performance e métricas em tempo real.

---

## 🎯 Objetivos de Negócio (KPIs)

* **Aumento de Faturamento:** $+15\%$ no faturamento bruto no 1º trimestre de uso.
* **Giro de Estoque Parado:** $+20\%$ no giro de SKUs de Curvas B e C.
* **Meta Global de TPV:** $\text{R\$ } 7.000.000,00/\text{mês}$ via plataforma.
* **ROI Projetado:** $15,27\times$ sobre o programa de incentivo.

---

## ⚙️ Funcionalidades do Dashboard

### 1. Esteira Digital de Vendas *(Funil Estilo Kanban)*
Visualização em tempo real das etapas transacionais dos compradores (*Buyers*):
* **Análise de Crédito:** Controle de pedidos com tags de status (*Pendente*, *Recusado*) e régua de bloqueio para reanálise (90 dias).
* **Assinatura de Convênio:** Acompanhamento de limite liberado vs. pendente e alertas para contratos expirados ($>60$ dias).
* **Faturamento:** Gestão do TPV acumulado, liquidação de parcelas/boletos e monitoramento de limite disponível.

### 2. Motor de Gamificação & Conquistas
* **Ranking Geral de Vendedores:** Algoritmo dinâmico de pontuação baseado no modelo *Behavior-first*:
  * 🔹 **Cadastro Aprovado:** 5 pontos
  * 🔹 **Cadastro Ativado (Convênio Assinado):** 10 pontos
  * 🔹 **Vendas Curva A:** 1 ponto/pedido
  * 🔹 **Vendas Curvas B e C:** 5 pontos/pedido
  * 🔹 **Bônus Volume TPV:** 1 ponto a cada R$ 10.000,00 faturados
* **Galeria de Troféus:** 22 conquistas desbloqueáveis (*Bronze, Silver e Gold*) inspiradas no ecossistema de games.
* **Trava de Treinamento Opcional:** Bloqueio de pontuação e acesso ao ranking para consultores sem treinamento obrigatório concluído.

### 3. Ferramentas Integradas
* 🧮 **Calculadora de Leads Trimestral:** Estimador preditivo que converte metas financeiras na quantidade exata de novos *Buyers* necessários.
* 💳 **Simulador de Boletos e Parcelamento:** Desmembramento de compras com aviso de assinatura obrigatória para transações acima de R$ 50.000,00.
* 🔗 **Links Individuais de Indicação:** Geração de links parametrizados para auto-cadastro de compradores sem fricção.
* 📑 **Modal para Upload de XML/Nota Fiscal:** Módulo para input rápido de vendas e atualização automática de saldo.

---

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia | Uso |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | Arquitetura principal e renderização server/client |
| **UI Core** | React 19 | Biblioteca base de interfaces |
| **Styling** | Tailwind CSS v4 | Estilização utilitária e design system |
| **Iconografia** | Lucide React | Ícones vetoriais modernos |
| **Animações** | Motion (Framer Motion) | Microinterações e animações de UI |
| **Linguagem** | TypeScript | Tipagem estática e segurança do código |
| **Data Engine** | Python 3.x (`parse_data.py`) | Script de pré-processamento de bases tabulares |

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* **Node.js:** `v18.x` ou superior
* **Gerenciador de Pacotes:** `npm`, `yarn` ou `pnpm`

### Passo a Passo

1. **Clonar o Repositório**
   ```bash
   git clone [https://github.com/Pedro1605M/Projeto-Automax.git](https://github.com/Pedro1605M/Projeto-Automax.git)
   cd Projeto-Automax
