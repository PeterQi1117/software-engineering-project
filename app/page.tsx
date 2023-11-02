import Image from "next/image";
import { getAllUsers } from "./actions";

export default async function Home() {
  
  const { users } = await getAllUsers();

  return (
    <div>
      <p>Users:</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
