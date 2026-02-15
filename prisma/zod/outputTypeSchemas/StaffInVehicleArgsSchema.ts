import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StaffInVehicleSelectSchema } from '../inputTypeSchemas/StaffInVehicleSelectSchema';
import { StaffInVehicleIncludeSchema } from '../inputTypeSchemas/StaffInVehicleIncludeSchema';

export const StaffInVehicleArgsSchema: z.ZodType<Prisma.StaffInVehicleDefaultArgs> = z.object({
  select: z.lazy(() => StaffInVehicleSelectSchema).optional(),
  include: z.lazy(() => StaffInVehicleIncludeSchema).optional(),
}).strict();

export default StaffInVehicleArgsSchema;
