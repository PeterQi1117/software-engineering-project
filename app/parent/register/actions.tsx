'use server'
 
import client from "@/prismadb";

export async function myAction(firstName: string, lastName: string, email: string) {
    try {
        const response = await client.user.create({
            data: {
                firstName,
                lastName,
                email
            }
        });

        console.log(response);
        
    } catch (error) {
        console.error(error);
    }
}