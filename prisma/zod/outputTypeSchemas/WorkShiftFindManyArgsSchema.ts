import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkShiftIncludeSchema } from '../inputTypeSchemas/WorkShiftIncludeSchema'
import { WorkShiftWhereInputSchema } from '../inputTypeSchemas/WorkShiftWhereInputSchema'
import { WorkShiftOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkShiftOrderByWithRelationInputSchema'
import { WorkShiftWhereUniqueInputSchema } from '../inputTypeSchemas/WorkShiftWhereUniqueInputSchema'
import { WorkShiftScalarFieldEnumSchema } from '../inputTypeSchemas/WorkShiftScalarFieldEnumSchema'
import { TeamFindManyArgsSchema } from "../outputTypeSchemas/TeamFindManyArgsSchema"
import { WorkShiftDayFindManyArgsSchema } from "../outputTypeSchemas/WorkShiftDayFindManyArgsSchema"
import { WorkShiftCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkShiftCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkShiftSelectSchema: z.ZodType<Prisma.WorkShiftSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  shiftType: z.boolean().optional(),
  isActive: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  workShiftDays: z.union([z.boolean(),z.lazy(() => WorkShiftDayFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkShiftCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkShiftFindManyArgsSchema: z.ZodType<Prisma.WorkShiftFindManyArgs> = z.object({
  select: WorkShiftSelectSchema.optional(),
  include: z.lazy(() => WorkShiftIncludeSchema).optional(),
  where: WorkShiftWhereInputSchema.optional(), 
  orderBy: z.union([ WorkShiftOrderByWithRelationInputSchema.array(), WorkShiftOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkShiftWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkShiftScalarFieldEnumSchema, WorkShiftScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default WorkShiftFindManyArgsSchema;
