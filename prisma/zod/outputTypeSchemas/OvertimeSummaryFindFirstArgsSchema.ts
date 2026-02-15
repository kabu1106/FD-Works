import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryIncludeSchema'
import { OvertimeSummaryWhereInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereInputSchema'
import { OvertimeSummaryOrderByWithRelationInputSchema } from '../inputTypeSchemas/OvertimeSummaryOrderByWithRelationInputSchema'
import { OvertimeSummaryWhereUniqueInputSchema } from '../inputTypeSchemas/OvertimeSummaryWhereUniqueInputSchema'
import { OvertimeSummaryScalarFieldEnumSchema } from '../inputTypeSchemas/OvertimeSummaryScalarFieldEnumSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
import { OvertimeSummaryDetailFindManyArgsSchema } from "../outputTypeSchemas/OvertimeSummaryDetailFindManyArgsSchema"
import { OvertimeSummaryCountOutputTypeArgsSchema } from "../outputTypeSchemas/OvertimeSummaryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OvertimeSummarySelectSchema: z.ZodType<Prisma.OvertimeSummarySelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  calculationVersion: z.boolean().optional(),
  totalMinutes: z.boolean().optional(),
  isFinalized: z.boolean().optional(),
  calculatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
  details: z.union([z.boolean(),z.lazy(() => OvertimeSummaryDetailFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OvertimeSummaryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OvertimeSummaryFindFirstArgsSchema: z.ZodType<Prisma.OvertimeSummaryFindFirstArgs> = z.object({
  select: OvertimeSummarySelectSchema.optional(),
  include: z.lazy(() => OvertimeSummaryIncludeSchema).optional(),
  where: OvertimeSummaryWhereInputSchema.optional(), 
  orderBy: z.union([ OvertimeSummaryOrderByWithRelationInputSchema.array(), OvertimeSummaryOrderByWithRelationInputSchema ]).optional(),
  cursor: OvertimeSummaryWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OvertimeSummaryScalarFieldEnumSchema, OvertimeSummaryScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OvertimeSummaryFindFirstArgsSchema;
