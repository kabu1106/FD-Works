import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentFindManyArgsSchema } from "../outputTypeSchemas/IncidentFindManyArgsSchema"
import { HospitalCountOutputTypeArgsSchema } from "../outputTypeSchemas/HospitalCountOutputTypeArgsSchema"

export const HospitalIncludeSchema: z.ZodType<Prisma.HospitalInclude> = z.object({
  destination: z.union([z.boolean(),z.lazy(() => IncidentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HospitalCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default HospitalIncludeSchema;
