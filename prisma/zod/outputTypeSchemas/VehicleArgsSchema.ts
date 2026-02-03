import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleSelectSchema } from '../inputTypeSchemas/VehicleSelectSchema';
import { VehicleIncludeSchema } from '../inputTypeSchemas/VehicleIncludeSchema';

export const VehicleArgsSchema: z.ZodType<Prisma.VehicleDefaultArgs> = z.object({
  select: z.lazy(() => VehicleSelectSchema).optional(),
  include: z.lazy(() => VehicleIncludeSchema).optional(),
}).strict();

export default VehicleArgsSchema;
