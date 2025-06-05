# Aliasing

O processedo de adicionar um alias a um path (caminho de diretório ou trecho dele), envolve editar dois arquivos: `tsconfig.app.json` e `vite.config.ts`.

Mas na realidade em projetos maiores pode ser que toda a configuração do typescript esteja envolvida e nisso seria preciso alterar:

*  `tsconfig.json`
*  `tsconfig.app.json`
*  `tsconfig.node.json`
*  `vite.config.ts`
```json
//tsconfing.app.json
"baseUrl": "./",
    "paths": {
      "@/*": ["src/modules/*"],
      "@root/*": ["src/*"],
      "@routes": ["src/routes.ts"],
      "@pages/*": ["src/pages/*"],
      "@component/*": ["src/components/*"],
      "@public/*": ["public/*"],
      "@styles/*": ["src/assets/styles/*"]
    }
```