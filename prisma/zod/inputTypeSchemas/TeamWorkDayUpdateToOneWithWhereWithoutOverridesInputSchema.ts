import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereInputSchema } from './TeamWorkDayWhereInputSchema';
import { TeamWorkDayUpdateWithoutOverridesInputSchema } from './TeamWorkDayUpdateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema';

export const TeamWorkDayUpdateToOneWithWhereWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayUpdateToOneWithWhereWithoutOverridesInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamWorkDayUpdateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema) ]),
});

export default TeamWorkDayUpdateToOneWithWhereWithoutOverridesInputSchema;
