import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayCreateWithoutOverridesInputSchema } from './TeamWorkDayCreateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedCreateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedCreateWithoutOverridesInputSchema';
import { TeamWorkDayCreateOrConnectWithoutOverridesInputSchema } from './TeamWorkDayCreateOrConnectWithoutOverridesInputSchema';
import { TeamWorkDayUpsertWithoutOverridesInputSchema } from './TeamWorkDayUpsertWithoutOverridesInputSchema';
import { TeamWorkDayWhereUniqueInputSchema } from './TeamWorkDayWhereUniqueInputSchema';
import { TeamWorkDayUpdateToOneWithWhereWithoutOverridesInputSchema } from './TeamWorkDayUpdateToOneWithWhereWithoutOverridesInputSchema';
import { TeamWorkDayUpdateWithoutOverridesInputSchema } from './TeamWorkDayUpdateWithoutOverridesInputSchema';
import { TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema } from './TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema';

export const TeamWorkDayUpdateOneRequiredWithoutOverridesNestedInputSchema: z.ZodType<Prisma.TeamWorkDayUpdateOneRequiredWithoutOverridesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkDayCreateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedCreateWithoutOverridesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamWorkDayCreateOrConnectWithoutOverridesInputSchema).optional(),
  upsert: z.lazy(() => TeamWorkDayUpsertWithoutOverridesInputSchema).optional(),
  connect: z.lazy(() => TeamWorkDayWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamWorkDayUpdateToOneWithWhereWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUpdateWithoutOverridesInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateWithoutOverridesInputSchema) ]).optional(),
});

export default TeamWorkDayUpdateOneRequiredWithoutOverridesNestedInputSchema;
