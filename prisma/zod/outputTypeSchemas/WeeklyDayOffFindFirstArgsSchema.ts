import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeeklyDayOffIncludeSchema } from '../inputTypeSchemas/WeeklyDayOffIncludeSchema'
import { WeeklyDayOffWhereInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereInputSchema'
import { WeeklyDayOffOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeeklyDayOffOrderByWithRelationInputSchema'
import { WeeklyDayOffWhereUniqueInputSchema } from '../inputTypeSchemas/WeeklyDayOffWhereUniqueInputSchema'
import { WeeklyDayOffScalarFieldEnumSchema } from '../inputTypeSchemas/WeeklyDayOffScalarFieldEnumSchema'
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeeklyDayOffSelectSchema: z.ZodType<Prisma.WeeklyDayOffSelect> = z.object({
  id: z.boolean().optional(),
  staffId: z.boolean().optional(),
  date: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const WeeklyDayOffFindFirstArgsSchema: z.ZodType<Prisma.WeeklyDayOffFindFirstArgs> = z.object({
  select: WeeklyDayOffSelectSchema.optional(),
  include: z.lazy(() => WeeklyDayOffIncludeSchema).optional(),
  where: WeeklyDayOffWhereInputSchema.optional(), 
  orderBy: z.union([ WeeklyDayOffOrderByWithRelationInputSchema.array(), WeeklyDayOffOrderByWithRelationInputSchema ]).optional(),
  cursor: WeeklyDayOffWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeeklyDayOffScalarFieldEnumSchema, WeeklyDayOffScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default WeeklyDayOffFindFirstArgsSchema;
