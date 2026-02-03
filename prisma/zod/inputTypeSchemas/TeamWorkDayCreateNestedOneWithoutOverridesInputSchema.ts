import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayCreateWithoutOverridesInputSchema } from './TeamWorkDayCreateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedCreateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedCreateWithoutOverridesInputSchema';
import { TeamWorkDayCreateOrConnectWithoutOverridesInputSchema } from './TeamWorkDayCreateOrConnectWithoutOverridesInputSchema';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';

export const TeamWorkDayCreateNestedOneWithoutOverridesInputSchema: z.ZodType<Prisma.TeamWorkDayCreateNestedOneWithoutOverridesInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamWorkDayCreateOrConnectWithoutOverridesInputSchema).optional(),
  connect: z.lazy(() => TeamWorkDayWhereUniqueInputSchema).optional(),
});

export default TeamWorkDayCreateNestedOneWithoutOverridesInputSchema;
