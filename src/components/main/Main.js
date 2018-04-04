import React from 'react';
import CardWrap from './CardWrap'
import LoadButton from './LoadButton'


 // entities - массив где храняться карточки товара которые отображенны на страничке!
 // nextEntities - дозагружаемые карточки товара
 // img - название и путь фото товара
 // totalEntities - общее количество карточек товаров
 // perPage - сколько карточек товара загружаеться за один раз (одно нажатие на кнопку)
 // page - указывает на номер "порции" загружаемых товаров ()
 // loaded - указывает на состояние загрузки. true - товар загрузился false - загружаеться!
 // loadButtonAnimate - состояние кнопки при загрузке. true - кнопка находиться в состоянии загрузки, появляеться анимация, и button получает атрибут disabled
 // hiddenButton - когда true кнопка исчезает. становиться  true когда на страничке отрендерены все карточки товара!


class Main extends React.Component{
  constructor(props){
    super(props)
    this.state={
      entities: [],
      nextEntities: [],
      img: "",
      totalEntities: null,
      perPage: 4,
      page: 1,
      loaded: false,
      loadButtonAnimate: true,
      hiddenButton: false
    }
    this.OnClickChange = this.OnClickChange.bind(this)
  }


  componentDidMount(){
    fetch(`http://localhost/list.php?page=${this.state.page}&per_page=${this.state.perPage}`)
      .then(response=>response.json())
      .then(data => {
        this.setState({
          entities: data.entities,
          totalEntities: data.total,
          loaded: true,
          loadButtonAnimate: false,
          page: this.state.page+1
        })
      })
  }

  componentWillMount() {
    setTimeout(()=>{
      fetch(`http://localhost/list.php?page=${this.state.page+1}&per_page=${this.state.perPage}`)
        .then(response=>response.json())
        .then(data => {
          this.setState({
            nextEntities: data.entities,
            page: this.state.page+1
          })
        })
    },0)
  }

  shouldComponentUpdate(nextProps, nextState){
        if (nextState.entities === this.state.entities && nextState.loadButtonAnimate === this.state.loadButtonAnimate) return false
        return true
  }

  OnClickChange(event){
    if(this.state.loaded){
      this.setState({
          entities: [...this.state.entities,...this.state.nextEntities],
          nextEntities: [],
          loaded: false,
          loadButtonAnimate: false,
      })
      if(this.state.page <= Math.ceil(this.state.totalEntities/this.state.perPage)){
        fetch(`http://localhost/list.php?page=${this.state.page}&per_page=${this.state.perPage}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
                nextEntities: this.state.loadButtonAnimate===true? []: data.entities,
                entities: this.state.loadButtonAnimate===true? [...this.state.entities,...data.entities]: this.state.entities,
                page: this.state.page + 1,
                loaded: true,
                loadButtonAnimate: false,
                hiddenButton: this.state.totalEntities===this.state.entities.length+data.entities.length?true:false,
              })
            })
      }
    } else {
            this.setState({
              loadButtonAnimate: true,
            })
            if(this.state.page+1 <= Math.ceil(this.state.totalEntities/this.state.perPage)){
              fetch(`http://localhost/list.php?page=${this.state.page+1}&per_page=${this.state.perPage}`)
              .then(response => response.json())
              .then(data => {
                this.setState({
                  nextEntities: data.entities,
                  page: this.state.page + 1,
                })
              })
            }
   }
  }

  render(){
  return(
      <main className="main">
              <div className="products">
                  {this.state.entities.map((item, index) => {
                    return <CardWrap key={index+1} item={item}/>
                  })}
              </div>
              <LoadButton OnClickChange={this.OnClickChange} hiddenButton={this.state.hiddenButton} loadButtonAnimate={this.state.loadButtonAnimate}/>
      </main>
    )
  }
}

export default Main
