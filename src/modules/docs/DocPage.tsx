import Markdown from "react-markdown"

interface DocsProps {
    content: string
}

const DocPage = ({content} : DocsProps) => {

    return(
        <div id='markdown-container'>
            <Markdown>{content}</Markdown>
        </div>
    )
}

export default DocPage