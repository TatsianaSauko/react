import './App.css';
import React from 'react';
import InputField from './components/InputField';
import ListData from './components/ListData';
import ButtonError from './components/ButtonError';
import ErrorBoundary from './components/ErrorBoundary';

type Props = {};

interface State {
  dataInput: string;
  dataApi: ItemApi[];
  isLoading: boolean;
}

interface ItemApi {
  id: number;
  name: string;
  image: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataInput: '',
      dataApi: [],
      isLoading: false,
    };
  }

  async getDate() {
    this.setState({ isLoading: true });
    let response;
    if (localStorage.getItem('state')) {
      const value = localStorage.getItem('state');
      response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${value}&page=1`
      );
    } else {
      response = await fetch(`https://rickandmortyapi.com/api/character/`);
    }
    const data = await response.json();
    this.setState({
      dataInput: this.state.dataInput,
      dataApi: data.results,
      isLoading: false,
    });
  }
  componentDidMount() {
    this.getDate();
  }

  handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('state', this.state.dataInput);
    this.getDate();
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <ButtonError />
          <span className="head">The Rick and Morty API</span>
          <InputField
            setInfo={(data) => this.setState(data)}
            handlerAdd={this.handlerAdd}
          />
          {this.state.isLoading ? (
            <div className="loader__box">
              <div className="loader"></div>
            </div>
          ) : (
            <ListData prop={this.state.dataApi} />
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
