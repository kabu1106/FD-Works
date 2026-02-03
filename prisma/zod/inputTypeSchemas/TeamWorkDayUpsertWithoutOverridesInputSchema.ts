import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayUpdateWithoutOverridesInputSchema } from './TeamWorkDayUpdateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema';
import { TeamWorkDayCreateWithoutOverridesInputSchema } from './TeamWorkDayCreateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedCreateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedCreateWithoutOverridesInputSchema';
import { TeamWorkDayWhereInputSchema } from './TeamWorkDayWhereInputSchema';

export const TeamWorkDayUpsertWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayUpsertWithoutOverridesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TeamWorkDayUpdateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema) ]),
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutOverridesInputSchema) ]),
  where: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
});

export default TeamWorkDayUpsertWithoutOverridesInputSchema;
