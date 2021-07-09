import AddCommet from './components/addComment/addComment'
import Comment from './components/comment/comment'
import './App.css';


import React, { Component } from 'react'

export default class App extends Component {

  state = {
    comments: [],
    commentValue: "",
    vote: 0
  }



  ratingChanged = (newRating) => {
    this.setState({ vote: newRating });
  };

  handleChange = (event) => {
    this.setState({ commentValue: event.target.value });
  }

    handleComment = () => {

    const newState = this.state;

    newState.comments.push({
      text: this.state.commentValue,
      vote: this.state.vote
    });

    newState.commentValue = "";
    newState.vote = 0;

    this.setState({
      ...newState
    });

  }

  render() {

    
    return (
      <div>
        <Comment comments={this.state.comments}></Comment>
        <AddCommet handleComment={this.handleComment} ratingChanged={this.ratingChanged} handleChange={this.handleChange}></AddCommet>

      </div>
    )
  }
}

