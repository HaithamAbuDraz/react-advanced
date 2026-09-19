import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState('Haitham');
  const [age, setAge] = useState(22);

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleChangeLiked(e: React.ChangeEvent<HTMLInputElement>) {
    setLiked(e.target.checked);
  }

  function incrementAge() {
    setAge(prevAge => prevAge + 1);
  }

  function decrementAge() {
    setAge(prevAge => prevAge - 1);
  }

  function handleSetAge() {
    const input = prompt('Enter your age');
    if (input === null || input === '') return;

    const parsed = Number(input);
    if (!Number.isFinite(parsed)) {
      alert('Please enter a valid number');
      return;
    }

    setAge(parsed);
  }

  return (
    <>
      <input value={text} onChange={handleChangeText} />
      <p>Your current value is: {text}</p>

      <hr />

      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChangeLiked}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>

      <hr />

      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={incrementAge}>Increment age</button>
      <button onClick={decrementAge}>Decrement age</button>
      <button onClick={handleSetAge}>Set age</button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}