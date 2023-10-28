import './App.css';
import React from 'react';
import InputField from './components/InputField';
import ListData from './components/ListData';

type Props= '';

interface State {
  dataInput: string;
  dataApi: ItemApi[];
}

interface ItemApi {
  id: number;
  name: string;
  image: string;
}

class App extends React.Component<'', State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataInput: '',
      dataApi: [],
    };
  }

  async getDate() {
    let value: string | null = this.state.dataInput.trim();
    if (localStorage.getItem('state')) {
      value = localStorage.getItem('state');
    }
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=1`
    );
    const data = await response.json();
    this.setState({dataInput: this.state.dataInput,
      dataApi: data.results,
    });
  }

  componentDidMount() {
    this.getDate();
  }

  handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.dataInput);
    localStorage.setItem('state', this.state.dataInput);
    this.getDate();
  };

  render() {
    return (
      <div className="App">
        <span className="head">The Rick and Monty API</span>
        <InputField
          setInfo={(data) => this.setState(data)}
          handlerAdd={this.handlerAdd}
        />
        <ListData prop={this.state.dataApi} />
      </div>
    );
  }
}

export default App;
