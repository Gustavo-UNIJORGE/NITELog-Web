import { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
import DocPage from './DocPage';
// import content from '@root/assets/docs/';

const DocsIndex = () => {
    const filename = 'Aliasing.md';
    const rootpath = '../../assets/docs';
    const [promise, setPromise] = useState<Promise<string>>()
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadFile = async () => {
            try {
                const path = new URL(`${rootpath}/${filename}`, import.meta.url); 
                console.log(path)
                // Caminho correto considerando a estrutura do projeto
                await fetch(path)
                    .then(response => setPromise(response.text()))
                    
            } catch (err) {
                setError('Erro ao carregar o arquivo');
                console.error('Erro na leitura:', err);
            }
        };

        loadFile();
    }, [filename]);
    useEffect(() => {
        const loadContent = async () => {
            try {
                await promise?.then(content => setContent(content))
            } catch (err) {
                setError('Erro ao ler o conteúdo');
                console.error('Front-end: Erro no carregamento', err);
            }
        };

        loadContent();
    }, [promise])
    return (
        <main id="docs" className='grid-simple'>
            <header>
                <h1>Docs</h1>

            </header>
            <aside id='doc-nav'>
                link
            </aside>
            <div id="docs-reader">
                <span id='filename'>{filename}</span>
                {error && 
                    <div className='error'>
                        {error}
                    </div>
                }
                <DocPage content={content} />
            </div>

        </main>

    )
}
export default DocsIndex