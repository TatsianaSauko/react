import React from 'react';

interface Props {
  prop: ItemApi[];
}

interface ItemApi {
  id: number;
  name: string;
  image: string;
}

class ListData extends React.Component<Props, never> {
  constructor(props: Props) {
    super(props);
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
