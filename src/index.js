import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Footer = () => {
    return <footer>&copy; 2019</footer>
};

function App(){
    const data = {
        age:22,
        skills:["a", "b"]
    }
    return (
        <div id="App">
            <Header />
            <Header />
            <Header />
            <Person mydata={data} name="JOSHUA!!!!!!" />
            <Person mydata={data} name="Nek Minnit"/>
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
            <p>I'm {props.mydata.age}</p>
            <Skills skills = {props.mydata.skills}/>
        </article>
        
    );
}

function Skills(props){
    return (
        <ul>
            <li>Skills here</li>
        </ul>
    )
}


//JSX, we are mixing javascript and HTML --!!
ReactDOM.render(<App />, document.getElementById('root'));

