import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleUpdateManyMutationInputSchema } from '../inputTypeSchemas/DispatchedVehicleUpdateManyMutationInputSchema'
import { DispatchedVehicleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DispatchedVehicleUncheckedUpdateManyInputSchema'
import { DispatchedVehicleWhereInputSchema } from '../inputTypeSchemas/DispatchedVehicleWhereInputSchema'

export const DispatchedVehicleUpdateManyArgsSchema: z.ZodType<Prisma.DispatchedVehicleUpdateManyArgs> = z.object({
  data: z.union([ DispatchedVehicleUpdateManyMutationInputSchema, DispatchedVehicleUncheckedUpdateManyInputSchema ]),
  where: DispatchedVehicleWhereInputSchema.optional(), 
}).strict();

export default DispatchedVehicleUpdateManyArgsSchema;
