import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkTypeSchema } from './WorkTypeSchema';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';
import { TeamWorkDayCreateNestedOneWithoutOverridesInputSchema } from './TeamWorkDayCreateNestedOneWithoutOverridesInputSchema';

export const TeamWorkOverrideCreateInputSchema: z.ZodType<Prisma.TeamWorkOverrideCreateInput> = z.strictObject({
  id: z.string().optional(),
  overriddenType: z.lazy(() => WorkTypeSchema),
  reason: z.lazy(() => TeamWorkOverrideReasonSchema),
  memo: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  teamWorkDay: z.lazy(() => TeamWorkDayCreateNestedOneWithoutOverridesInputSchema),
});

export default TeamWorkOverrideCreateInputSchema;
