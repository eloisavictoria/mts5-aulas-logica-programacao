---
name: avaliar-requisito-teste
description: "Use when the user wants to evaluate a requirement or problem and propose test scenarios using one of these techniques: análise do valor limite, partição de equivalência, or test charter. Also use this skill to convert the scenarios into a clear, automatable list and offer export to .md or .xlsx."
---

# Avaliar Requisito ou Problema para Teste

## Objetivo

Analisar um requisito, regra de negócio ou problema e propor cenários de teste com base em uma técnica específica, de forma clara, objetiva e automatizável.

## Fluxo obrigatório

### 1. Iniciar com checklist de trabalho

Antes de qualquer análise, crie uma lista de tarefas (todo list) para deixar explícito o estado atual da execução.

Exemplo de estrutura:

- [ ] Entender o requisito ou problema
- [ ] Escolher a técnica de teste
- [ ] Definir os cenários relevantes
- [ ] Validar se os cenários são claros e automatizáveis
- [ ] Perguntar se o usuário deseja ajustes
- [ ] Exportar os cenários, se solicitado

### 2. Entender o requisito

Pergunte ao usuário:

- Qual é o requisito, regra de negócio ou problema a ser analisado?
- Qual é o comportamento esperado?
- Há restrições, limites, regras de validação ou exceções?
- O objetivo é validar uma regra, uma funcionalidade ou um fluxo completo?

Se o requisito estiver incompleto, peça os detalhes faltantes antes de continuar.

### 3. Perguntar qual técnica será usada

Sempre pergunte qual técnica o usuário deseja executar. As opções são:

- Análise do valor limite
- Partição de equivalência
- Test Charter

Se o usuário não escolher, sugira a técnica mais adequada com base no tipo de regra:

- Se o requisito envolve limites, faixas, bordas ou regras de validação: usar análise do valor limite.
- Se o requisito tem um conjunto grande de entradas e é possível agrupar por comportamento semelhante: usar partição de equivalência.
- Se o requisito é exploratório, pouco definido ou precisa de investigação estratégica: usar Test Charter.

### 4. Consultar a técnica selecionada

Antes de definir os cenários, leia e aplique os detalhes de cada técnica nos arquivos da pasta de técnicas de teste.

Use a técnica como guia para decidir:

- quais valores devem ser testados
- quais entradas são válidas ou inválidas
- quais casos representam bordas, faixas ou riscos
- quais cenários são importantes para descobrir defeitos e comportamentos inesperados

### 5. Gerar cenários de teste

Crie uma lista de cenários de teste ou casos de teste com clareza suficiente para automatização posterior.

Para cada cenário, descreva:

- ID do cenário
- Objetivo
- Entrada ou contexto
- Condição/ação
- Resultado esperado
- Justificativa da escolha do cenário
- Prioridade (alta, média, baixa)

### 6. Validar qualidade do conjunto

Antes de encerrar a análise, verifique se os cenários:

- Cobrem os pontos principais do requisito
- Consideram valores válidos e inválidos
- Incluem casos de borda, se aplicável
- São claros o suficiente para automatização
- Não contêm cenários redundantes ou pouco relevantes

### 7. Perguntar se há ajustes

Após cada execução, pergunte ao usuário se deseja alguma alteração, como:

- remover um cenário que não faz sentido
- adicionar mais cenários importantes
- focar em uma parte específica do requisito
- mudar a técnica escolhida
- priorizar cenários por risco

### 8. Oferecer exportação

Após a aprovação final, ofereça uma opção para exportar os cenários para:

- arquivo .md
- arquivo .xlsx

Se o usuário solicitar, gere a estrutura em formato de documentação ou tabela tabular pronta para uso.

## Regras de decisão por técnica

### Análise do valor limite

Use quando o requisito envolve:

- faixas mínimas e máximas
- regras de validação em bordas
- valores imediatamente antes e depois do limite

Exemplo de foco:

- valor abaixo do limite
- valor no limite
- valor dentro do intervalo
- valor acima do limite

### Partição de equivalência

Use quando o requisito envolve:

- muitas entradas possíveis
- possibilidade de agrupar valores semelhantes
- necessidade de reduzir a quantidade de testes sem perder qualidade

Exemplo de foco:

- classes válidas
- classes inválidas
- pelo menos um exemplo representativo de cada classe

### Test Charter

Use quando o requisito for:

- exploratório
- pouco definido
- aberto a descobertas de falhas e riscos
- mais orientado por objetivos e investigação do que por passos rígidos

Exemplo de foco:

- missão de teste
- área de exploração
- risco ou comportamento a investigar
- defeitos ou comportamentos inesperados a descobrir

## Formato de saída esperado

O resultado final deve ser uma lista de cenários de teste em linguagem clara, com estrutura fácil de automatizar depois.

Modelo sugerido:

1. Cenário 01 — Nome do cenário
   - Objetivo: ...
   - Entrada: ...
   - Ação: ...
   - Resultado esperado: ...
   - Justificativa: ...
   - Prioridade: ...

2. Cenário 02 — Nome do cenário
   - Objetivo: ...
   - Entrada: ...
   - Ação: ...
   - Resultado esperado: ...
   - Justificativa: ...
   - Prioridade: ...

## Critérios de qualidade

A análise só pode ser considerada concluída quando:

- o requisito foi entendido
- a técnica foi escolhida explicitamente pelo usuário ou recomendada logicamente
- os cenários refletem a técnica aplicada
- os cenários são claros e automatizáveis
- o usuário teve a chance de pedir ajustes
- a exportação foi oferecida, se necessário

## Mensagem final recomendada

Ao finalizar, diga ao usuário:

- quais técnicas foram consideradas
- qual técnica foi escolhida e por quê
- a lista de cenários gerados
- que ele pode ajustar, remover ou adicionar cenários
- que pode exportar os resultados para .md ou .xlsx
