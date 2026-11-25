# Planejamento — Editor próprio de mapas 2D e 3D

**Versão:** 0.1  
**Status:** Documento inicial de visão e planejamento

## 1. Visão do projeto

Criar um editor próprio, feito com **HTML, CSS e JavaScript**, para montar mapas e conteúdo para jogos 2D e 3D.

O editor deve combinar ideias de ferramentas como:

- **Tiled**, para mapas 2D, tilesets, spritesheets e camadas;
- **Warcraft III World Editor**, para objetos, regiões e triggers;
- Editores de mapas de simuladores, para terrenos, estradas, cidades e pontos de interesse.

O objetivo é que uma pessoa possa criar um projeto, montar mapas, importar assets, configurar objetos e triggers, salvar o trabalho e exportar o mapa para usar em um jogo.

O editor **não será baseado em Godot, Unity ou Unreal**. Bibliotecas como PixiJS e Three.js poderão ser usadas para desenhar as visualizações 2D e 3D, mas a estrutura do editor, as ferramentas, os formatos dos mapas e os triggers serão desenvolvidos para este projeto.

---

## 2. Princípios do projeto

1. Ser um editor próprio, não uma modificação de outra engine ou editor.
2. Usar JavaScript, HTML e CSS, organizando o código em módulos.
3. Usar bibliotecas externas apenas quando ajudarem, especialmente para renderizar as viewports 2D e 3D.
4. Salvar os projetos em um formato próprio, versionado e documentado.
5. Permitir importar e exportar mapas e assets.
6. Começar com ferramentas essenciais e ampliar o editor em etapas.
7. Evitar perder trabalho: incluir salvamento, autosave, validação e desfazer/refazer.
8. Separar o editor dos jogos: cada jogo poderá definir os objetos e ações que entende.

### O que o editor não pretende ser inicialmente

- Um substituto do Blender para modelagem de malhas, UV, rigging ou escultura de modelos.
- Uma engine completa para criar qualquer jogo sem programação.
- Uma cópia integral de todos os recursos do Tiled, Blender ou Warcraft III.
- Um editor de terreno voxel ou de geometria 3D complexa na primeira versão.

O Blender continuará sendo usado para criar modelos. Esses modelos poderão ser exportados, por exemplo, em `.glb` e importados para o editor.

---

## 3. Tecnologias sugeridas

| Área | Tecnologia sugerida | Uso |
|---|---|---|
| Aplicação | HTML, CSS e JavaScript ES Modules | Interface e lógica do editor |
| Desenvolvimento | Vite | Servidor local e empacotamento da aplicação |
| Viewport 2D | PixiJS | Desenho de mapas, tiles e sprites |
| Viewport 3D | Three.js | Desenho de modelos, cenas e terrenos |
| Assets 3D | glTF / GLB | Importação de modelos do Blender |
| Janelas e painéis | Golden Layout ou sistema próprio | Painéis móveis, redimensionáveis e encaixáveis |
| Projetos compactados | Biblioteca ZIP, se necessária | Importar e exportar pacotes de projeto |
| Salvamento local | File System Access API e IndexedDB | Acesso a arquivos e autosave no navegador |

PixiJS e Three.js são usados para renderizar as viewports. **Eles não fornecem o editor completo:** seleção, camadas, ferramentas, propriedades, salvamento e triggers fazem parte do nosso projeto.

A primeira versão pode funcionar no navegador. Uma versão desktop poderá ser considerada no futuro, caso o acesso a pastas locais precise ser mais simples e consistente.

---

## 4. Organização visual do editor

A interface deve ser organizada em painéis que possam ser movidos, redimensionados, fechados ou encaixados.

### Layout inicial

- **Barra superior:** criar, abrir, salvar, desfazer, refazer, importar, exportar e testar.
- **Painel esquerdo:** assets, paleta de tiles, camadas ou hierarquia de objetos.
- **Centro:** viewport 2D ou 3D.
- **Painel direito:** propriedades do item selecionado.
- **Painel inferior:** triggers, console, avisos e informações do mapa.

O editor deve lembrar ferramentas profissionais, mas pode começar com um layout simples e evoluir.

### Recursos de interface importantes

