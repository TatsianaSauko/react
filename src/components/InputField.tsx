import React, { ChangeEvent } from 'react';
import './styles.css';
import ListData from './ListData';

// interface Props {
//   prop: string,
// }

interface State {
  inputInfo: string;
  dataInfo: [
    {
      id: number;
      name: string;
      img: string;
    },
  ];
}

class InputField extends React.Component<'', State> {
  constructor(props) {
    super(props);
    this.state = {
      inputInfo: '',
      dataInfo: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.getSearchOptions = this.getSearchOptions.bind(this);
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      inputInfo: e.target.value.trim(),
      dataInfo: this.state.dataInfo,
    });
  };
  // async getSearchOptions(e: React.FormEvent) {
  async getSearchOptions() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.inputInfo}&page=1`
      );
      const data = await response.json();
      localStorage.setItem('state', this.state.inputInfo);
      this.setState({
        inputInfo: '',
        dataInfo: data.results.map((elem) => [elem.id, elem.name, elem.image]),
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log('Перезагружается');
    return (
      <>
        <section className="input">
          <input
            type="text"
            value={this.state.inputInfo}
            placeholder="Enter a name"
            className="input__box"
            onChange={this.onInputChange}
          />
          <button className="input_submit" onClick={this.getSearchOptions}>
            search
          </button>
        </section>
        <ListData prop={this.state.dataInfo} />
      </>
    );
  }
}

export default InputField;
