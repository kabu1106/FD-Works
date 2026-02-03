import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeRateCategoryCountOutputTypeSelectSchema } from './OvertimeRateCategoryCountOutputTypeSelectSchema';

export const OvertimeRateCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.OvertimeRateCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeRateCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default OvertimeRateCategoryCountOutputTypeSelectSchema;
