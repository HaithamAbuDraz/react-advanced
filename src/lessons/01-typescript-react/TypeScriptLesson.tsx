import Button from './components/Button';

function TypeScriptLesson() {
  return (
    <div>
      <h1>TypeScript with React</h1>
      <h2>Button (with optional color)</h2>
      <Button text='Default Blue' />
      <Button text='Red Button' color='red' />
    </div>
  );
}

export default TypeScriptLesson;
