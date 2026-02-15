import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleCountOutputTypeSelectSchema } from './DispatchedVehicleCountOutputTypeSelectSchema';

export const DispatchedVehicleCountOutputTypeArgsSchema: z.ZodType<Prisma.DispatchedVehicleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DispatchedVehicleCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DispatchedVehicleCountOutputTypeSelectSchema;
