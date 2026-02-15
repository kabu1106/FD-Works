import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleWhereInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereInputSchema'

export const StaffInVehicleDeleteManyArgsSchema: z.ZodType<Prisma.StaffInVehicleDeleteManyArgs> = z.object({
  where: StaffInVehicleWhereInputSchema.optional(), 
}).strict();

export default StaffInVehicleDeleteManyArgsSchema;
