import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OvertimeSlotSelectSchema } from '../inputTypeSchemas/OvertimeSlotSelectSchema';
import { OvertimeSlotIncludeSchema } from '../inputTypeSchemas/OvertimeSlotIncludeSchema';

export const OvertimeSlotArgsSchema: z.ZodType<Prisma.OvertimeSlotDefaultArgs> = z.object({
  select: z.lazy(() => OvertimeSlotSelectSchema).optional(),
  include: z.lazy(() => OvertimeSlotIncludeSchema).optional(),
}).strict();

export default OvertimeSlotArgsSchema;
