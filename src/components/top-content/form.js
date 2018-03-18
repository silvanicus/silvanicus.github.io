import React, {Component} from 'react';

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
export default Form;
