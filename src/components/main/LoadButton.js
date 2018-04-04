import React from 'react';


class LoadButton extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      hiddenButtonClass: this.props.hiddenButton?"hidden":"",
      disabledbutton: this.props.loadButtonAnimate && "disabled",
      loadButtonAnimate: this.props.loadButtonAnimate?"products__load-button-Animate":"",
      textContent: this.props.loadButtonAnimate?"Load...":"Load More"
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      hiddenButtonClass: nextProps.hiddenButton? "hidden":"",
      disabledbutton: nextProps.loadButtonAnimate && "disabled",
      loadButtonAnimate: nextProps.loadButtonAnimate?"products__load-button-Animate":"",
      textContent: nextProps.loadButtonAnimate?"Load...":"Load More"
    })

  }
  render(){
    return(
          <button className={`products__load-button button-style ${this.state.hiddenButtonClass}  ${this.state.loadButtonAnimate}`} type="button" onClick={this.props.OnClickChange} name="button" disabled={this.state.disabledbutton}>{this.state.textContent}</button>
    )
  }
}

export default LoadButton
