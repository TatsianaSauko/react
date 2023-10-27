import './App.css';
import InputField from './components/InputField';
import React from 'react';

class App extends React.Component<'', ''> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputInfo: '',
  //   };
  // }

  // async componentDidMount() {
  //   if (localStorage.getItem('state')) {
  //     this.setState({inputInfo: localStorage.getItem('state')});
  //   }
  //   else {
  //     const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  //     const data = await response.json();
  //     this.setState({ inputInfo: this.state.inputInfo});
  //     console.log(this.state.inputInfo);
  //     console.log(this.state.dataInfo);
  //   }
  // }

  render() {
    return (
      <div className="App">
        <span className="head">The Rick and Morty API</span>
        <InputField />
      </div>
    );
  }
}

export default App;
