interface DocsNavProps {
    fileNames: string[],
    selected: string
}

const DocsNav = ({fileNames, selected}: DocsNavProps) => {
    return (
        <aside id='doc-nav'>
            <div>
                <h2>Arquivos</h2>
                <div>
                    <input type='text' />
                </div>
                <ul id='filename-list'>
                    {fileNames.map((fileName) => (
                        <li>
                            <button disabled={fileName == selected}>
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