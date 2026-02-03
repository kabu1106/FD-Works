import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummarySelectSchema } from '../inputTypeSchemas/OvertimeSummarySelectSchema';
import { OvertimeSummaryIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryIncludeSchema';

export const OvertimeSummaryArgsSchema: z.ZodType<Prisma.OvertimeSummaryDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeSummarySelectSchema).optional(),
  include: z.lazy(() => OvertimeSummaryIncludeSchema).optional(),
}).strict();

export default OvertimeSummaryArgsSchema;
