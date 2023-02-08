import React,{ Component } from 'react';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className='field'>
        {this.props.mode === 'edit' ? <input type="text" value={this.state.text} onChange={this.handleChange}></input> : <p>{this.state.text}</p>}
        {console.log(this.props.mode)}
      </div>
    );  
  }
}

export default Field;