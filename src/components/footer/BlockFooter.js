import React from 'react';

class BlockFooter extends React.Component{
  render(){
    return(
      <div className="footer__block">
            <div className="block__title">
                <h2>hot offers</h2>
            </div>
            <div className="block__description font-ubuntu-light">
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hend.</p>
            </div>
            <div className="block__list font-ubuntu-light">
              <ul>
                <li><i className="fas fa-caret-right">Vestibulum ante ipsum primis in faucibus orci luctus</i></li>
                <li><i className="fas fa-caret-right">Nam elit magna hendrerit sit amet tincidunt ac</i></li>
                <li><i className="fas fa-caret-right">Quisque diam lorem interdum vitae dapibus ac scele</i></li>
                <li><i className="fas fa-caret-right">Donec eget tellus non erat lacinia fermentum</i></li>
                <li><i className="fas fa-caret-right">Donec in velit vel ipsum auctor pulvin</i></li>
              </ul>
            </div>
      </div>
    )
  }
}

export default BlockFooter
