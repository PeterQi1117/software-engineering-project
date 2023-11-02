/*
  Warnings:

  - You are about to drop the `ClassroomEnrollment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassroomTeacher` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[teacherId]` on the table `Classroom` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ClassroomEnrollment" DROP CONSTRAINT "ClassroomEnrollment_childId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomEnrollment" DROP CONSTRAINT "ClassroomEnrollment_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomTeacher" DROP CONSTRAINT "ClassroomTeacher_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomTeacher" DROP CONSTRAINT "ClassroomTeacher_teacherId_fkey";

-- AlterTable
ALTER TABLE "Child" ADD COLUMN     "classroomId" INTEGER;

-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "teacherId" INTEGER;

-- DropTable
DROP TABLE "ClassroomEnrollment";

-- DropTable
DROP TABLE "ClassroomTeacher";

-- CreateTable
CREATE TABLE "FacilityAdmin" (
    "id" SERIAL NOT NULL,
    "facilityId" INTEGER NOT NULL,

    CONSTRAINT "FacilityAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classroom_teacherId_key" ON "Classroom"("teacherId");

-- AddForeignKey
ALTER TABLE "Child" ADD CONSTRAINT "Child_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityAdmin" ADD CONSTRAINT "FacilityAdmin_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
