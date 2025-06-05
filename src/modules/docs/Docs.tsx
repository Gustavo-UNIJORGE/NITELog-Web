import { useEffect, useState } from 'react'
import DocPage from './DocPage';
import DocsNav from './DocsNav';
// import content from '@root/assets/docs/';

const DocsIndex = () => {
    const filename = 'Aliasing.md';
    const [isLoading, setLoading] = useState<boolean>(false)
    const [fileNames, setFileNames] = useState<string[]>([])
    const [selectedFileName, setSelectedFileName] = useState<string>('');
    const root = 'assets/docs';
    const rootpath = `../../`;
    const [promise, setPromise] = useState<Promise<string>>()
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    useEffect(() => {
        const loadFileNames = async () => {
            setLoading(true);
            try {
                // const path = `./${root}/${filename}`; 
                const path = '../../assets/docs/*.md' 
                // const files = import.meta.glob('../../assets/docs/*.md');
                const files = import.meta.glob('../../assets/docs/*.md');
                setFileNames(Object.keys(files).map(file => 
                    file.split('/').pop() || ''
                ));
                // setFileList(fileName.filter(Boolean))
                // Caminho correto considerando a estrutura do projeto
                if (fileNames.length > 0) 
                    setSelectedFileName(fileNames[0])
                
            } catch (err) {
                setError('Erro ao carregar o arquivo');
                console.error('Erro na leitura:', err);
            } finally {
                setLoading(false);
            }
        };
        
        loadFileNames();
    }, []);

    useEffect(() => {
        if(!selectedFileName) return;

        const loadFileContent = async () => {
            setLoading(true);

            try {
                const path = new URL(`${selectedFileName}`, import.meta.url).href;
                const response = await fetch(path);

                if (!response.ok) {
                    throw new Error('Failed to fetch file content');
                }

                const text = response.text();

                setPromise(text);
                setError('');
            } catch (err) {
                setError('Erro ao carregar conteúdo da página');
                console.error(error, ': ', err)
            } finally {
                setLoading(false)
            }
        }

        loadFileContent()
    }, [selectedFileName])
    
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
    
    useEffect(() => {
        
    }, [selectedFileName])
    return (
        <>
            {(isLoading) ? (
            <div>Carregando...</div>
            ) : (
            <main id="docs" className='grid-simple'>
                <header>
                    <h1>Docs</h1>
                </header>
                <DocsNav fileNames={fileNames} selected={selectedFileName} />
                <DocPage path={root} file={selectedFileName} error={error} content={content} />
            </main> 
            ) }
            
        </>
        
    )
}
export default DocsIndex
