---
title: Sensibilidade, especificidade e valores preditivos de testes diagnósticos
tags: [Estatística, MBE]
image: teste-rapido.jpg
---
O texto de hoje é para começarmos a falar sobre testes diagnósticos e probabilidade médica. Esse assunto está dentro da epidemiologia e tem uma importância prática gigantes na clínica o no auxílio de tomada de decisões do médico.

O objetivo do texto vai ser responder à pergunta: 

— "O teste diagnóstico para HIV tem uma sensibilidade de 95% e um especifidade de 98%. A prevalência de HIV nessa população é de 0,1%. Supondo que sorteamos um individuo ao acaso; qual a probabilidade de, tendo um teste positivo, ele realmente ter HIV?"

Na enquete que postei no Twitter, as respostas foram essas:

<figure>
  <img src="/assets/2020/mbe/enquete.png" alt="Enquete">
</figure>

Agora vamos ver se a maioria realmente acertou. Antes, precisamos entender alguns conceitos importantes para o raciocínio diagnóstico e para a interpretação de resultados de testes.

# Probabilidades

Quando um paciente nos refere uma queixa, nós colhemos um história clínica e fazemos um exame físico, procurando por sinais e sintomas. Por fim, utilizamos as informações disponíveis para criarmos hipóteses diagnósticas. Antes mesmo de pedirmos testes, já temos em mente algumas doenças ou condições prováveis que o paciente possar ter — ou deixar de ter.

## Probabilidade pré-teste

Mas, o quão é provável que o paciente tenha o diagnóstico que estamos pensando antes mesmo de pedirmos testes? Essa propabilidade é a que chamamos de probabilidade pré-teste (PPT).

A **probabilidade pré-teste** (PPT) se refere à probabilidade de um indivíduo ter a doença antes mesmo da realização do teste.[^Stern]

Em muitas situações, quando consideramos que o indivíduos é uma amostra da população, a probabilidade pré-teste é a própria prevalência da doença. Por exemplo, quando fazemos testes de rastreio populacional.

Em outras situações, a probabiliade pré-teste deve ser mais específica e envolve o quadro clínico do nosso paciente. Por exemplo, vamos imaginar um senhor que chega na emergência com dor restroesternal que irradia para a maníbula e sudorese. Além disso esse senhor fuma e possui hipertensão. Nesse caso, nosso paciente tem uma probabilidade muito mais alta que a população geral de ter um infarto.

Dessa forma, para calcularmos a probabilidade pré-teste de um paciente ter uma doença, precisamos antes conhecer a prevalência desta doença na população e também ter uma noção da magnitude que a história do paciente vai aumentar o diminuir a probabilidade da prevalência.

Se nossa probabilidade pré-teste for muito alta, poderíamos iniciar o tratamento da doença sem nem mesmo pedir mais testes confirmatórios. Contudo, se ela ainda não for alta o suficiente, é importante pedir testes para aumentar a precisão do diagnóstico.

## Probabilidade pós-teste

Então pedimos o nosso teste. Contudo, precisamos ter em mente que não existem testes perfeitos. Um teste para ser perfeito deve sempre ser positivo em pacientes que têm a doença e sempre ser negativo em pacientes que não tem a doença. Mas testes assim simplesmente não existem, sempre há uma margem de erro, por mínima que seja. Portanto, no mundo dos testes reais, alguns pacientes terão resultados falso-negativos e outros terão falso-positivos.[^Stern]

Os testes sempre possuem uma margem de erro. Considerando as possibilidades de erros dos testes, cada paciente que realiza um teste pode se enquadrar um dos conjuntos abaixo:

1. **Verdadeiro-positivo:** o teste dá positivo *e* o paciente tem a doença;
2. **Falso-positivo:** o teste dá positivo *e* o paciente não tem a doença;
3. **Verdadeiro-negativo:** o teste dá negativo *e* o paciente não tem a doença;
4. **Falso-negativo:** o teste dá negativo *e* o paciente tem a doença.

<figure>
  <img src="/assets/2020/mbe/testeeu.png" alt="Enquete">
</figure>

A probabilidade de o paciente se enquadrar e um destes quatro grupos é o que chamamos de probabilidade pós-teste. Normalmente estamos interessados em duas: a probabilidade de o resultado ser um verdadeiro-positivo (VP) e a probabilidade de ser um verdadeiro-negativo (VN).

Então, a **probabilidade pós-teste** se refere à probabilidade de um resultado ser verdadeiramente positivo ou negativo após o teste ter sido realizado. Ela serve para responder à pergunta: *"qual a probabilidade de um paciente com resultado positivo realmente ter a doença?*

O mais interessante é que a probabilidade pós-teste depende e pode ser alterada pelo valor da probabilidade pré-teste. Vamos continuar falando sobre a probabilidade pós-teste em *Valores preditivos*, mas antes vamos falar sobre a acurácia dos testes.

# Sensibilidade e especificidade

