import React, { ChangeEvent } from 'react';
import './styles.css';

type Props = '';
type State = {
  apiInfo: string;
};
class InputField extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      apiInfo: '',
    };
    window.addEventListener('load', this.getLocalStorage);
    this.getSearchOptions();
  }

  getSearchOptions = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.apiInfo}&page=1`
    ).then((res) => res.json().then((data) => console.log(data)));
    if (this.state.apiInfo) {
      localStorage.setItem('state', this.state.apiInfo);
      this.setState({ apiInfo: '' });
    }
  };
  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ apiInfo: e.target.value.trim() });
  };
  getLocalStorage() {
    if (localStorage.getItem('state')) {
      const value = localStorage.getItem('state');
      console.log(value);
      this.setState({ apiInfo: value });
    }
  }
  componentDidMount() {
    console.log('Здесь последняя команда');
  }

  render() {
    return (
      <section className="input">
        <input
          type="text"
          value={this.state.apiInfo}
          placeholder="Enter a name"
          className="input__box"
          onChange={this.onInputChange}
        />
        <button className="input_submit" onClick={this.getSearchOptions}>
          search
        </button>
      </section>
    );
  }
}

export default InputField;
