import { useState, useEffect } from 'react';
import client from "@/prismadb";

async function getAllUsers() {
    return await client.user.findMany();
  }
  

async function UsersPage() {
    const users = await getAllUsers();

    return (
        <div>
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* add any other user property headers here */}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                            {/* add any other user property cells here */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersPage;
