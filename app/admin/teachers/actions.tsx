
import client from "@/prismadb";

interface TeacherData {
    id: number;
    email: string;
    phone: string;
    address: string;
}

async function addTeacher(teacherData: TeacherData) {
    const { id, email, phone, address } = teacherData;
}