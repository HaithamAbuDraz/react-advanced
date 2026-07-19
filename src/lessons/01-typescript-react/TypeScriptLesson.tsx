import UserCard from './components/UserCard';

function TypeScriptLesson() {
  const user = {
    id: 1,
    name: 'Haitham',
    email: 'haithamabudraz@gmail.com',
    isAdmin: true,
  };

  return (
    <div>
      <h1>TypeScript with React</h1>

      <UserCard user={user} />
    </div>
  );
}

export default TypeScriptLesson;
