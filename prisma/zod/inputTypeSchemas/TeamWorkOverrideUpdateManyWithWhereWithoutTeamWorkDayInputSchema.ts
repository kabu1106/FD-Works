import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideScalarWhereInputSchema } from './TeamWorkOverrideScalarWhereInputSchema';
import { TeamWorkOverrideUpdateManyMutationInputSchema } from './TeamWorkOverrideUpdateManyMutationInputSchema';
import { TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayInputSchema';

export const TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema: z.ZodType<Prisma.TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInput> = z.strictObject({
  where: z.lazy(() => TeamWorkOverrideScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamWorkOverrideUpdateManyMutationInputSchema), z.lazy(() => TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayInputSchema) ]),
});

export default TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema;
