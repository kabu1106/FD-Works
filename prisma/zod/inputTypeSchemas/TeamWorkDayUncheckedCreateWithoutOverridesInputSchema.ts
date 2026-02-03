import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';

export const TeamWorkDayUncheckedCreateWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayUncheckedCreateWithoutOverridesInput> = z.strictObject({
  id: z.string().optional(),
  date: z.coerce.date(),
  type: z.lazy(() => WorkTypeSchema).optional(),
  teamId: z.number().int(),
});

export default TeamWorkDayUncheckedCreateWithoutOverridesInputSchema;
