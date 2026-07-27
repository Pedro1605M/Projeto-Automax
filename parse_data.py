import json

raw_data = """Maria Silva	Tech Corp	18000	2026-06-15		30	Curva A	3 - Faturado	40000
Douglas Santos	Global Ind	22000	2026-05-20	2026-08-20	120	Curva B	3 - Faturado	50000
Paulo Henrique	Mega Store	14500	2026-07-01	2026-09-01	90	Curva C	3 - Faturado	30000
Lucas Souza	Super Varejo	31000	2026-04-10		60	Curva A	1 - Análise de Crédito (Pendente)	
João Silva	Tech Corp	15000	2026-06-01	2026-07-01	30	Curva B	3 - Faturado	40000
Maria Souza	Global Ind	25000	2026-06-05	2026-07-05	90	Curva C	3 - Faturado	50000
João Silva	Mega Store	12000	2026-05-10	2026-06-10	30	Curva A	3 - Faturado	30000
Maria Souza	Distribuidora XYZ	42000	2026-07-08		90	Curva C	1 - Análise de Crédito (Pendente)	
João Silva	Comercial Silva	10000	2026-07-01		60	Curva A	1 - Análise de Crédito (Recusado)	
Maria Souza	Atacadão do Povo	15000	2026-07-20		30	Curva B	1 - Análise de Crédito (Recusado)	
Carlos Lima	Logística Brasil	20000	2026-07-25		120	Curva C	1 - Análise de Crédito (Pendente)	
Ana Paula	Indústria Moderna	25000	2026-08-01		90	Curva A	2 - Assinatura (Assinada)	30000
Pedro Alves	Serviços Rápidos	30000	2026-08-05		60	Curva B	2 - Assinatura (Pendente)	35000
Lucas Souza	Distribuidora Central	35000	2026-08-10	2026-10-10	90	Curva C	3 - Faturado	40000
Douglas Santos	Varejo Mais	40000	2026-08-15		60	Curva A	2 - Assinatura (Assinada)	45000
Paulo Henrique	Tech Solutions BR	45000	2026-08-20		120	Curva B	1 - Análise de Crédito (Pendente)	
Maria Silva	Construtora Nova Era	50000	2026-08-25		60	Curva C	1 - Análise de Crédito (Pendente)	
João Silva	Alimentos Saborosos	55000	2026-08-30		120	Curva A	2 - Assinatura (Assinada)	60000
Maria Silva	Nova Empresa Alpha	20000	2026-09-01		60	Curva A	2 - Assinatura (Expirada)	60000
Douglas Santos	Beta Comércio	30000	2026-09-05	2026-10-05	60	Curva B	3 - Faturado	80000
Paulo Henrique	Gama Serviços	15000	2026-09-10		90	Curva C	1 - Análise de Crédito (Pendente)	
Lucas Souza	Delta Indústria	45000	2026-09-15		120	Curva A	1 - Análise de Crédito (Recusado)	
João Silva	Epsilon Logística	25000	2026-09-20		90	Curva B	2 - Assinatura (Pendente)	45000
Maria Souza	Zeta Tecnologia	50000	2026-09-25	2026-10-25	30	Curva C	3 - Faturado	100000
Carlos Lima	Eta Distribuidora	35000	2026-10-01		120	Curva A	2 - Assinatura (Assinada)	50000
Ana Paula	Theta Varejo	18000	2026-10-05		120	Curva C	2 - Assinatura (Expirada)	75000
Pedro Alves	Iota Construtora	40000	2026-10-10	2026-11-10	120	Curva A	3 - Faturado	80000
Lucas Souza	Distribuidora Central	5000	2026-11-01	2026-12-01	90	Curva C	3 - Faturado	40000
Douglas Santos	Beta Comércio	40000	2026-11-10	2026-12-10	90	Curva B	3 - Faturado	80000
João Silva	Comércio SA	10000	2026-04-10	2026-08-10	120	Curva B	3 - Faturado	10000
João Silva	Comércio SA	15000	2026-05-05		120	Curva B	2 - Assinatura (Assinada)	10000
João Silva	Supermercados Beta	70000	2026-07-21		120	Curva A	3 - Faturado	70000
"""

