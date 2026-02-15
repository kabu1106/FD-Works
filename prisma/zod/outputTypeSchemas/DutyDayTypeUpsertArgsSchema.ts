import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeIncludeSchema } from '../inputTypeSchemas/DutyDayTypeIncludeSchema'
import { DutyDayTypeWhereUniqueInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereUniqueInputSchema'
import { DutyDayTypeCreateInputSchema } from '../inputTypeSchemas/DutyDayTypeCreateInputSchema'
import { DutyDayTypeUncheckedCreateInputSchema } from '../inputTypeSchemas/DutyDayTypeUncheckedCreateInputSchema'
import { DutyDayTypeUpdateInputSchema } from '../inputTypeSchemas/DutyDayTypeUpdateInputSchema'
import { DutyDayTypeUncheckedUpdateInputSchema } from '../inputTypeSchemas/DutyDayTypeUncheckedUpdateInputSchema'
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

export const DutyDayTypeUpsertArgsSchema: z.ZodType<Prisma.DutyDayTypeUpsertArgs> = z.object({
  select: DutyDayTypeSelectSchema.optional(),
  include: z.lazy(() => DutyDayTypeIncludeSchema).optional(),
  where: DutyDayTypeWhereUniqueInputSchema, 
  create: z.union([ DutyDayTypeCreateInputSchema, DutyDayTypeUncheckedCreateInputSchema ]),
  update: z.union([ DutyDayTypeUpdateInputSchema, DutyDayTypeUncheckedUpdateInputSchema ]),
}).strict();

export default DutyDayTypeUpsertArgsSchema;
