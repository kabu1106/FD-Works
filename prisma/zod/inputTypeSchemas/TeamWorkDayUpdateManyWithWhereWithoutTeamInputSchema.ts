import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkDayScalarWhereInputSchema } from './TeamWorkDayScalarWhereInputSchema';
import { TeamWorkDayUpdateManyMutationInputSchema } from './TeamWorkDayUpdateManyMutationInputSchema';
import { TeamWorkDayUncheckedUpdateManyWithoutTeamInputSchema } from './TeamWorkDayUncheckedUpdateManyWithoutTeamInputSchema';

export const TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.TeamWorkDayUpdateManyWithWhereWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TeamWorkDayScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamWorkDayUpdateManyMutationInputSchema), z.lazy(() => TeamWorkDayUncheckedUpdateManyWithoutTeamInputSchema) ]),
});

export default TeamWorkDayUpdateManyWithWhereWithoutTeamInputSchema;
