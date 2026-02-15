import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DispatchedVehicleSelectSchema } from '../inputTypeSchemas/DispatchedVehicleSelectSchema';
import { DispatchedVehicleIncludeSchema } from '../inputTypeSchemas/DispatchedVehicleIncludeSchema';

export const DispatchedVehicleArgsSchema: z.ZodType<Prisma.DispatchedVehicleDefaultArgs> = z.object({
  select: z.lazy(() => DispatchedVehicleSelectSchema).optional(),
  include: z.lazy(() => DispatchedVehicleIncludeSchema).optional(),
}).strict();

export default DispatchedVehicleArgsSchema;
