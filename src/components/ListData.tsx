import React from 'react';

interface Props {
  prop: [
    {
      id: number;
      name: string;
      img: string;
    },
  ];
}

class ListData extends React.Component<Props, ''> {
  render() {
    return (
      <ul key={Date.now()}>
        {this.props.prop.map((item) => (
          <li key={item[0]}>
            <div>{item[1]}</div>
            <img src={item[2]} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListData;
