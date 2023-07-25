# RPG Gestor
Este projeto foi criado para auxiliar mestres de RPG a acompanhar e gerenciar os status dos jogadores durante suas aventuras em jogos de RPG de mesa. Com uma interface intuitiva e amigável, o RPG Gestor permite que o mestre mantenha o controle das informações essenciais de cada personagem, incluindo pontos de vida, CA, experiência e condições.

## Características

- **Status dos Jogadores:** O componente "Player" exibe os status dos jogadores, onde cada jogador possui uma barra de vida que pode ser ajustada para refletir seu valor atual.

- **Barra de Vida Interativa:** O componente "LifeBar" apresenta uma barra de vida que é atualizada em tempo real conforme o usuário ajusta os pontos de vida do jogador. Basta clicar nos botões "◄" ou "►" para diminuir ou aumentar os pontos de vida, respectivamente.

- **Experiência dos Jogadores:** O componente "Player" também mostra o nível de experiência (XP) do jogador, permitindo que o mestre monitore o progresso dos personagens ao longo da campanha.

- **Controle de Condições:** Com o componente "Condicoes", é possível rastrear as condições especiais dos jogadores. Marcadores de caixa de seleção são fornecidos para identificar se um jogador está envenenado, caído, confuso ou morrendo.

## Como Usar

1. Clone este repositório em seu computador.
2. Navegue para o diretório do projeto e execute `npm install` para instalar as dependências.
3. Inicie o aplicativo com `npm start`.
4. Ao abrir o aplicativo, você poderá aumentar ou diminuir a quantidade de players que estão na mesa.
5. Depois de selecionado a quantidade de jogadores, você verá uma seção para cada jogador, onde é possível inserir o nome do jogador, CA, pontos de vida e experiência.
6. Utilize os botões "Adicionar" e "Remover" para ajustar os pontos de experiência do jogador.
7. Utilize as caixas de seleção no componente "Condicoes" para indicar as condições especiais de cada jogador.

## Contribuição

Este projeto é de código aberto e qualquer contribuição é bem-vinda! Se você identificar algum problema ou tiver ideias para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Tecnologias Utilizadas

- React.js: para criar a interface interativa e componentes reutilizáveis.
- CSS: para estilização dos componentes.

## Aviso

Este projeto é apenas uma ferramenta para auxiliar em suas sessões de RPG de mesa e não substitui as regras e sistemas estabelecidos pelo seu jogo preferido.

Divirta-se mestreando suas aventuras épicas!
