import React, { Component } from 'react';
import './App.css';
import TextBox from './components/textBox';
import Button from './components/button';
import Share from './components/share';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: '',
      quoteAuthor: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://favqs.com/api/qotd')
    .then(response => response.json())
    .then(data => this.setState({ quoteText: data.quote.body, quoteAuthor: data.quote.author }));
  }

  loadNewQuote = () => {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper" id="quote-box">
        <TextBox quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor}/>
        <Button loadNewQuote={this.loadNewQuote}/>
        <Share quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor}/>
        </div>
      </div>
    );
  }
}

export default App;
