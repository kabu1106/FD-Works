import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceIncludeSchema } from '../inputTypeSchemas/AttendanceIncludeSchema'
import { AttendanceWhereUniqueInputSchema } from '../inputTypeSchemas/AttendanceWhereUniqueInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttendanceSelectSchema: z.ZodType<Prisma.AttendanceSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  type: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const AttendanceDeleteArgsSchema: z.ZodType<Prisma.AttendanceDeleteArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: z.lazy(() => AttendanceIncludeSchema).optional(),
  where: AttendanceWhereUniqueInputSchema, 
}).strict();

export default AttendanceDeleteArgsSchema;
