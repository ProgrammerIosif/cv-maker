import React,{ Component } from 'react';
import './App.css';
import CV from './components/cv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'edit'
    };
  }

  render() {
    return (
      <div className="App">
        <button onClick={(() => this.setState({mode: this.state.mode === 'prewiev' ? 'edit' : 'prewiev'}))}>asdfas</button>
        {console.log(this.state.mode)}
        <CV mode={this.state.mode}/>
      </div>
    );
  }
}

export default App;
