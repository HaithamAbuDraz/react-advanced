import type { User } from '../types/User';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>

      <p>{user.email}</p>

      <p>{user.isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}

export default UserCard;