docs = {
    "Tech Corp": "33.171.262/0001-78",
    "Global Ind": "74.797.663/0001-15",
    "Mega Store": "18.883.688/0001-60",
    "Super Varejo": "74.732.084/0001-94",
    "Distribuidora XYZ": "89.703.929/0001-90",
    "Comercial Silva": "86.919.248/0001-76",
    "Atacadão do Povo": "93.138.873/0001-46",
    "Logística Brasil": "90.097.474/0001-96",
    "Indústria Moderna": "15.316.824/0001-42",
    "Serviços Rápidos": "38.215.400/0001-97",
    "Distribuidora Central": "14.897.704/0001-13",
    "Varejo Mais": "73.180.013/0001-63",
    "Tech Solutions BR": "79.560.490/0001-30",
    "Construtora Nova Era": "31.446.919/0001-37",
    "Alimentos Saborosos": "12.345.678/0001-90",
    "Nova Empresa Alpha": "95.284.038/0001-40",
    "Beta Comércio": "71.672.375/0001-46",
    "Gama Serviços": "42.389.694/0001-40",
    "Delta Indústria": "87.655.886/0001-90",
    "Epsilon Logística": "80.696.366/0001-86",
    "Zeta Tecnologia": "98.745.996/0001-69",
    "Eta Distribuidora": "92.141.741/0001-00",
    "Theta Varejo": "08.436.814/0001-85",
    "Iota Construtora": "50.436.280/0001-53",
    "Comércio SA": "63.352.656/0001-93",
    "Supermercados Beta": "34.999.361/0001-05"
}

treinamento = {
    "Maria Silva": True,
    "Douglas Santos": True,
    "Paulo Henrique": False,
    "Lucas Souza": True,
    "João Silva": False,
    "Maria Souza": True,
    "Carlos Lima": True,
    "Ana Paula": True,
    "Pedro Alves": True,
}

lines = raw_data.strip().split('\n')
out = []
faturados_para_assinatura = []
for line in lines:
    parts = line.split('\t')
    vendedor = parts[0]
    sacado = parts[1]
    tpv = int(parts[2])
    data_operacao = parts[3]
    data_pago = parts[4] if parts[4] else None
    prazo_medio = int(parts[5])
    categoria = parts[6]
    fase = parts[7]
    credito_aprovado = int(parts[8]) if parts[8] else 0
    credito_pedido = credito_aprovado if credito_aprovado > 0 else tpv # rough estimate
    
    doc = docs.get(sacado, "")
    treinado = treinamento.get(vendedor, False)
    
    obj = {
        "Vendedor": vendedor,
        "Treinamento": treinado,
        "Sacado": sacado,
        "DocSacado": doc,
        "TPV": tpv,
        "CreditoPedido": credito_pedido,
        "CreditoAceito": credito_aprovado,
        "CategoriaProduto": categoria,
        "DataOperacao": data_operacao,
        "DataAnterior": "2025-01-01",
        "Fase": fase,
        "PrazoMedio": prazo_medio,
    }
    if data_pago:
        obj["DataPago"] = data_pago
        
    out.append(obj)

    # Se for Faturado, criamos um registro duplicado em Assinatura, mas talvez com TPV 0, 
    # ou apenas para marcar a presenca do Convenio assinado.
    if "Faturado" in fase:
        assin_obj = obj.copy()
        assin_obj["Fase"] = "2 - Assinatura (Assinada)"
        assin_obj["TPV"] = 0 # para não duplicar TPV no ranking caso fizessem soma (embora ranking so pegue Fase 4)
        faturados_para_assinatura.append(assin_obj)

# Add os faturados na assinatura apenas se esse sacado ainda nao tiver uma assinatura ativa (nao duplicar mto)
# Actually, the requirement said "lembre-se q um sacado q está no faturado, ele fica no assinatura com convenio também e com o card assinado"
# So let's just append them.
out.extend(faturados_para_assinatura)

js_array = "const INITIAL_DATA = [\n"
for o in out:
    # format as JS object string
    props = []
    for k, v in o.items():
        if isinstance(v, str):
            props.append(f'{k}: "{v}"')
        elif isinstance(v, bool):
            props.append(f'{k}: {"true" if v else "false"}')
        else:
            props.append(f'{k}: {v}')
    js_array += "  { " + ", ".join(props) + " },\n"
js_array += "];"

with open("new_data.js", "w") as f:
    f.write(js_array)

