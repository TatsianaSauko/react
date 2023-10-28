import React from 'react';

interface Props {
  prop: ItemApi[];
}

interface ItemApi {
  id: number;
  name: string;
  image: string;
}

interface State {
  dataApi: ItemApi[];
}

class ListData extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dataApi: this.props.prop,
    };
  }

  render() {
    return (
      <ul className="cards">
        {this.props.prop.map((item) => (
          <li key={item.id} className="card">
            <div className="card__title">{item.name} </div>
            <img src={item.image} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListData;
