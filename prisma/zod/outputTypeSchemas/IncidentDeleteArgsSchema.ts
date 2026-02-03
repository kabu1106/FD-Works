import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IncidentIncludeSchema } from '../inputTypeSchemas/IncidentIncludeSchema'
import { IncidentWhereUniqueInputSchema } from '../inputTypeSchemas/IncidentWhereUniqueInputSchema'
import { DutyArgsSchema } from "../outputTypeSchemas/DutyArgsSchema"
import { IncidentCategoryArgsSchema } from "../outputTypeSchemas/IncidentCategoryArgsSchema"
import { IncidentTypeArgsSchema } from "../outputTypeSchemas/IncidentTypeArgsSchema"
import { LocationArgsSchema } from "../outputTypeSchemas/LocationArgsSchema"
import { HospitalArgsSchema } from "../outputTypeSchemas/HospitalArgsSchema"
import { IncidentVehicleFindManyArgsSchema } from "../outputTypeSchemas/IncidentVehicleFindManyArgsSchema"
import { IncidentCountOutputTypeArgsSchema } from "../outputTypeSchemas/IncidentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IncidentSelectSchema: z.ZodType<Prisma.IncidentSelect> = z.object({
  id: z.boolean().optional(),
  dutyId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  typeId: z.boolean().optional(),
  locationId: z.boolean().optional(),
  destinationId: z.boolean().optional(),
  destinationName: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  duty: z.union([z.boolean(),z.lazy(() => DutyArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => IncidentCategoryArgsSchema)]).optional(),
  type: z.union([z.boolean(),z.lazy(() => IncidentTypeArgsSchema)]).optional(),
  location: z.union([z.boolean(),z.lazy(() => LocationArgsSchema)]).optional(),
  destination: z.union([z.boolean(),z.lazy(() => HospitalArgsSchema)]).optional(),
  vehicles: z.union([z.boolean(),z.lazy(() => IncidentVehicleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IncidentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IncidentDeleteArgsSchema: z.ZodType<Prisma.IncidentDeleteArgs> = z.object({
  select: IncidentSelectSchema.optional(),
  include: z.lazy(() => IncidentIncludeSchema).optional(),
  where: IncidentWhereUniqueInputSchema, 
}).strict();

export default IncidentDeleteArgsSchema;
