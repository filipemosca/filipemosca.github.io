---
title: Como desativar as headerbars e usar titlebars nos apps do Gnome
---

A partir do Gnome 3, o Gnome começou a usar a tecnologia de _client side decorations_ (CSD), ou _headerbars_. Nessa funcionalidade é o próprio app quem gera a decoração de janela, o que inclui os botões de fechar, maximizar e minimizar. Essa nova interface substitui a clássica _titlebar_  gerada pelo _server side decoration_ (SSD). O visual final é muito bonito e polido, seguindo os moldes do que a Apple vem fazendo no MacOS.

Contudo, no KDE Plasma essa funcionalidade fica muito mal integrada. O KWin não atua nesses aplicativos e o resultado é uma inconsistência visual no desktop, o que é suficiente para me gerar uma crise de TOC. Por sorte, é possível desabilitar o CSD dos apps GTK3 graças ao pacote `gtk3-nocsd`.

Olha a diferença que faz. Na imagem abaixo temos o gnome-calendar padrão.
![gnome-calendar com CSD](/assets/apps-screenshot/gnome-csd.png)

E essa outra imagem é o mesmo gnome-calendar mas com o CSD desabilitado.
![gnome-calendar sem CSD](/assets/apps-screenshot/gnome-nocsd.png)

Perceba que a janela do app com CSD não possui sombras e ainda têm as bordas quadradas. Além disso ele não responde às animações do KWin e nem possui bordas. Já o app sem o CSD, que é gerenciado pelo KWin, apresenta essas funcionalidades.

## Como instalar
No Ubuntu e Debian, o pacote está disponível nos repositórios oficiais. Basta instalar e ele já passa a funcionar.

```
$ sudo apt install gtk3-nocsd
```

Ou você pode baixar diretamente no Github do desenvolvedor: [gtk3-nocsd](https://github.com/PCMan/gtk3-nocsd)

Nesse artigo não quero entrar muito no merito se as CSDs são boas ou ruins. Existe uma discussão muito acalorada sobre isso. Será assunto para uma próxima postagem.
