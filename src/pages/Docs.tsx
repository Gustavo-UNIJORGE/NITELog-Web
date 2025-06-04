import { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
// import content from '@root/assets/docs/';

const DocsIndex = () => {
    const [promise, setPromise] = useState<Promise<string>>()
    const [filename] = useState('Aliasing.md');
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const loadFile = async () => {
            try {
                // Caminho correto considerando a estrutura do projeto
                await fetch(new URL(`../assets/docs/${filename}`, import.meta.url))
                    .then(response => setPromise(response.text()))
                    .then(response => console.log(response))
                await promise?.then(
                    content => setContent(content)
                )
                    
            } catch (err) {
                setError('Erro ao carregar o arquivo');
                console.error('Erro na leitura:', err);
            }
        };

        loadFile();
    }, [filename, promise]);
    
    return (
        <div>
            <h1>Docs</h1>
            {error && 
                <div className='error'>
                    {error}
                </div>
            }
            <Markdown>{content}</Markdown>
        </div>
    )
}
export default DocsIndex