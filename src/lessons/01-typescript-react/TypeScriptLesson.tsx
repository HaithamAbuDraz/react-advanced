function TypeScriptLesson() {
  const name: string = 'Haitham';

  const age: number = 20;

  const isDeveloper: boolean = true;

  return (
    <div>
      <h1>TypeScript with React</h1>

      <p>Name: {name}</p>

      <p>Age: {age}</p>

      <p>
        Developer:
        {isDeveloper ? ' Yes' : ' No'}
      </p>
    </div>
  );
}

export default TypeScriptLesson;
