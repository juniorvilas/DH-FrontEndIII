import './style.scss';



const Projetos = ({children}) => {
    return (
        <>
        <div id="titulo-projetos"><h2>Projetos</h2></div>        
        <section id="projetos" className="projetos">    
                         
            {children}            
        </section>
        </>           
    )
}

export default Projetos;