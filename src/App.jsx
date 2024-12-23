import React, { Component } from "react"; // Page 634 answer

class App extends Component {
  state = {
    textarea: ''
  };

  constructor(props) {
    super(props);
    this.state = {field: "", submitDisabled: true};
  }

  updateLengthOfText(event) {
    const field = event.target.value;
    this.setState({field}, () => {
      this.validateLengthOfText();
    });
  }

  renderLengthOfText() {
    return <p>{`${this.state.field.length} character(s)!`}</p>
  }

  validateLengthOfText() {
    if (this.state.submitDisabled && this.state.field.length > 100) {
      this.setState({submitDisabled: false});
    }
    else if (this.state.submitDisabled && this.state.field.length <= 100) {
      this.setState({submitDisabled: true});
    }
  }

  submitForm() {
    alert("Submitting the blog post.");
  }

  render(){
    return (
      <div className="App">
        <h2>Blog Post Writer</h2>
        <hr />
        <strong>Write your post here</strong>
        <br/>
        <small>Must be at least 100 characters!</small>
        <br/>
        <textarea cols="80" rows="25" onChange={this.updateLengthOfText.bind(this)}></textarea>
        {this.renderLengthOfText()}
        <br/>
        <button disabled={this.state.submitDisabled} onClick={this.submitForm}>Submit Post</button>
      </div>
    );
  }

}
export default App;