Vamos imaginar a seguinte situação: queremos testar a acurácia de um novo teste diagnóstico. Para isso, vamos selecionar 148 voluntários, dos quais 59 tem a doença e 89 não tem. Vamos submeter todos eles ao nosso novo teste e avaliar os resultados.[^Ferreira]

<table class="tg">
<thead>
  <tr>
    <th class="tg-sq0u" rowspan="2">Resultado</th>
    <th class="tg-sq0u" colspan="2">Doença</th>
    <th class="tg-sq0u" rowspan="2">Total</th>
  </tr>
  <tr>
    <td class="tg-lboi">Com</td>
    <td class="tg-lboi">Sem</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-3e88">Teste +</td>
    <td class="tg-lboi">39</td>
    <td class="tg-lboi">20</td>
    <td class="tg-lboi">59</td>
  </tr>
  <tr>
    <td class="tg-3e88">Teste -</td>
    <td class="tg-lboi">8</td>
    <td class="tg-lboi">81</td>
    <td class="tg-lboi">89</td>
  </tr>
  <tr>
    <td class="tg-mfxt">Total</td>
    <td class="tg-lboi">47</td>
    <td class="tg-lboi">101</td>
    <td class="tg-lboi">148</td>
  </tr>
</tbody>
</table>

**Sensibilidade** é a proporção de indivíduos que têm a doença e apresentam teste positivo (**proporção de VP**). Dessa forma:

Sensibilidade = nVP/Total de pacientes com a doença

No exemplo apresentado da Tabela, o número de verdadeiro-positivos (n = 39) dividido pelo total de indivíduos com a doença (n = 47) resulta em **83%**. 

A **especificidade** é a proporção de indivíduos que não têm a doença e apresentam teste negativo (**proporção de VN**). Dessa forma:

Especificidade = nVN/Total de pacientes com a doença

No exemplo, o número de verdadeiro-negativos (n = 81) dividido pelo total de indivíduos sem a doença (n = 101) resulta em
**80%**.

Observação: a proporção de **FN** pode ser obtida com *1 - especificidade*.

Portanto, concluímos que nosso teste tem:

1. Sensibilidade = 83%;
2. Especificidade = 80%.

A sensibilidade e a especificidade são ótimas para compararmos a acurácia de dois testes diferentes e avaliarmos qual o melhor. Contudo, devemos ter cuidado quando usamos esses valores para pautar nosso diagóstico clínico. 

Na clínica nós não aplicamos testes em pacientes que já sabemos ter a doença, nós aplicamos testes em pacientes que desejamos saber se têm a doença. O cenário para determinar a especificidade e a sensibilidade é completamente diferente de um cenário e diagnóstico clínico.

Quando um clínico tem um paciente cujo teste apresentou resultado positivo, a pergunta mais importante é a seguinte: **dado que o teste é positivo, qual é a probabilidade de o paciente ter a doença?**[^Ferreira]

A sensibilidade do teste não nos diz isso, mas sim a probabilidade de um resultado positivo, dado que o paciente tem a doença.[^Ferreira]



# Valores preditivos

O **valor preditivo positivo** (VPP) de um teste diagnóstico é a proporção de indivíduos com resultado positivo que realmete têm a doença (a proporção de verdadeiro positivos). Um VPP alto significa que o paciente com teste positivo **muito provavelmente realmente tem a doença**.[^Altman]

No exemplo anterior, podemos calcular o VPP com: 39/59 = 66% (número de pacientes com um resultado verdadeiro-positivo dividido pelo número de pacientes com resultado positivo -- VPP = VP/VP + FP).

O **valor preditivo negativo** (VPN) é o exato oposto. O VPN de um teste diagnóstico é a proporção de indivíduos com resultado negativo que realmente não têm a doença. Um VPN alto significa que o paciente com teste negativo **muito provavelmente não tem a doença**.[^Altman]

<figure>
  <img src="/assets/2020/mbe/vpp.png" alt="Enquete">
</figure>

No exemplo anterior, podemos calcular o VPN com: 81/89 = 91% (número de pacientes com um resultado verdadeiro-negativo dividido pelo número de pacientes com resultado negativo -- VPN = VN/VN + FN).

Dessa forma, concluímos que nosso teste tem:

1. VPP: 66%;
2. VPN: 91%.

O VPP e o VPN de um novo teste dependem da prevalência da doença na população; assim, eles serão diferentes em populações com maior ou menor prevalência da doença em comparação com a população na qual o teste foi descrito pela primeira vez.

Se a prevalência da doença for alta em uma determinada população, o VPP aumenta e o VPN diminui. Com muita gente doente, é mais provável que realizando um teste num indívidio e o resultado for positivo, ele realmente tenha a doença.

Já se a prevalência for muito baixa -- doença muito rara --, é mais provável que um resultado negativo realmente signifique a ausência de doença e menos improvável que um teste positivo signifique a presença de doença. Mesmo que o teste seja muito senvível e muito específico, como pouquíssimos indivíduos têm a doença, é muito mais provável que estaremos testando indivíduos sem a doença e dando falso-positivos.

