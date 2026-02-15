import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleUpdateManyMutationInputSchema } from '../inputTypeSchemas/StaffInVehicleUpdateManyMutationInputSchema'
import { StaffInVehicleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StaffInVehicleUncheckedUpdateManyInputSchema'
import { StaffInVehicleWhereInputSchema } from '../inputTypeSchemas/StaffInVehicleWhereInputSchema'

export const StaffInVehicleUpdateManyArgsSchema: z.ZodType<Prisma.StaffInVehicleUpdateManyArgs> = z.object({
  data: z.union([ StaffInVehicleUpdateManyMutationInputSchema, StaffInVehicleUncheckedUpdateManyInputSchema ]),
  where: StaffInVehicleWhereInputSchema.optional(), 
}).strict();

export default StaffInVehicleUpdateManyArgsSchema;
