import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUpdateManyMutationInputSchema } from '../inputTypeSchemas/VehicleUpdateManyMutationInputSchema'
import { VehicleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VehicleUncheckedUpdateManyInputSchema'
import { VehicleWhereInputSchema } from '../inputTypeSchemas/VehicleWhereInputSchema'

export const VehicleUpdateManyArgsSchema: z.ZodType<Prisma.VehicleUpdateManyArgs> = z.object({
  data: z.union([ VehicleUpdateManyMutationInputSchema, VehicleUncheckedUpdateManyInputSchema ]),
  where: VehicleWhereInputSchema.optional(), 
}).strict();

export default VehicleUpdateManyArgsSchema;
