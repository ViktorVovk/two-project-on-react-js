import React from 'react';

class CardWrap extends React.PureComponent{
  constructor(props){
      super(props)
      this.state={
        ClassNewProduct: this.props.item.new?"item__new": "new-product hidden",
        SaleProductClass: this.props.item.discountCost === null?"item__sale hidden":"item__sale",
        DiscountProductClass: this.props.item.discountCost === null?"price__discount hidden":"price__discount"
      }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      ClassNewProduct: nextProps.item.new?"item__new": "new-product hidden",
      SaleProductClass: nextProps.item.discountCost === null?"item__sale hidden":"item__sale",
      DiscountProductClass: nextProps.item.discountCost === null?"price__discount hidden":"price__discount"
    })
  }

  render(){
    return(
      <article className="products__item">
        <div className="item__img">
          <a href="#"><img src={`.${this.props.item.img}`} alt="Foto Product"/></a>
          <div className={this.state.SaleProductClass}>sale</div>
          <div className={this.state.ClassNewProduct}>New</div>
        </div>
        <div className="item__title">
          <a href="#"><h1>{this.props.item.title}</h1></a>
        </div>
        <div className="item__description font-ubuntu-light">
          <p>{this.props.item.description}</p>
        </div>
        <div className="item__price">
          <div className="price__coast">
            <p>{`$${this.props.item.cost}.00`}</p>
          </div>
          <div className={this.state.DiscountProductClass}>
            <p>{`$${this.props.item.discountCost}.00`}</p>
          </div>
        </div>
        <div className="item__button-block">
          <button className="button__add button-style" type="button" name="button">Add to cart</button>
          <button className="button__wiew button__wiew-style button-style" type="button" name="button">View</button>
        </div>
      </article>

    )
  }
}

export default CardWrap
