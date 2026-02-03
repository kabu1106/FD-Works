import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ScheduleStatusSchema } from './ScheduleStatusSchema';

export const DutyCreateManyInputSchema: z.ZodType<Prisma.DutyCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  teamId: z.number().int(),
  status: z.lazy(() => ScheduleStatusSchema).optional(),
  memo: z.string().optional(),
  isLocked: z.boolean().optional(),
  lockedAt: z.coerce.date().optional().nullable(),
  lockedByUserId: z.string().optional().nullable(),
  hasEverCancelled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default DutyCreateManyInputSchema;
