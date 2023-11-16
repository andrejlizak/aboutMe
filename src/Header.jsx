import './Header.scss';

function Header(){

    return(
        <header>
            <h1>Andrej <br></br>Lizák</h1>
            <p>I am an ambitious I. degree software engineer student of <br></br>
            Technical University of Košice, who <br></br>
            loves to build new projects and learn on daily basis. <br></br>
            I am looking forward to new coding challenges of <strong>all kinds!</strong>
            </p>
            <button class="btn download">
                DOWNLOAD CV
            </button>

            <button class ="btn discover">
                DISCOVER MORE
            </button>

        </header>
    );
}

export default Header