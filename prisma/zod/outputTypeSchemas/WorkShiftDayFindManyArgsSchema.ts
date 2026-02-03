import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftDayIncludeSchema } from '../inputTypeSchemas/WorkShiftDayIncludeSchema'
import { WorkShiftDayWhereInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereInputSchema'
import { WorkShiftDayOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkShiftDayOrderByWithRelationInputSchema'
import { WorkShiftDayWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftDayWhereUniqueInputSchema'
import { WorkShiftDayScalarFieldEnumSchema } from '../inputTypeSchemas/WorkShiftDayScalarFieldEnumSchema'
import { WorkShiftArgsSchema } from "../outputTypeSchemas/WorkShiftArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkShiftDaySelectSchema: z.ZodType<Prisma.WorkShiftDaySelect> = z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  type: z.boolean().optional(),
  workShiftId: z.boolean().optional(),
  workShift: z.union([z.boolean(),z.lazy(() => WorkShiftArgsSchema)]).optional(),
}).strict()

export const WorkShiftDayFindManyArgsSchema: z.ZodType<Prisma.WorkShiftDayFindManyArgs> = z.object({
  select: WorkShiftDaySelectSchema.optional(),
  include: z.lazy(() => WorkShiftDayIncludeSchema).optional(),
  where: WorkShiftDayWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftDayOrderByWithRelationInputSchema.array(), WorkShiftDayOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkShiftDayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkShiftDayScalarFieldEnumSchema, WorkShiftDayScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default WorkShiftDayFindManyArgsSchema;
