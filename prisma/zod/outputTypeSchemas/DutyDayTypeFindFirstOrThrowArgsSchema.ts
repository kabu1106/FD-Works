import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeIncludeSchema } from '../inputTypeSchemas/DutyDayTypeIncludeSchema'
import { DutyDayTypeWhereInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereInputSchema'
import { DutyDayTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/DutyDayTypeOrderByWithRelationInputSchema'
import { DutyDayTypeWhereUniqueInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereUniqueInputSchema'
import { DutyDayTypeScalarFieldEnumSchema } from '../inputTypeSchemas/DutyDayTypeScalarFieldEnumSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DutyDayTypeSelectSchema: z.ZodType<Prisma.DutyDayTypeSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  staffId: z.boolean().optional(),
  dayType: z.boolean().optional(),
  reason: z.boolean().optional(),
  decidedAt: z.boolean().optional(),
  decidedBy: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const DutyDayTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DutyDayTypeFindFirstOrThrowArgs> = z.object({
  select: DutyDayTypeSelectSchema.optional(),
  include: z.lazy(() => DutyDayTypeIncludeSchema).optional(),
  where: DutyDayTypeWhereInputSchema.optional(), 
  orderBy: z.union([ DutyDayTypeOrderByWithRelationInputSchema.array(), DutyDayTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: DutyDayTypeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DutyDayTypeScalarFieldEnumSchema, DutyDayTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default DutyDayTypeFindFirstOrThrowArgsSchema;
