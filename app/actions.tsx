import client from "@/prismadb";


export async function getAllUsers() {
    const users = await client.user.findMany();
  
    return {
      users,
    };
  }
  