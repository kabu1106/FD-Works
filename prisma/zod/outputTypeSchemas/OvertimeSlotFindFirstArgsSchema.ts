import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotIncludeSchema } from '../inputTypeSchemas/OvertimeSlotIncludeSchema'
import { OvertimeSlotWhereInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereInputSchema'
import { OvertimeSlotOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSlotOrderByWithRelationInputSchema'
import { OvertimeSlotWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSlotWhereUniqueInputSchema'
import { OvertimeSlotScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSlotScalarFieldEnumSchema'
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
import { WorkGroupArgsSchema } from "../outputTypeSchemas/WorkGroupArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSlotSelectSchema: z.ZodType<Prisma.OvertimeSlotSelect> = z.object({
  id: z.boolean().optional(),
  workGroupId: z.boolean().optional(),
  startMinute: z.boolean().optional(),
  endMinute: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  overtimeRateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
  workGroup: z.union([z.boolean(),z.lazy(() => WorkGroupArgsSchema)]).optional(),
}).strict()

export const OvertimeSlotFindFirstArgsSchema: z.ZodType<Prisma.OvertimeSlotFindFirstArgs> = z.object({
  select: OvertimeSlotSelectSchema.optional(),
  include: z.lazy(() => OvertimeSlotIncludeSchema).optional(),
  where: OvertimeSlotWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSlotOrderByWithRelationInputSchema.array(), OvertimeSlotOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSlotWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OvertimeSlotScalarFieldEnumSchema, OvertimeSlotScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OvertimeSlotFindFirstArgsSchema;
