import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSummaryDetailSelectSchema } from '../inputTypeSchemas/OvertimeSummaryDetailSelectSchema';
import { OvertimeSummaryDetailIncludeSchema } from '../inputTypeSchemas/OvertimeSummaryDetailIncludeSchema';

export const OvertimeSummaryDetailArgsSchema: z.ZodType<Prisma.OvertimeSummaryDetailDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeSummaryDetailSelectSchema).optional(),
  include: z.lazy(() => OvertimeSummaryDetailIncludeSchema).optional(),
}).strict();

export default OvertimeSummaryDetailArgsSchema;
