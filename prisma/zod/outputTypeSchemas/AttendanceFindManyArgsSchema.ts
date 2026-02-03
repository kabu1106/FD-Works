import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceIncludeSchema } from '../inputTypeSchemas/AttendanceIncludeSchema'
import { AttendanceWhereInputSchema } from '../inputTypeSchemas/AttendanceWhereInputSchema'
import { AttendanceOrderByWithRelationInputSchema } from '../inputTypeSchemas/AttendanceOrderByWithRelationInputSchema'
import { AttendanceWhereUniqueInputSchema } from '../inputTypeSchemas/AttendanceWhereUniqueInputSchema'
import { AttendanceScalarFieldEnumSchema } from '../inputTypeSchemas/AttendanceScalarFieldEnumSchema'
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

export const AttendanceFindManyArgsSchema: z.ZodType<Prisma.AttendanceFindManyArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: z.lazy(() => AttendanceIncludeSchema).optional(),
  where: AttendanceWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(), AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema, AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default AttendanceFindManyArgsSchema;
