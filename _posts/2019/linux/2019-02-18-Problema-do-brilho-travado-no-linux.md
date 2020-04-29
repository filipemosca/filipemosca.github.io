---
title: Problema do brilho travado no linux
author: Filipe Mosca
category: tecnologia
tags: workaround notebook
---

Esse é um problema que sempre enfrento não importa a distro instalada. Porém, tem vezes que o brilho trava no mínimo e tem vezes que trava no máximo. "Trava", pois os botões de controle do brilho não funcionam e nem os comandos no terminal.

A primeira vez que aconteceu foi muito difícil achar a solução porque a tela ficou sem brilho e era quase impossível ver algo na tela. Tive que ficar pesquisando com o celular. Felizmente encontrei a solução para o problema, tanto para o brilho máximo como do mínimo.

## Solução:

É bastante simples. Vamos precisar alterar alguns elementos no arquivo de configuração do grub, localizado em `/etc/default/grub`. Para isso, vamos usar o programa _nano_ pois acredito que ele já vem instalado em todas as distros. Caso contrário você pode usar qualquer um. Só preste atenção que é necessário privilégios de administrador para editar este arquivo e é por isso vamos usar o comando sudo.

Então digite no terminal:

```
sudo nano /etc/default/grub
```

Vai aparecer uma tela de edição do nano. É só localizar a linha com o elemento `GRUB_CMDLINE_LINUX_DEFAULT=`. A minha é assim:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
```
Nela você pode adicionar uma série de valores que podem resolver esse problema. Pesquisando nos fórums o valor que resolve acaba dependendo de usuário para usuário. Para mim o valor `acpi_osi='!Windows 2012'` foi o efetivo. Mas você pode tentar outros como:

```
acpi_osi=
acpi_osi=Linux
acpi_osi='!Windows 2012'
acpi_osi='!Windows 2012' acpi_backlight=vendor
acpi_backlight=vendor
```
Se eu souber de mais vou editando esse post. Esse valor deve ser adicionado dentro dos parenteses, separado por um espaço dos outros elementos. Editando a minha linha vai ficar assim:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet acpi_osi='!Windows 2012'"
```
A sua deve ficar semelhante. Perceba que eu inclui os apóstrofos e respeitei as aspas. Se escrever errado não vai funcionar então preste atenção. Lembrando que se não der certo você pode tentar adicionar um dos outros valores no mesmo lugar.

Em seguida é só salvar as alterações e fechar o editor. No nano isso pode ser feito com <kbd>Ctrl</kbd> + <kbd>O</kbd> para salvar e <kbd>Ctrl</kbd> + <kbd>X</kbd> para sair. Depois é necessário atualizar o arquivo de configuração de boot do grub, execute:

```
sudo update-grub
```
E pronto! É só reiniciar o computador e verá que consegue mudar o brilho. Obrigado pela atenção!
