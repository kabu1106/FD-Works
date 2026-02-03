import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryDetailIncludeSchema'
import { OvertimeSummaryDetailWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereInputSchema'
import { OvertimeSummaryDetailOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailOrderByWithRelationInputSchema'
import { OvertimeSummaryDetailWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryDetailWhereUniqueInputSchema'
import { OvertimeSummaryDetailScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSummaryDetailScalarFieldEnumSchema'
import { OvertimeSummaryArgsSchema } from "../outputTypeSchemas/OvertimeSummaryArgsSchema"
import { OvertimeRateCategoryArgsSchema } from "../outputTypeSchemas/OvertimeRateCategoryArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSummaryDetailSelectSchema: z.ZodType<Prisma.OvertimeSummaryDetailSelect> = z.object({
  id: z.boolean().optional(),
  overtimeSummaryId: z.boolean().optional(),
  overtimeRateCategoryId: z.boolean().optional(),
  rateSnapshot: z.boolean().optional(),
  minutes: z.boolean().optional(),
  overtimeSummary: z.union([z.boolean(),z.lazy(() => OvertimeSummaryArgsSchema)]).optional(),
  rateCategory: z.union([z.boolean(),z.lazy(() => OvertimeRateCategoryArgsSchema)]).optional(),
}).strict()

export const OvertimeSummaryDetailFindManyArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailFindManyArgs> = z.object({
  select: OvertimeSummaryDetailSelectSchema.optional(),
  include: z.lazy(() => OvertimeSummaryDetailIncludeSchema).optional(),
  where: OvertimeSummaryDetailWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryDetailOrderByWithRelationInputSchema.array(), OvertimeSummaryDetailOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSummaryDetailWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OvertimeSummaryDetailScalarFieldEnumSchema, OvertimeSummaryDetailScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OvertimeSummaryDetailFindManyArgsSchema;