- Temas claro e escuro, começando pelo escuro.
- Atalhos de teclado.
- Confirmação ao fechar um mapa com alterações não salvas.
- Indicador visual de salvamento.
- Salvamento automático recuperável.
- Painéis com o layout salvo pelo usuário.

---

## 5. Editor 2D

O editor 2D deve oferecer uma experiência semelhante ao Tiled, começando por mapas ortogonais em grade.

### Recursos previstos

- Criar mapas 2D com tamanho e dimensões de tile configuráveis.
- Importar spritesheets.
- Configurar tamanho dos tiles, margem e espaçamento da spritesheet.
- Selecionar tiles em uma paleta.
- Pintar e apagar tiles no mapa.
- Selecionar, copiar e mover áreas.
- Preencher áreas e desenhar linhas ou retângulos.
- Zoom e movimentação da câmera.
- Grade visual configurável.
- Camadas com nome, visibilidade, bloqueio, opacidade e ordem.
- Camadas de tiles, objetos, colisões e imagens.
- Propriedades personalizadas para tiles e objetos.
- Colisões e regiões para eventos.
- Salvar e abrir mapas no formato próprio.

### Compatibilidade com Tiled

O editor deve importar e exportar arquivos **Tiled `.tmj`** para os recursos mais comuns.

A primeira etapa de compatibilidade pode focar em:

- Mapas ortogonais;
- Camadas de tiles;
- Camadas de objetos;
- Tilesets;
- Propriedades personalizadas básicas.

Recursos não suportados devem gerar avisos claros. A compatibilidade com Tiled não precisa ser completa na primeira versão.

---

## 6. Editor 3D

O editor 3D deve permitir montar cenas e mapas com objetos criados no Blender ou obtidos de outras fontes.

### Recursos previstos

- Importar modelos `.glb`.
- Exibir uma hierarquia de objetos da cena.
- Selecionar, duplicar, excluir e renomear objetos.
- Mover, rotacionar e escalar objetos com gizmos.
- Mostrar grade, eixos e ferramentas de encaixe.
- Editar propriedades de objetos.
- Criar grupos, tags e pastas.
- Salvar as transformações dos objetos no mapa.
- Usar modelos como objetos reutilizáveis.

Um mesmo projeto poderá conter mapas 2D e mapas 3D. Na primeira versão, cada mapa poderá ser 2D **ou** 3D. A criação de mapas que misturem os dois modos poderá ser estudada depois.

### Terreno

O terreno deve começar com uma malha baseada em altura, com pincéis para:

- Subir o terreno;
- Abaixar o terreno;
- Nivelar uma área;
- Suavizar diferenças de altura.

Depois poderão ser adicionados:

- Pintura de materiais e texturas;
- Vegetação;
- Decoração distribuída por áreas;
- Colisão e regiões;
- Ferramentas para estradas e caminhos curvos.

A primeira versão do terreno não precisa suportar cavernas, túneis ou geometrias voxel.

### Estradas e cidades

A construção de estradas é um recurso avançado. Ela deverá usar curvas ou splines conectadas, e não apenas modelos colocados manualmente.

No futuro, as estradas poderão oferecer:

- Pontos editáveis da curva;
- Largura configurável;
- Cruzamentos;
- Conexão entre trechos;
- Colocação de elementos ao longo da estrada;
- Pontos de rota e áreas de tráfego.

---

## 7. Triggers e programação dentro do mapa

O editor deve oferecer triggers visuais no estilo **Evento → Condições → Ações**.

### Exemplo

- **Evento:** o jogador entra na região “Entrada”.
- **Condição:** o jogador pertence à equipe Azul.
- **Ações:** criar cinco inimigos e mostrar uma mensagem.

Os triggers podem usar:

- Eventos de entrada e saída de regiões;
- Interação com objetos;
- Temporizadores;
- Variáveis;
- Condições;
- Ações disponíveis para o tipo de jogo.

### Segurança

O editor não deve executar código arbitrário dos mapas com `eval` ou recursos equivalentes.

Cada trigger deverá ser armazenado como dados, por exemplo:

```json
{
  "event": {
    "type": "region.enter",
    "regionId": "entrada"
  },
  "conditions": [],
  "actions": [
    {
      "type": "message.show",
      "text": "Bem-vindo!"
    }
  ]
}
```

