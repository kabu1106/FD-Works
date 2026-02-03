import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleIncludeSchema } from '../inputTypeSchemas/VehicleIncludeSchema'
import { VehicleWhereInputSchema } from '../inputTypeSchemas/VehicleWhereInputSchema'
import { VehicleOrderByWithRelationInputSchema } from '../inputTypeSchemas/VehicleOrderByWithRelationInputSchema'
import { VehicleWhereUniqueInputSchema } from '../inputTypeSchemas/VehicleWhereUniqueInputSchema'
import { VehicleScalarFieldEnumSchema } from '../inputTypeSchemas/VehicleScalarFieldEnumSchema'
import { IncidentVehicleFindManyArgsSchema } from "../outputTypeSchemas/IncidentVehicleFindManyArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { VehicleCountOutputTypeArgsSchema } from "../outputTypeSchemas/VehicleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VehicleSelectSchema: z.ZodType<Prisma.VehicleSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  departmentId: z.boolean().optional(),
  isActive: z.boolean().optional(),
  incidents: z.union([z.boolean(),z.lazy(() => IncidentVehicleFindManyArgsSchema)]).optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VehicleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VehicleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VehicleFindFirstOrThrowArgs> = z.object({
  select: VehicleSelectSchema.optional(),
  include: z.lazy(() => VehicleIncludeSchema).optional(),
  where: VehicleWhereInputSchema.optional(), 
  orderBy: z.union([ VehicleOrderByWithRelationInputSchema.array(), VehicleOrderByWithRelationInputSchema ]).optional(),
  cursor: VehicleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VehicleScalarFieldEnumSchema, VehicleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default VehicleFindFirstOrThrowArgsSchema;
