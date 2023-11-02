'use client'

import { useState, useEffect } from 'react';
import client from "@/prismadb";

async function getAllTeachers() {
    return await client.user.findMany({
        where: {
            teacherId: {
                not: null
            }
        },
        include: {
            teacher: true
        }
    });
}

function UsersPage() {
    

}

export default UsersPage;
