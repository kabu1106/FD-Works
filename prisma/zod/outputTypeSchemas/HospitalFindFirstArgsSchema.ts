import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalIncludeSchema } from '../inputTypeSchemas/HospitalIncludeSchema'
import { HospitalWhereInputSchema } from '../inputTypeSchemas/HospitalWhereInputSchema'
import { HospitalOrderByWithRelationInputSchema } from '../inputTypeSchemas/HospitalOrderByWithRelationInputSchema'
import { HospitalWhereUniqueInputSchema } from '../inputTypeSchemas/HospitalWhereUniqueInputSchema'
import { HospitalScalarFieldEnumSchema } from '../inputTypeSchemas/HospitalScalarFieldEnumSchema'
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { HospitalCountOutputTypeArgsSchema } from "../outputTypeSchemas/HospitalCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const HospitalSelectSchema: z.ZodType<Prisma.HospitalSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  destination: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HospitalCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HospitalFindFirstArgsSchema: z.ZodType<Prisma.HospitalFindFirstArgs> = z.object({
  select: HospitalSelectSchema.optional(),
  include: z.lazy(() => HospitalIncludeSchema).optional(),
  where: HospitalWhereInputSchema.optional(), 
  orderBy: z.union([ HospitalOrderByWithRelationInputSchema.array(), HospitalOrderByWithRelationInputSchema ]).optional(),
  cursor: HospitalWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HospitalScalarFieldEnumSchema, HospitalScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default HospitalFindFirstArgsSchema;
