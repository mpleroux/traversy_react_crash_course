const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sarah'];
  const loggedIn = true;
  const styles = {
    color: 'blue',
    fontSize: '28px',
  };

  // if (loggedIn) {
  //   return <h1>Hello Member</h1>;
  // }

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: 'red', fontSize: '24px' }}>Hello {name}</p>
      <p style={styles}>
        The sum of {x} and {y} equals {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
      {/* short-circuiting, show heading if loggedIn is true */}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
