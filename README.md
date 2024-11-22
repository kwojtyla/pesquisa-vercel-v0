
# 🔍 Pesquisa sobre o Vercel V0 para aplicações Front-End

## 🎯 Objetivo 
Este repositório contém o material e as instruções para a pesquisa **"Inteligência artificial e desenvolvimento de aplicações Front-End: um estudo acerca do Vercel V0"**, que aborda a usabilidade do Vercel V0 e sua utilidade no dia a dia de desenvolvedores Front-End.

## ✔️ Como contribuir 
Você é um desenvolvedor Front-End e precisa desenvolver um formulário de login simples, contendo usuário, senha e um botão de submit. A interface de usuário (UI) pode ser consultada no [arquivo do Figma disponibilizado aqui](https://www.figma.com/design/gcHw6yUB4vXLoywZyAoV3F/Login-Page---UI?node-id=1-2&t=gWFCb6tgbCFw6nIi-1). Dentro desse escopo, você precisa realizar 3 etapas:

1. **Desenvolvimento tradicional**
   A partir do [Figma](https://www.figma.com/design/gcHw6yUB4vXLoywZyAoV3F/Login-Page---UI?node-id=1-2&t=gWFCb6tgbCFw6nIi-1) disponibilizado, desenvolva o formulário de login usando a stack de sua preferência (sugerimos usar React + Next, Tailwind e ShadcnUI, mas pode ficar à vontade!).
   Nessa etapa, é interessante que você **anote o tempo** gasto na realização da atividade.

2. **Desenvolvimento com o Vercel V0**
   Em segunda instância, utilize o **[Vercel V0](https://v0.dev)** para recriar a mesma interface. Para isso, você precisará fornecer um prompt solicitando o que deve ser feito. Após receber o resultado proposto, implemente no seu ambiente de desenvolvimento local e tente deixar a interface o mais próxima possível da proposta na UI. 
   
   Exemplo de Prompt:
   
   *"Desenvolva um um formulário de login simples, centralizado na tela, com (descrição dos elementos)..."*
   ![Interface do V0](https://i.imgur.com/28eluVK.png)
   
   **Importante:** é interessante anotar também o tempo de desenvolvimento, desde a concepção do prompt até a finalização, englobando o tratamento de erros e ajustes de UI. E apenas nessa etapa, será necessário fazer um setup para rodar o projeto do V0 - essa documentação encontra-se no próximo tópico.

3. **Feedback**
   Após concluir as atividades, acesse o formulário disponível em `https://forms.gle/u1NfN1HASVCcxzm19` ou [clique aqui](https://forms.gle/u1NfN1HASVCcxzm19) e preencha um breve formulário sobre a sua experiência com a ferramenta e dados de tempo gasto no desenvolvimento das atividades.

## 🖥️ Setup do Projeto do V0

1. **Configuração Inicial**
- Clone este repositório: 
	```bash 
	git clone https://github.com/kwojtyla/pesquisa-vercel-v0.git  
	``` 
 - Acesse o diretório:
	```bash 
	cd pesquisa-vzero
	```
- Instale as dependências do projeto 
	``` 
	npm install
	```
- Crie uma nova branch a partir da main
	```bash 
	git checkout -b meu-usuario
	```
- Rode o ambiente de desenvolvimento local
	``` 
	npm run dev
	```
	
2. **Realizando as mudanças**
- Acesse o caminho ```src/app``` e cole o código retornado pelo **Vercel V0** no arquivo ```page.tsx```
	- Assim que colar, faça as alterações que forem necessárias para satisfazer o design proposto

3. **Subindo as alterações**
- Abra uma pull request para a branch criada no item 1
	```bash 
	git add .
	```
	```bash 
	git commit -m "feat: login page my-user"
	```
	```bash 
	git push
	```	
## 🤔 Perguntas Frequentes (FAQ)

### O que é o Vercel V0?
O Vercel V0 é uma ferramenta baseada em IA generativa, criada pela Vercel Labs, voltada para o desenvolvimento de interfaces de usuário (UI). Ele utiliza prompts de texto para criar componentes de UI em React, compatíveis com Shadcn UI e Tailwind CSS. 
ℹ️ Para saber mais, consulte a [documentação do Vercel V0](https://v0.dev/docs)

### Preciso ter experiência com o Vercel?
Não, a pesquisa está aberta a todos os níveis de experiência. A ideia é coletar feedbacks de diferentes perspectivas.

### Os dados da pesquisa serão públicos?
Sim! A ideia é publicar o trabalho no [Computer on the Beach 2025](https://computeronthebeach.com.br). Caso o trabalho seja aceito, os dados estarão disponíveis nos Anais do Computer on the Beach para visualização na íntegra do trabalho. Ainda não pensamos em como disponibilizar isso ao público, de fato, mas caso você deseje consultá-los, [basta me solicitar pessoalmente](https://github.com/kwojtyla) :)

## 🤝 Contribuições
Contribuições são bem-vindas! Caso tenha sugestões de melhorias para esta pesquisa ou documentação, sinta-se à vontade para abrir uma [issue](https://github.com/kwojtyla/pesquisa-vercel-v0/issues) ou enviar um [pull request](https://github.com/kwojtyla/pesquisa-vercel-v0/pulls).

## 📞 Contato
Se você tiver dúvidas ou precisar de mais informações, entre em contato com:

**[Karol Wojtyla](https://github.com/kwojtyla)**
 <p align="left">
  <a href="mailto:karolwojtyla360@gmail.com" title="Gmail">
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-GMAIL" alt="Gmail"/></a>
  <a href="https://www.linkedin.com/in/karolwojtyla/" title="LinkedIn">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" alt="LinkedIn"/></a>
  <a href="https://www.instagram.com/karolwojtyla.dev/" title="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=LINK-DO-SEU-INSTAGRAM" alt="Instagram"/></a>
</p>

**[Aridan Pantoja](https://github.com/aridanpantoja)**
 <p align="left">
  <a href="mailto:aridanpantoja@gmail.com" title="Gmail">
  <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=LINK-DO-SEU-GMAIL" alt="Gmail"/></a>
  <a href="https://www.linkedin.com/in/aridanpantoja/" title="LinkedIn">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=LINK-DO-SEU-LINKEDIN" alt="LinkedIn"/></a>
  <a href="https://www.instagram.com/aridan.dev/" title="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=LINK-DO-SEU-INSTAGRAM" alt="Instagram"/></a>
</p>

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
