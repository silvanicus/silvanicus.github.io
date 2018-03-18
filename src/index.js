const React = require('react');
const ReactDOM = require('react-dom');
const data = require('./components/data.json');
import Header from './components/header.js'
import Footer from './components/footer.js'



function Main(props){
    const tech = data.tech.map( item => <li key={item.toString()}>{item}</li>)
    const calendar = data.calendar.map( item => <li key={item.toString()}>{item.name}<span> {item.date}</span></li>)
    return(
        <section className="main">
            <div className="aside">
                <h3>Tech Stack</h3>
                <ul className="tech">{tech}</ul>
                <h3>Calendar</h3>
                <ul className="calendar">{calendar}</ul>
            </div>
            <div className="projects"></div>
        </section>
    )
}

class Template extends React.Component {
    render() {
        return <div className="content">
            <Header name={data.name} title={data.title} desc={data.desc} avatar={data.avatar}/>
            <Main/>
            <Footer copy={data.footer} site={data.site} />
        </div>;
    }
}

ReactDOM.render(
    <Template/>,
    document.getElementById('app')
);

const form = document.getElementById('form');
form.onsubmit = function(event){
  let res = document.getElementById('result');
  res.innerHTML = `Thanks ${form.email.value}! I'll be in touch`;
  form.reset();
}
