import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HolidayWhereInputSchema } from '../inputTypeSchemas/HolidayWhereInputSchema'
import { HolidayOrderByWithRelationInputSchema } from '../inputTypeSchemas/HolidayOrderByWithRelationInputSchema'
import { HolidayWhereUniqueInputSchema } from '../inputTypeSchemas/HolidayWhereUniqueInputSchema'
import { HolidayScalarFieldEnumSchema } from '../inputTypeSchemas/HolidayScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HolidaySelectSchema: z.ZodType<Prisma.HolidaySelect> = z.object({
  date: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
}).strict()

export const HolidayFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HolidayFindFirstOrThrowArgs> = z.object({
  select: HolidaySelectSchema.optional(),
  where: HolidayWhereInputSchema.optional(), 
  orderBy: z.union([ HolidayOrderByWithRelationInputSchema.array(), HolidayOrderByWithRelationInputSchema ]).optional(),
  cursor: HolidayWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HolidayScalarFieldEnumSchema, HolidayScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default HolidayFindFirstOrThrowArgsSchema;
