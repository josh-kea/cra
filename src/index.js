import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Footer = () => {
    return <footer>&copy; 2019</footer>
};

function App(){
    return (
        <div id="App">
            <Header />
            <Header />
            <Header />
            <Person name="JOSHUA!!!!!!"></Person>
            <Person name="Nek Minnit"/>
            <Footer />
        </div>
    );
}

function Header(){
        return (
            <header>
                <h1>This is a header</h1>
            </header>
        )
}

function Person(props){
    return (
        <article>
            <h1>{props.name}</h1>
            <p>Hi Mother!</p>
        </article>
    );
}


//JSX, we are mixing javascript and HTML --!!
ReactDOM.render(<App />, document.getElementById('root'));

