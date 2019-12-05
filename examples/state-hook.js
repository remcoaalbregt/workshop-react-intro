const add = a => b => a + b;
const increment = add(1);

const Component = ({ prefix }) => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>{`${prefix}: ${count}`}</p>
      <button onClick={() => setCount(increment)}>Klik</button>
    </>
  )
};

render(<Component prefix="Aantal keer geklikt" />);