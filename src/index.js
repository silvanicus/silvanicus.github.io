const React = require('react');
const ReactDOM = require('react-dom');
const data = require('./data.json');



const headerStyle = {
    background: 'crimson',
    padding: '3% 3% 2%',
    color: 'white',
    position: 'relative',
};

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btn: 'Want to know more?',
            labelName: 'What"s your name?',
            labelEmail: 'What"s your email?'
        };
    }

    render() {
        return <section className='form'>
            <a className='btn'>{this.state.btn}</a>
            <div className="form">
                <form>
                    <label>{this.state.labelName}</label>
                    <input placeholder='Name'/>
                    <label> {this.state.labelEmail}</label>
                    <input placeholder='Email'/>
                </form>
            </div>
        </section>;
    }
}

function Social(){
    let list = data.social.map( social => <li><a className={social.name} href={social.url} target='_blank'>{social.name}</a></li>)
    return(
        <ul className="social">{list}</ul>
    )
}
class Header extends React.Component{
    render(){
        return (
            <section className='content-title'>
                <div className='avatar'>
                    <img
                        className="avatar-img"
                        src={this.props.avatar.url}
                        alt={this.props.avatar.alt}
                    />
                </div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <Form/>
                <Social/>
            </section>
        )
    }
}


function Main(props){
    let tech = data.tech.map( item => <li>{item}</li>)
    let calendar = data.calendar.map( item => <li>{item.name}<span> {item.date}</span></li>)
    return(
        <section className="main">
            <div className="aside">
                <ul className="tech">{tech}</ul>
                <ul className="calendar">{calendar}</ul>
            </div>
            <div className="projects"></div>
        </section>
    )
}

function Footer(props){
    return(
        <p className='copy'>{props.copy}</p>
    )
}

class Template extends React.Component {
    render() {
        return <div className="content">
            <Header name={data.name} title={data.title} desc={data.desc} avatar={data.avatar}/>
            <Main/>
            <Footer copy={data.footer} />
        </div>;
    }
}

ReactDOM.render(
    <Template/>,
    document.getElementById('app')
);