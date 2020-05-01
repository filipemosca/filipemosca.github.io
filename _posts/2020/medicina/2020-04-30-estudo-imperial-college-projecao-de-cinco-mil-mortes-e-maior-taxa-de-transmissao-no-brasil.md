---
title: 'Relatório projeta 5 mil mortes para essa semana e a maior taxa de transmissão no Brasil'
category: medicina
tags: [coronavirus, covid-19, estatistica, epidemiologia]
---

Dia 28 deste mês de abril, o **Imperial College London** disponibilizou online um relatório com previsões de mortalidade por COVID-19 para a próxima semana[^imp].

O relatório está repercutindo bastante já que o Brasil de certa forma se destacou. Muito está se comentando sobre a previsão de 5.000 novos mortos na próxima semana e também sobre sermos o país com a maior taxa de transmissão.

Primeiro vou explicar alguns conceitos para depois detalhar melhor os achados da projeção.

## Índices de reprodução

Para entender esse estudo, primeiros precisamos saber o que é o índice de reprodução, ou *R*. Vou aproveitar essa postagem pra detalhar dois conceitos importantes da epidemiologia de doenças infeciosas:

**O número básico de reprodução** (*R<sub>0</sub>*) é o número esperado de novas pessoas infectadas a partir de um único indivíduo infectado, durante todo o seu período contagioso, quando introduzido numa população totalmente suscetível.[^Held] Simplificando um pouco: significa pra quantas pessoas, em média, um infectado vai transmitir a doença.

Por definição, a população não pode ter imunidade ao agente e nem receber medidas protetivas como vacinas ou distanciamento social. Ou seja, *R<sub>0</sub>* é a taxa de contágio numa situação natural, sem que hajam intervenções. Para o Novo coronavirus (SARS-CoV-2), o *R<sub>0</sub>* está sendo estimado entre 1,4 e 3,9.[^Riou]

**O número efetivo de reprodução** (*R<sub>e</sub>*) segue o mesmo princípio do *R<sub>0</sub>*, só que desta vez levando em conta as medidas de intervenção.[^Held] Ou seja, o *R<sub>e</sub>* representa a transmissibilidade nas condições atuais de uma população que está tentando conter a doença. Dessa forma, o *R<sub>e</sub>* varia ao longo do tempo e no decorrer de que medidas diferentes forem sendo impostas, como afrouxar ou restringir o distanciamento social.

Nesse relatório do Imperial College, eles usaram a notação *R<sub>t</sub>* para simbolizar o índice efetivo de reprodução.

## Os resultados da projeção

Primeiro, o relatório traz um mapa ilustrando quais países ainda estão em crescimento, estabilização ou queda do número de novos casos.

<figure>
    <img src="/assets/2020/medicina/covid19/imp-college-1.jpeg" alt="Mapa">
    <figcaption >Estimativas de transmissibilidade em países com transmissão ativa para a semana que termina em 26-04-2020. Com base nas melhores estimativas de transmissibilidade, a epidemia de COVID-19 provavelmente está diminuindo em 4 países (mostrados em verde), provavelmente estabilizando ou crescendo lentamente em 23 países (mostrada em verde claro) e provavelmente crescendo em 9 países (mostrados em laranja escuro). A tendência não é clara em 12 países (mostrada em laranja claro).</figcaption>
</figure>

Podemos perceber que o Brasil ainda está no crescimento acelerado, contrariando falas de algumas figuras públicas dizendo que já estávamos em desaceleração.

Em seguida, o relatório faz uma projeção da curva curva de mortalidade. Abaixo eu coloquei apenas as projeções para os países da América do Sul. Essas projeções foram feitas usando três modelos matemáticos diferentes e depois traçando uma média. Para saber mais sobre a metodologia utilizada, é melhor ler o relatório na íntegra.

<figure>
    <img src="/assets/2020/medicina/covid19/forecast.jpeg" alt="Curvas de mortalidade">
    <figcaption>Notificações de mortes diárias e previsões atuais com base no modelo para os países da América do Sul. A incidência observada de mortes é representada pelos pontos pretos e as previsões para a próxima semana são mostradas em vermelho. A linha vermelha representa a mediana da projeção. A linha tracejada vertical mostra o início da semana (segunda-feira).</figcaption>
</figure>

### Taxa de transmissão

E agora, a parte mais interessante, a tabela trazendo os dados calculados para cada país. Tirei dois *prints*, o primeiro mostra os países ordenados da maior taxa de transmissão, a do Brasil, até a menor.

<figure>
    <img src="/assets/2020/medicina/covid19/tab-rt.jpeg" alt="Tabela 1">
    <figcaption>Essa é a tabela listando os países por: mortes notificadas na semana passada (1ª coluna), previsão de mortes para a próxima semana (2ª coluna) e o <em>R<sub>t</sub></em> (3ª coluna). Aqui eu ordenei a lista em valores decrescentes de <em>R<sub>t</sub></em>, ou seja, o Brasil é o país com o maior índice de transmissão dentre os analisados.</figcaption>
</figure>

