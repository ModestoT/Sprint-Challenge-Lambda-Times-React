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
  //method used to move the carousel array to the left
  leftClick = () => {
    let counter = this.state.index -1; //variable used to track the index of the img in the carousel
    let length = this.state.imgs.length; //variable used to track the length of the carousel array

    //if the index of the carousel is not valid reset the index to the last spot in the array
    if(counter < 0) {
      counter=length -1
    } 
    this.setState({index: counter})
  }

  //method used to move the carousel array to the right
  rightClick = () => {
    let counter = this.state.index +1;
    
    //if the index of the carousel is not valid reset the index to the start of the array
    if(!this.state.imgs[counter] ) {
      counter = 0;
    }
    this.setState({index: counter});
  }

  //method used to select the correct img based on where the user is in the carousel array 
  selectedImage = () => {
    return <img src={this.state.imgs[this.state.index]} style={{display: 'block'}} alt="carousel-img"/>
  }

  //automaticly scrolls the carousel without user input
  autoScroll = () => {
    let counter = this.state.counter;//variable used to keep track of the index in the array
    let scroll = this.state.autoscroll;//variable used to check if it needs to keep scrolling
    
    //if the scroll variable is true add to the counter to keep increasing the spot it is at in the array of imgs
    if(scroll=== true){
      counter++;
      //if the counter reaches a point in the array that is not valid reset it to the start of the array
      if(!this.state.imgs[counter] ) {
        counter = 0;
      }
      this.setState({index: counter, counter: counter});
    } 
  }

  //method used to stop the autoScrolling based on where the users mouse is
  updateScroll = () => {
    this.setState({autoscroll: !this.state.autoscroll})
  }
  
  //sets the initial set of Data for the component
  componentDidMount(){
    this.setState({imgs: carouselData});

    //runs the autoScroll method every 3.5 seconds
    setInterval(this.autoScroll, 3500)
  }

  componenetWillUnmount() {
    this.autoScroll();
}
  
  render(){
    // console.log(`counter: ${this.state.counter}`);
    // console.log(`index: ${this.state.index}`);
    // console.log(`scroll: ${this.state.autoscroll}`)
    return (
      <div onMouseEnter={this.updateScroll} onMouseLeave={this.updateScroll} className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}