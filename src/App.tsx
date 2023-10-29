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
  isError: boolean;
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
      isError: false,
    };
    this.clickButtonError = this.clickButtonError.bind(this);
  }

  async getDate() {
    this.setState({ isLoading: true });
    let value: string | null = this.state.dataInput.trim();
    if (localStorage.getItem('state')) {
      value = localStorage.getItem('state');
    }
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&page=1`
    );
    const data = await response.json();
    this.setState({ dataInput: this.state.dataInput, dataApi: data.results });

    this.setState({ isLoading: false });
  }
  componentDidMount() {
    this.getDate();
  }

  handlerAdd = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('state', this.state.dataInput);
    this.getDate();
  };
  clickButtonError() {
    this.setState({ dataInput: 'dfsdfsd' });
    localStorage.setItem('state', 'dfsdfsd');
    this.getDate();
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <ButtonError clickButtonError={this.clickButtonError} />
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
