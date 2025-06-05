import Markdown from "react-markdown"

interface DocsProps {
    path: string,
    file: string,
    error: string,
    content: string
}

const DocPage = ({path, file, error, content} : DocsProps) => {

    return(
        <div id="doc-reader">
            <span id="filename">
                {path}/{file || <span id="empty-file">none</span>}     
            </span> 
            <span className="error">
                {error}
            </span>
            <div id='markdown-container'>
                {!content &&
                    <span id="empty-content">Nothing.</span>}
                {content && (
                    <Markdown>
                        {content}
                    </Markdown>
                )}
                    
            </div>
        </div>
    )
}

export default DocPage