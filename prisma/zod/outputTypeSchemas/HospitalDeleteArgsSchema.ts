import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HospitalIncludeSchema } from '../inputTypeSchemas/HospitalIncludeSchema'
import { HospitalWhereUniqueInputSchema } from '../inputTypeSchemas/HospitalWhereUniqueInputSchema'
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

export const HospitalDeleteArgsSchema: z.ZodType<Prisma.HospitalDeleteArgs> = z.object({
  select: HospitalSelectSchema.optional(),
  include: z.lazy(() => HospitalIncludeSchema).optional(),
  where: HospitalWhereUniqueInputSchema, 
}).strict();

export default HospitalDeleteArgsSchema;
