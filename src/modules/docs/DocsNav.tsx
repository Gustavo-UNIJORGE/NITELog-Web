interface DocsNavProps {
    fileNames: string[],
    handleSelect: object,
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
                    {fileNames.map((fileName) => (
                        <li>
                            <button 
                                name={fileName}
                                onClick={(e) => handleSelect(e)}
                                disabled={fileName == selected}>
                                {fileName}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default DocsNav;