O editor poderá incluir um **runtime simples em JavaScript** para testar triggers. Porém, para que um mapa funcione em um jogo específico, esse jogo precisará entender as entidades e ações usadas no mapa.

---

## 8. Suporte a vários tipos de jogo

O editor deve ser extensível. A parte comum poderá cuidar de mapas, assets, camadas, objetos e triggers. Cada tipo de jogo poderá definir os seus próprios elementos.

Exemplos de perfis futuros:

- **RTS:** unidades, equipes, recursos e pontos de início;
- **Fazenda:** campos, plantações, máquinas e áreas de trabalho;
- **Direção:** estradas, tráfego, rotas e pontos de interesse;
- **Aventura:** regiões, portas, itens, inimigos e eventos.

Um perfil define quais objetos e ações estão disponíveis. O editor não transforma automaticamente um mapa em qualquer jogo: o jogo precisa ter um runtime ou um carregador compatível.

---

## 9. Projetos, mapas e exportação

Um projeto deve ter uma estrutura organizada. Por exemplo:

```text
MeuProjeto/
├── project.json
├── maps/
│   ├── vila-2d.map.json
│   └── fazenda-3d.map.json
├── assets/
│   ├── sprites/
│   └── models/
└── scripts/
```

### Formatos previstos

- **`project.json`:** nome do projeto, versão do formato, mapas e assets.
- **`*.map.json`:** dados do mapa, camadas, objetos, propriedades e triggers.
- **`.png` ou `.webp`:** sprites e texturas.
- **`.glb`:** modelos 3D.
- **Arquivos auxiliares:** dados maiores, como informações do terreno.

O JSON deve guardar referências aos assets, e não copiar modelos ou imagens inteiros para dentro do arquivo do mapa.

O projeto deve ter uma versão de formato, por exemplo `schemaVersion`, para permitir alterações futuras sem perder mapas antigos.

### Importação e exportação

O editor deverá permitir:

- Abrir projetos existentes;
- Salvar projetos;
- Importar assets;
- Importar e exportar mapas;
- Criar um pacote ZIP com o mapa e os assets necessários.

Se um mapa depender de assets que não estão incluídos na exportação, o editor deve avisar o usuário.

---

## 10. Estrutura sugerida do código

Uma possível organização inicial:

```text
src/
├── app/
│   ├── main.js
│   └── editorApp.js
├── core/
│   ├── projectStore.js
│   ├── mapStore.js
│   ├── commands.js
│   ├── undoRedo.js
│   └── selection.js
├── ui/
│   ├── panels/
│   ├── toolbar/
│   └── workspace.js
├── editors/
│   ├── 2d/
│   └── 3d/
├── assets/
│   └── assetManager.js
├── formats/
│   ├── projectFormat.js
│   ├── mapFormat.js
│   └── tiledImporter.js
├── runtime/
│   └── triggerRuntime.js
└── styles/
    └── main.css
```

O objetivo dessa organização é separar interface, dados, ferramentas e renderização. Assim, adicionar recursos no futuro não exige reescrever tudo.

---

## 11. Plano de desenvolvimento

### Etapa 0 — Base do projeto

- Criar a aplicação web.
- Configurar JavaScript modular e Vite.
- Criar o layout principal.
- Criar painéis redimensionáveis.
- Criar comandos de salvar, desfazer e refazer.
- Definir o formato inicial do projeto.

**Critério de conclusão:** o editor abre no navegador, permite criar ou abrir um projeto e apresenta uma estrutura pronta para adicionar ferramentas.

### Etapa 1 — Primeiro editor 2D

- Criar viewport 2D.
- Criar mapas em grade.
- Importar spritesheets.
- Criar paleta de tiles.
- Pintar, apagar e selecionar tiles.
- Criar camadas.
- Salvar e abrir o mapa.

**Critério de conclusão:** é possível criar um mapa simples, salvar, fechar, abrir novamente e continuar editando sem perder dados.

### Etapa 2 — Objetos e Tiled

- Adicionar objetos e propriedades.
- Adicionar colisões e regiões.
- Importar e exportar a parte definida do formato `.tmj`.
- Avisar sobre recursos do Tiled não suportados.

