import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SpecialLeaveTypeCountOutputTypeSelectSchema } from './SpecialLeaveTypeCountOutputTypeSelectSchema';

export const SpecialLeaveTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.SpecialLeaveTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SpecialLeaveTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SpecialLeaveTypeCountOutputTypeSelectSchema;
