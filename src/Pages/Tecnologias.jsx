

export default function Tecnologias(){
    return(
        <>
        <section id="tec" className="tecnologias">
            <p className="tituloTec">Tecnologias</p>
            <div className="skills">

                <div className="contSkills">
                    <h2>Front-End</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src="/src/assets/reactlogo.png" alt="" /> 
                            <p>React</p>
                        </div>

                        <div>
                            <img className="logos" src="/src/assets/Figma-logo.svg.png" alt="" /> 
                            <p>Figma</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Back-End</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src="/src/assets/c.png" alt="" /> 
                            <p>C#</p>
                        </div>

                        <div>
                            <img className="logos" src="/src/assets/asp.png" alt="" /> 
                            <p>Asp.Net Core</p>
                        </div>

                        <div>
                            <img className="logos" src="/src/assets/jwt.svg" alt="" /> 
                            <p>JWT</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Data Base</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src="/src/assets/sql.webp" alt="" /> 
                            <p>SQL Server Management</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Others</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src="/src/assets/git.png" alt="" /> 
                            <p>Git</p>
                        </div>

                        <div>
                            <img className="logos" src="/src/assets/vercel.png" alt="" /> 
                            <p>Vercel</p>
                        </div>

                        <div>
                            <img className="logos" src="/src/assets/render.avif" alt="" /> 
                            <p>Render</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}