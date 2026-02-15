import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubstituteHolidayIncludeSchema } from '../inputTypeSchemas/SubstituteHolidayIncludeSchema'
import { SubstituteHolidayWhereInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereInputSchema'
import { SubstituteHolidayOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubstituteHolidayOrderByWithRelationInputSchema'
import { SubstituteHolidayWhereUniqueInputSchema } from '../inputTypeSchemas/SubstituteHolidayWhereUniqueInputSchema'
import { SubstituteHolidayScalarFieldEnumSchema } from '../inputTypeSchemas/SubstituteHolidayScalarFieldEnumSchema'
import { StaffArgsSchema } from "../outputTypeSchemas/StaffArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubstituteHolidaySelectSchema: z.ZodType<Prisma.SubstituteHolidaySelect> = z.object({
  id: z.boolean().optional(),
  staffId: z.boolean().optional(),
  originalHoliday: z.boolean().optional(),
  substituteDate: z.boolean().optional(),
  reason: z.boolean().optional(),
  decidedAt: z.boolean().optional(),
  decidedBy: z.boolean().optional(),
  staff: z.union([z.boolean(),z.lazy(() => StaffArgsSchema)]).optional(),
}).strict()

export const SubstituteHolidayFindManyArgsSchema: z.ZodType<Prisma.SubstituteHolidayFindManyArgs> = z.object({
  select: SubstituteHolidaySelectSchema.optional(),
  include: z.lazy(() => SubstituteHolidayIncludeSchema).optional(),
  where: SubstituteHolidayWhereInputSchema.optional(), 
  orderBy: z.union([ SubstituteHolidayOrderByWithRelationInputSchema.array(), SubstituteHolidayOrderByWithRelationInputSchema ]).optional(),
  cursor: SubstituteHolidayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubstituteHolidayScalarFieldEnumSchema, SubstituteHolidayScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default SubstituteHolidayFindManyArgsSchema;
