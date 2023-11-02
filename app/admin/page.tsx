import client from "@/prismadb";

export default async function Dashboard() {

  const users = await client.user.findMany();

    return (
      <div>
        <h2>My Amazing App</h2>
      </div>
    );
  }
