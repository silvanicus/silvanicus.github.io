import React, {Component} from 'react';
const data = require('./data.json');

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btn: 'Want to know more?',
            labelEmail: 'What"s your email?',
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return <section className='form'>
            <a className='btn'>{this.state.btn}</a>
            <div className="form">
                <form id="form" action="https://formspree.io/silvana.ramirez85@gmail.com" method="POST">
                    <label> {this.state.labelEmail}
                      <input id="email" type="email" name="email" required/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div id="result"></div>
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
            </section>
        )
    }
}
export default Header;
