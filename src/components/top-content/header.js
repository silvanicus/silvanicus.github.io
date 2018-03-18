const data = require('../data.json');
import React, {Component} from 'react';
import Form from './form.js';

function Social(){
    let list = data.social.map( social => <li><a className={social.name} href={social.url} target='_blank'>{social.name}</a></li>)
    return(
        <ul className="social">{list}</ul>
    )
}
class Header extends React.Component{
    render(){
        const styles = {
          content: {
            background: 'crimson',
            padding: '3% 3% 2%',
            color: 'white',
            position: 'relative',
            textAlign: 'center'
          },
          avatar:{
            borderRadius: '50%',
            width: 100,
            height: 100,
            display: 'inline-block',
            marginBottom: '1rem',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(68, 68, 68, 0.6)',
            img:{
              width: '100%'
            }
          }

        }
        return (
            <section className='content-title' style={styles.content}>
                <div className='avatar' style={styles.avatar}>
                    <img
                        className="avatar-img"
                        src={this.props.avatar.url}
                        alt={this.props.avatar.alt}
                        style={styles.avatar.img}
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