O que me chamou mais atenção foram os números da Suécia, país que [não vem adotando medidas de isolamento social](https://edition.cnn.com/2020/04/10/europe/sweden-lockdown-turmp-intl/index.html)[^CNN]. O *R<sub>t</sub>* de lá está entre os mais baixos, sendo de 1,17. Mas atenção, precisamos ter muita cautela interpretando esses dados. Um *R<sub>t</sub>* baixo na Suécia não significa que eles estão indo bem sem adotar distanciamento social. O número de reprodutividade depende de vários fatores, como clima, planejamento urbano, comportamentos culturais, desigualdade social e muitos e muitos outros.

<figure>
    <img src="/assets/2020/medicina/covid19/sweden.jpeg" alt="Tabela 2">
    <figcaption>Os valores da tabela para a Suécia.</figcaption>
</figure>

Por mais que o *R<sub>t</sub>* da Suécia esteja baixo, ele poderia estar ainda menor se o país estivesse adotando distanciamento. Sem falar que a Suécia está relativamente no início da curva. Vamos continuar observando e tentando analisar os dados nesses próximos dias. Pretendo estudar mais sobre a situação na Suécia e fazer uma postagem mais elaborada em breve.

Agora vamos falar do Brasil, onde o valor estimado para o *R<sub>t</sub>* foi de 2,81. Ou seja, um infectado transmite a doença, em média, para quase três pessoas. Isso demonstra que nossas medidas de isolamento não estão sendo efetivas? Não exatamente. Nosso *R<sub>t</sub>* pode estar elevado por esses outros fatores que listei falando da Suécia. Para responder essa pergunta nos precisamos de mais medições do *R<sub>t</sub>* e compará-las antes e depois de aumentar a rigidez do isolamento. Quando mais rígido o distanciamento social, o *R<sub>t</sub>* tende a diminuir. E como não sabemos o nosso *R<sub>t</sub>* anterior, não temos um parâmetro.

### Previsão de óbitos

Neste segundo *print*, tentei expor os países com as maiores previsões de óbitos para a próxima semana. Infelizmente a tabela estava ordenando a coluna corretamente, então tive que ordenar pelo número de mortes na semana passada.

Os Estados Unidos é o país com a maior previsão de mortes na próxima semana, sendo de 13.900 óbitos. Logo em seguida, vem o Brasil com uma previsão de 5.680 mortes.

<figure>
    <img src="/assets/2020/medicina/covid19/tab-death.jpeg" alt="Tabela 3">
    <figcaption>Essa é a tabela, porém desta vez eu ordenei em valores decrescentes de mortes na semana passada. Tentei ordenar pelos valores de mortes previstas mas a tabela não estava permitindo isso, infelizmente (um pequeno <em>bug</em>).</figcaption>
</figure>

Esse relatório sai num momento em que [alguns estados, como São Paulo, já estavam cogitando flexibilizar o distanciamento social](https://veja.abril.com.br/brasil/doria-ira-anunciar-reducao-gradual-da-quarentena-a-partir-de-11-de-maio/)[^estados]. Mas, pelo que parece, estão voltando atrás.

## Conclusão

Essa é mais uma projeção dentre várias que já vimos. Como não nos resta muito que fazer para impedir a pandemia, vale muito a pena ficar projetando cenários. Serve tanto para de fato tentar prever o que vai acontecer e se preparar, como também para melhorar cada vez mais os modelos matemáticos à medida que vamos acumulando novos dados.

Pode parecer alarmista demais para alguns, mas isso faz parte da ciência. Por mais que uma projeção erre grosseiramente, ela vai ser importante para que o erro seja estudados e nas próximas vezes seja feita uma estimativa mais precisa.

Mais uma vez eu quero deixar bem claro aqui: **temos que ter muito cuidado analisando os dados!** Epidemiologia é uma ciência extremamente complexa. Não se trata apenas de biologia, mas de comportamento social também. Existe uma infinidade de variáveis envolvidas nesses dados. Senão tomarmos cuidado na interpretação, podemos cair em alguma variável de confusão, como já discuti na postagem anterior -- [A falácia ecológica e o estudo correlacionando a vacina do BCG com proteção à COVID-19](/2020/medicina/o-estudo-que-projetou-distanciamento-social-ate-2022-por-causa-da-covid19).

O *MRC Centre for Global Infectious Disease Analysis* vai ficar disponibilizando novas previsões toda semana. Se saírem novos relatórios, faço mais postagens aqui comentando.

Tem alguma sugestão ou crítica? Entra em contato comigo que vou adorar ficar sabendo.

## Citações

[^imp]: **Short-term forecasts of COVID-19 deaths in multiple countries**. MRC Centre for Global Infectious Disease Analysis. Imperial College London. Publicado em 28 de Abril de 2020. Acessado em 30 de Abril de 2020. Disponível em: <https://mrc-ide.github.io/covid19-short-term-forecasts/index.html>.

[^Held]: Held, Leonhard; Hens, Niel; O'Neill, Philip D.; Wallinga, Jacco (November 7, 2019). **Handbook of Infectious Disease Data Analysis**. CRC Press. p. 347. ISBN 978-1-351-83932-7. Disponível em: <https://books.google.com/?id=cXC9DwAAQBAJ&pg=PA347>.

[^Riou]: Riou J, Althaus CL (janeiro de 2020). **Pattern of early human-to-human transmission of Wuhan 2019 novel coronavirus (2019-nCoV), December 2019 to January 2020**. Euro Surveillance. 25 (4). PMC 7001239Acessível livremente. PMID 32019669. doi:[10.2807/1560-7917.ES.2020.25.4.2000058](https://doi.org/10.2807/1560-7917.ES.2020.25.4.2000058).

[^CNN]: **Sweden challenges Trump -- and scientific mainstream -- by refusing to lock down**. CNN. Publicado em 10 de Abril de 2020. Acessado em 30 de Abril de 2020. Disponível em: <https://edition.cnn.com/2020/04/10/europe/sweden-lockdown-turmp-intl/index.html>.

[^estados]: **Doria irá anunciar redução gradual da quarentena a partir de 11 de maio**. Veja. Publicado em 20 de Abril de 2020. Acessado em 30 de Abril de 2020. Disponível em: <https://veja.abril.com.br/brasil/doria-ira-anunciar-reducao-gradual-da-quarentena-a-partir-de-11-de-maio/>.