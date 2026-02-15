import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleCreateManyInputSchema } from '../inputTypeSchemas/StaffInVehicleCreateManyInputSchema'

export const StaffInVehicleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StaffInVehicleCreateManyAndReturnArgs> = z.object({
  data: z.union([ StaffInVehicleCreateManyInputSchema, StaffInVehicleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default StaffInVehicleCreateManyAndReturnArgsSchema;