<!-- O VPP e o VPN também são indicadores importantes
quando se avalia a população geral. Um teste de
rastreamento com alta sensibilidade e especificidade pode
ter VPP baixo se a prevalência da doença for baixa nessa
população. Por exemplo, quando rastreamos a presença
de câncer em adultos assintomáticos, se o VPN do teste
for alto, resultados negativos são úteis para descartar
a presença da doença; no entanto, se o VPP for baixo,
um resultado positivo tem maior probabilidade de ser
um falso positivo.[^Patino] -->


Portanto, valores preditivos não são características fixas do teste e não podem ser generalizados para populações com diferentes prevalências da doença.[^Altman]

Resumindo: tanto o VPP como o VPN vão nos dizer a proporção de diagnósticos corretos de cada teste para uma dada prevalência, seja o diagnóstico de uma doença ou sua exclusão.

Uma forma de calcular o VPP e o VPN para qualquer prevalência é a seguinte:[^Altman]

<figure>
  <img src="/assets/2020/mbe/vpp-e-vpn.png" alt="VPP e VPN">
</figure>

<figure>
  <img src="/assets/2020/mbe/Twitter-card%202-1.png" alt="VPP e VPN">
</figure>




<!-- 
# Razões de verossimilhança

As razões de verossimilhança (RV) combinam sensibilidade e especificidade para quantificar o quão útil um novo teste diagnóstico é para mudar (aumentar ou diminuir) a probabilidade de ter uma doença em comparação com a prevalência dessa doença (probabilidade pré-teste) na população estudada.

A **RV+** é a probabilidade de um resultado positivo em pacientes com a doença dividida pela probabilidade de um resultado positivo em pacientes sem a doença. Em outras palavras, **é a taxa de VP dividida pela taxa de FP**.

A **RV−** é a probabilidade de um resultado negativo em pacientes com a doença dividida pela probabilidade de um resultado negativo em pacientes sem a doença. Em outras palavras, **é a taxa de FN divida pela taxa de VN**

O valor da RV+ pode variar de 1 ao infinito. **Uma RV+ igual a 1** indica que a probabilidade de resultado positivo do teste é a mesma para pacientes com e sem a doença; portanto, o **teste é inútil**. Quanto maior que 1 for a RV+, mais provável que o teste positivo corrobore para a presença da doença.

A RV− varia de 1 a 0, e **quanto mais próxima de 0** a RV for, **menor será a probabilidade de doença** na presença de resultado negativo do teste. -->


# O teorema de Bayes

A base da estatística Bayesiana é o teorema de Bayes. Ele serve para descrever a probabilidade de um evento ocorrer baseado no conhecimento das condições prévias associadas a esse evento.[^Hackenberger]

O melhor exemplo para entender o teorema de Bayes são os testes diagnósticos.[^Hackenberger]

Para calcularmos a probailidade de um paciente com um teste resultando positivo realmente ter a doença, precisamos saber de duas coisas:[^Hackenberger]

1. Sensibilidade do teste;
2. Especificidade do teste;
2. Probabilidade pré-teste .

Por exemplo: se sabemos que a acurácia de um teste é de 99% e que a prevalência da doença é de 1 caso para cada 10.000 pessoas, podemos determinar a probabilidade de um teste positivo realmente ser verdadeiro-positivo.

Seja um teste de drogas 99% sensível e 99% específico. Isto é, o teste produzirá 99% de resultados verdadeiros positivos para usuários de drogas e 99% de resultados verdadeiros negativos para não-usuários de drogas. Suponha que 0,5% das pessoas são usuárias de drogas. Se um indivíduo selecionado aleatoriamente testar positivo, qual a probabilidade de ele ser usuário de drogas? Isto é, qual a probabilidade de não se cometer um falso positivo?[20]

# Referências

[^Stern]: Stern SDC, Cifu AS, Altkorn D. Symptom to Diagnosis: An Evidence-Based Guide.; 2015.

[^Hackenberger]: Hackenberger BK. Bayes or not Bayes, is this the question?. Croat Med J. 2019;60(1):50-52. doi:10.3325/cmj.2019.60.50

[^Altman]: Altman DG, Bland JM. Statistics Notes: Diagnostic tests 2: predictive values. BMJ. 1994;309(6947):102-102. doi:10.1136/bmj.309.6947.

[^Ferreira]: Ferreira JC, Patino CM, Ferreira JC, Patino CM. Understanding diagnostic tests. Part 1. Jornal Brasileiro de Pneumologia. 2017;43(5):330-330. doi:10.1590/s1806-37562017000000330

[^Ferreira3]: Ferreira JC, Patino CM, Ferreira JC, Patino CM. Understanding diagnostic tests. Part 3. Jornal Brasileiro de Pneumologia. 2018;44(1):4-4. doi:10.1590/s1806-37562018000000017

[^Patino]: Patino CM, Ferreira JC, Patino CM, Ferreira JC. Understanding diagnostic tests. Part 2. Jornal Brasileiro de Pneumologia. 2017;43(6):408-408. doi:10.1590/s1806-37562017000000424