**Critério de conclusão:** um mapa simples pode ser importado, editado e exportado com resultado verificável.

### Etapa 3 — Editor 3D

- Criar viewport Three.js.
- Importar `.glb`.
- Criar hierarquia de objetos.
- Adicionar seleção e gizmos.
- Salvar transformações.
- Implementar desfazer/refazer para edição de objetos.

**Critério de conclusão:** é possível montar uma cena com modelos do Blender, salvar e reabrir mantendo posições e propriedades.

### Etapa 4 — Terreno

- Criar um terreno baseado em altura.
- Implementar pincéis para subir, abaixar, nivelar e suavizar.
- Salvar e reabrir os dados do terreno.
- Permitir colocar objetos sobre o terreno.

**Critério de conclusão:** o terreno pode ser editado, salvo e carregado sem perder suas alterações.

### Etapa 5 — Triggers e teste

- Criar regiões.
- Criar interface de Evento → Condições → Ações.
- Criar variáveis simples.
- Implementar um runtime inicial em JavaScript.
- Mostrar erros e registros durante o teste.

**Critério de conclusão:** um trigger de demonstração pode ser criado e testado dentro do editor.

### Etapa 6 — Recursos avançados

- Estradas com curvas;
- Pintura de materiais;
- Vegetação;
- Perfis para diferentes tipos de jogos;
- Bibliotecas de objetos;
- Pacotes portáteis de mapas;
- Extensões ou plugins controlados.

---

## 12. Requisitos de qualidade

- Cada ferramenta de edição importante deve funcionar com desfazer/refazer.
- O editor deve avisar antes de perder alterações não salvas.
- Importações inválidas devem apresentar mensagens compreensíveis.
- O formato dos mapas deve ter versão.
- A interface deve continuar utilizável com projetos maiores.
- Assets ausentes devem ser identificados.
- O editor deve salvar automaticamente uma cópia recuperável.
- Mapas importados não devem executar código arbitrário.
- Erros de compatibilidade devem ser informados, não ignorados silenciosamente.

---

## 13. Resumo do primeiro objetivo

A primeira versão funcional deve:

1. Abrir como aplicação web;
2. Permitir criar um projeto;
3. Permitir criar um mapa 2D em grade;
4. Importar uma spritesheet;
5. Pintar tiles em camadas;
6. Salvar e reabrir o mapa;
7. Ter uma base preparada para adicionar 3D, terreno e triggers.

Depois disso, o editor evolui para objetos 2D, compatibilidade com Tiled, cenas 3D, terrenos e triggers.

---

## 14. Prompt para continuar o desenvolvimento

Copie este prompt junto com o planejamento quando quiser começar a programar:

> Você é um desenvolvedor e arquiteto de software experiente. Vamos criar um editor próprio de mapas 2D e 3D usando HTML, CSS e JavaScript com módulos ES.
>
> Use o documento de planejamento como fonte principal dos requisitos. Não substitua o projeto por Godot, Unity, Unreal ou outro editor pronto. PixiJS pode ser usado para renderização 2D e Three.js para renderização 3D; essas bibliotecas não devem substituir a implementação do nosso editor.
>
> Construa o projeto por etapas pequenas e funcionais. Não tente implementar todos os recursos de uma vez. Preserve a arquitetura e os dados existentes. Antes de alterar arquivos já criados, examine a estrutura atual do projeto.
>
> Comece pela etapa indicada no planejamento. Explique quais arquivos serão criados ou alterados e forneça o conteúdo completo de cada arquivo necessário. Inclua os comandos para instalar dependências e executar o projeto. Se houver algo que não possa ser testado no seu ambiente, diga isso claramente e explique como eu posso testar localmente.
>
> Priorize salvamento confiável, estrutura modular, desfazer/refazer e mensagens de erro claras. Não use `eval` para executar scripts de mapas. Não entregue somente uma interface visual sem implementar as ações anunciadas.
>
> Ao concluir cada etapa, informe:
>
> 1. O que foi implementado;
> 2. Como executar;
> 3. Como testar;
> 4. O que ainda falta;
> 5. Qual é a próxima etapa recomendada.
>
> A primeira tarefa será implementar a **Etapa 0 — Base do projeto**, seguindo o planejamento.