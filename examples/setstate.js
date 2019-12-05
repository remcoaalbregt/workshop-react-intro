const add = a => b => a + b;
const increment = add(1);

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    const count = this.state.counter;

    return (
        <>
          <p>{`${this.props.prefix}: ${count}`}</p>
          <button onClick={() => this.setState({ counter: increment(count) })}>Klik</button>
        </>
    )
  }
}

render(<Component prefix="Aantal keer geklikt" />);