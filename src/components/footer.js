import React, {Component} from 'react';


class Footer extends React.Component {
  render(){
    return(
        <footer>
          <p className='copy'>{this.props.copy}</p>
          <p className='site-info'>{this.props.site}</p>
        </footer>
    )
  }
}

export default Footer;
