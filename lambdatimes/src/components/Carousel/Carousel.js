import React from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgs: [],
      index: 0,
      counter: 0,
      autoscroll: true
    }
  }

  leftClick = () => {
    let counter = this.state.index -1;
    let length = this.state.imgs.length;

    if(counter < 0) {
      counter=length -1
    } 
    this.setState({index: counter})
  }

  rightClick = () => {
    let counter = this.state.index +1;
    if(!this.state.imgs[counter] ) {
      counter = 0;
    }
    this.setState({index: counter});
  }

  selectedImage = () => {
    return <img src={this.state.imgs[this.state.index]} style={{display: 'block'}} alt="carousel-img"/>
  }

  autoScroll = () => {
    let counter = this.state.counter;
    let scroll = this.state.autoscroll;
 
    if(scroll=== true){
      counter++;
      if(!this.state.imgs[counter] ) {
        counter = 0;
      }
      this.setState({index: counter, counter: counter});
    } 
  }

  updateScroll = () => {
    this.setState({autoscroll: !this.state.autoscroll})
  }
  
  componentDidMount(){
    this.setState({imgs: carouselData});

    setInterval(this.autoScroll, 3500)
  }

  componenetWillUnmount() {
    this.autoScroll();
}
  
  render(){
    // console.log(`counter: ${this.state.counter}`);
    // console.log(`index: ${this.state.index}`);
    console.log(`scroll: ${this.state.autoscroll}`)
    return (
      <div onMouseEnter={this.updateScroll} onMouseLeave={this.updateScroll} className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}