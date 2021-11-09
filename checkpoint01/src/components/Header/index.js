import './style.scss';

const Header = ({  }) => {
    return (
            <header className="sticky-top">
                <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                    <div className="container-fluid">
                    
                    <a className="navbar-brand" href="#">Checkpoint01</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample01" >
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Banner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Projetos</a>
                            </li>                        
                        </ul>
                        
                    </div>
                    </div>
                </nav>
            </header>
    );
}

export default Header;