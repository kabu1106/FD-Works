import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayCreateWithoutOverridesInputSchema } from './TeamWorkDayCreateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedCreateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedCreateWithoutOverridesInputSchema';

export const TeamWorkDayCreateOrConnectWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayCreateOrConnectWithoutOverridesInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutOverridesInputSchema) ]),
});

export default TeamWorkDayCreateOrConnectWithoutOverridesInputSchema;
