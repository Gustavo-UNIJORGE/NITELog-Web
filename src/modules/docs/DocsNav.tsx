import type React from "react";

interface DocsNavProps {
    fileNames: string[],
    handleSelect: (event: React.MouseEvent<HTMLButtonElement>) => void,
    selected: string
}

const DocsNav = ({fileNames, handleSelect, selected}: DocsNavProps) => {

    return (
        <aside id='doc-nav'>
            <div>
                <h2>Arquivos</h2>
                {/* <div>
                    <input type='text' />
                </div> */}
                <ul id='filename-list'>
                    {fileNames.map((fileName, i) => (
                        <li key={i}>
                            <button 
                                name={fileName}
                                onClick={(e) => handleSelect(e)}
                                disabled={fileName == selected}>
                                {i+1}. {fileName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default DocsNav;