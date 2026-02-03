import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentIncludeSchema } from '../inputTypeSchemas/DepartmentIncludeSchema'
import { DepartmentWhereUniqueInputSchema } from '../inputTypeSchemas/DepartmentWhereUniqueInputSchema'
import { TeamFindManyArgsSchema } from "../outputTypeSchemas/TeamFindManyArgsSchema"
import { VehicleFindManyArgsSchema } from "../outputTypeSchemas/VehicleFindManyArgsSchema"
import { AttendanceFindManyArgsSchema } from "../outputTypeSchemas/AttendanceFindManyArgsSchema"
import { DepartmentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DepartmentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DepartmentSelectSchema: z.ZodType<Prisma.DepartmentSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  isActive: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  vehicle: z.union([z.boolean(),z.lazy(() => VehicleFindManyArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DepartmentDeleteArgsSchema: z.ZodType<Prisma.DepartmentDeleteArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  where: DepartmentWhereUniqueInputSchema, 
}).strict();

export default DepartmentDeleteArgsSchema;
