import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCountOutputTypeSelectSchema } from './VehicleCountOutputTypeSelectSchema';

export const VehicleCountOutputTypeArgsSchema: z.ZodType<Prisma.VehicleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VehicleCountOutputTypeSelectSchema).nullish(),
}).strict();

export default VehicleCountOutputTypeSelectSchema;
