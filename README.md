<p align="center"><img src="assets/branding/logo-principal.webp" alt="WMK Map Studio" width="900"></p>

# WMK Map Studio v0.2.1

**Crie mundos. Construa jogos.**

Editor independente de mapas para desenvolvedores de jogos, gratuito e de código aberto.

**Autor:** Walney Moreira Klein — [walneyk@hotmail.com](mailto:walneyk@hotmail.com)  
**Licença:** [MIT](LICENSE) | **Idioma:** Português (Brasil)

## Recursos atuais

- Projetos e mapas JSON versionados, autosave e recuperação.
- Editor 2D Canvas: pincel, borracha, camadas, spritesheets PNG/WebP, zoom, pan e histórico.
- Painéis redimensionáveis e reposicionáveis em grade.
- Exemplo de vila com três camadas.
- Metadados de mapas 3D (renderização 3D ainda planejada).

## Instalação

Baixe o código pelo botão Code → Download ZIP ou clone o repositório. Instale Node.js 22 ou superior. No Windows, execute INICIAR.bat ou use:

```powershell
npm install
npm run dev
```

Abra a URL exibida pelo Vite. Use Chrome ou Edge para salvar diretamente; em outros navegadores o download não confirma a gravação. Não abra index.html diretamente.

## Primeiro mapa

Abra `exemplos/vila.project.json` pelo botão Abrir JSON. Selecione uma camada e um tile; pinte com o botão esquerdo. Scroll altera o zoom; botão central move a câmera. Ctrl+Z desfaz, Ctrl+Y refaz e Ctrl+S salva.

## Documentação

- [Manual em português](manuais/manual.html)
- [Planejamento original](manuais/planejamento.md)
- [Roadmap](roadmap.html)

## Desenvolvimento

`npm test` executa os testes do núcleo. `npm run build` empacota a aplicação com Vite após instalar dependências.

O núcleo fica em src/core, os formatos em src/formats e as ferramentas 2D em src/editors/2d. O projeto não depende de Godot, Unity ou Unreal.

## Limitações

Canvas 2D nativo; PixiJS e Three.js ainda não integrados. O layout usa grade, não docking completo. Spritesheets de até 1 MB são incorporadas ao JSON; autosave localStorage tem cota e guarda uma única cópia. Validação visual no navegador ainda necessária. Não execute código arbitrário de mapas.

## Roadmap

1. Fundação e persistência.
2. Editor 2D: seleção, copiar/colar e preenchimento.
3. Objetos, colisões, regiões e compatibilidade Tiled.
4. Editor 3D, GLB e gizmos.
5. Terrenos, estradas e vegetação.
6. Triggers visuais e perfis de jogos.

## Assets e créditos de terceiros

O WMK Map Studio é um editor independente. Os recursos gráficos importados para os mapas pertencem aos respectivos autores e conservam suas licenças. A licença MIT do código do WMK Map Studio não substitui a licença desses recursos.

### Ninja Adventure Asset Pack

- **Autores:** Pixel-Boy e AAA.
- **Página oficial:** [Ninja Adventure Asset Pack — itch.io](https://pixel-boy.itch.io/ninja-adventure-asset-pack).
- **Licença indicada pelos criadores:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
- **Uso no projeto:** referência para importação de tilesets, construção de mapas RPG, personagens, objetos, animações, terrenos e futuros testes de colisão.

A licença CC0 permite reutilização, adaptação e distribuição dos recursos abrangidos por ela, inclusive comercialmente. Mesmo quando a atribuição não é exigida, mantemos os créditos como reconhecimento ao trabalho dos artistas.

Os arquivos originais do Ninja Adventure não estão incluídos nesta publicação. Baixe o pacote pela página oficial. Os exemplos gráficos próprios do WMK não devem ser confundidos com os recursos de Pixel-Boy e AAA.

### Como importar uma spritesheet

1. Baixe e extraia um pacote de assets cuja licença permita o uso pretendido.
2. Abra ou crie um mapa 2D no WMK Map Studio.
3. Na seção de importação de spritesheets, configure o tamanho do tile (por exemplo, 16 pixels para folhas compatíveis do Ninja Adventure), margem e espaçamento conforme a imagem escolhida.
4. Selecione a imagem PNG ou WebP e escolha um tile na paleta.
5. Pinte na camada desejada e salve o projeto JSON.

Na versão atualmente publicada, o limite é de 1 MB por imagem e até 1024 tiles por folha; os tiles são quadrados. A versão experimental 0.4.1 desenvolvida separadamente amplia esse fluxo com seleção múltipla, tiles retangulares, zoom da spritesheet e carimbos compostos.

### Referências de desenvolvimento

- [Tiled Map Editor](https://www.mapeditor.org/): inspiração para camadas, tilesets, ferramentas de pintura, colisores e formatos de intercâmbio.
- [RPG Maker](https://www.rpgmakerweb.com/): inspiração para organização de mundos, banco de dados de jogo, eventos, personagens e modo de teste.

O WMK Map Studio não é afiliado a esses projetos. Não estamos redistribuindo código ou recursos proprietários do RPG Maker. As referências são funcionais e educacionais.

### Contribuição de novos pacotes

Ao contribuir com recursos gráficos ou sonoros, informe nome do pacote, autor, URL original, licença e eventuais restrições. Inclua o aviso de licença correspondente e não redistribua materiais sem autorização.

## Evolução experimental e publicação

A branch main contém a versão 0.2.1 do código. As versões experimentais posteriores, até 0.4.1, foram preparadas em distribuições separadas e ainda precisam ser sincronizadas com o repositório. O planejamento inclui Collision Studio, camadas especializadas, Object Studio, Animation Studio, autotiling, Playtest, World Manager, Game Database, Event Studio, Character Studio e edição 3D. Essas funcionalidades não devem ser interpretadas como já disponíveis na branch main.

## Contribua

Abra uma issue com versão, passos de reprodução, comportamento esperado e observado. Pull requests são bem-vindos. Preserve os créditos e avisos de licença. Dependências e assets de terceiros conservam suas licenças.
