import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AttendanceEventIncludeSchema } from '../inputTypeSchemas/AttendanceEventIncludeSchema'
import { AttendanceEventWhereInputSchema } from '../inputTypeSchemas/AttendanceEventWhereInputSchema'
import { AttendanceEventOrderByWithRelationInputSchema } from '../inputTypeSchemas/AttendanceEventOrderByWithRelationInputSchema'
import { AttendanceEventWhereUniqueInputSchema } from '../inputTypeSchemas/AttendanceEventWhereUniqueInputSchema'
import { AttendanceEventScalarFieldEnumSchema } from '../inputTypeSchemas/AttendanceEventScalarFieldEnumSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AttendanceEventSelectSchema: z.ZodType<Prisma.AttendanceEventSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  type: z.boolean().optional(),
  occurredAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const AttendanceEventFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AttendanceEventFindFirstOrThrowArgs> = z.object({
  select: AttendanceEventSelectSchema.optional(),
  include: z.lazy(() => AttendanceEventIncludeSchema).optional(),
  where: AttendanceEventWhereInputSchema.optional(), 
  orderBy: z.union([ AttendanceEventOrderByWithRelationInputSchema.array(), AttendanceEventOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceEventWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceEventScalarFieldEnumSchema, AttendanceEventScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default AttendanceEventFindFirstOrThrowArgsSchema;
