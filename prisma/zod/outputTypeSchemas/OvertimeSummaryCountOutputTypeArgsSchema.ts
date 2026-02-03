import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryCountOutputTypeSelectSchema } from './OvertimeSummaryCountOutputTypeSelectSchema';

export const OvertimeSummaryCountOutputTypeArgsSchema: z.ZodType<Prisma.OvertimeSummaryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeSummaryCountOutputTypeSelectSchema).nullish(),
}).strict();

export default OvertimeSummaryCountOutputTypeSelectSchema;
