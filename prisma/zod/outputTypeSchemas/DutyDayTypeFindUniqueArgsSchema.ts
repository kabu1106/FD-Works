import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DutyDayTypeIncludeSchema } from '../inputTypeSchemas/DutyDayTypeIncludeSchema'
import { DutyDayTypeWhereUniqueInputSchema } from '../inputTypeSchemas/DutyDayTypeWhereUniqueInputSchema'
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

export const DutyDayTypeFindUniqueArgsSchema: z.ZodType<Prisma.DutyDayTypeFindUniqueArgs> = z.object({
  select: DutyDayTypeSelectSchema.optional(),
  include: z.lazy(() => DutyDayTypeIncludeSchema).optional(),
  where: DutyDayTypeWhereUniqueInputSchema, 
}).strict();

export default DutyDayTypeFindUniqueArgsSchema;
