import './style.css';

const Header = ({empresa}) => {
    return(
        <header id="header">
            <h1>{empresa}</h1>
            <nav>
                <ul>
                    <li><a href="valorant">Valorant</a></li>
                    <li><a href="galeria">Videos</a></li>
                    <li><a href="footer">Footer</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;