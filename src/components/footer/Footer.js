import React from 'react';
import BlockFooter from './BlockFooter'
import BlockFooterInfo from './BlockFooterInfo'


class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
                <BlockFooter/>
                <BlockFooter/>
                <BlockFooterInfo/>
      </footer>
    )
  }
}

export default Footer
