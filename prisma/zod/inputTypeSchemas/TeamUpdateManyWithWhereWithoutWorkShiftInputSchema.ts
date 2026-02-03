import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';
import { TeamUpdateManyMutationInputSchema } from './TeamUpdateManyMutationInputSchema';
import { TeamUncheckedUpdateManyWithoutWorkShiftInputSchema } from './TeamUncheckedUpdateManyWithoutWorkShiftInputSchema';

export const TeamUpdateManyWithWhereWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema), z.lazy(() => TeamUncheckedUpdateManyWithoutWorkShiftInputSchema) ]),
});

export default TeamUpdateManyWithWhereWithoutWorkShiftInputSchema;
