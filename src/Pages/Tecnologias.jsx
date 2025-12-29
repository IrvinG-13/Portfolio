import reactlogo from '../assets/reactlogo.png'
import figmalogo from '../assets/Figma-logo.svg.png'
import clogo from '../assets/c.png'
import asplogo from '../assets/asp.png'
import jwtlogo from '../assets/jwt.svg'
import sqllogo from '../assets/sql.webp'
import gitlogo from '../assets/git.png'
import vercellogo from '../assets/vercel.png'
import renderlogo from '../assets/render.avif'


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
                            <img className="logos" src={reactlogo} alt="" /> 
                            <p>React</p>
                        </div>

                        <div>
                            <img className="logos" src={figmalogo} alt="" /> 
                            <p>Figma</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Back-End</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src={clogo} alt="" /> 
                            <p>C#</p>
                        </div>

                        <div>
                            <img className="logos" src={asplogo} alt="" /> 
                            <p>Asp.Net Core</p>
                        </div>

                        <div>
                            <img className="logos" src={jwtlogo} alt="" /> 
                            <p>JWT</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Data Base</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src={sqllogo} alt="" /> 
                            <p>SQL Server Management</p>
                        </div>
                    </div>
                </div>

                <div className="contSkills">
                    <h2>Others</h2>
                    <div className="tools">
                        <div>
                            <img className="logos" src={gitlogo} alt="" /> 
                            <p>Git</p>
                        </div>

                        <div>
                            <img className="logos" src={vercellogo} alt="" /> 
                            <p>Vercel</p>
                        </div>

                        <div>
                            <img className="logos" src={renderlogo} alt="" /> 
                            <p>Render</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}