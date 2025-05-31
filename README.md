# NiteLog

## Estrutura
```
src/
├── assets/               # Arquivos estáticos
│   ├── images/           # Imagens
│   ├── fonts/            # Fontes
│   └── styles/           # Estilos globais
├── components/           # Componentes reutilizáveis
├── pages/                # Componentes de página (rotas)
│   ├── Home/
│   │   ├── index.tsx
│   │   ├── Home.styles.ts
│   │   └── components/   # Componentes usados apenas nesta página
│   └── About/
│       ├── index.tsx
│       └── About.styles.ts
```
> mapa de diretório gerado por inteligência artificial.


## Convenções

### Tags 
As tags, tanto em html, como em jsx ou tsx devem ser formatadas de maneira que seus atributos fiquem identados um abaixo do outro, caso haja mais de um atributo.

Além disso, o ideal é que todas as tags sigam um padrão de 
1. class ou className
2. type (se houver)
3. name 
4. id
5. value
6. placeholder
7. Eventos (sem ordem especifica)

  ```JSX
      <input 
        className="..."
        type="..."
        name="..." 
        id="..." 
        value={variable}
        placeholder="..." 
        onInput={functionHandle} 
        />
  ```