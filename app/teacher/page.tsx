import Image from "next/image";
import client from "@/prismadb";

async function getAllUsers() {
  const users = await client.user.findMany();

  return {
    users,
  };
}

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
