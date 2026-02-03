import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyScalarWhereInputSchema } from './DutyScalarWhereInputSchema';
import { DutyUpdateManyMutationInputSchema } from './DutyUpdateManyMutationInputSchema';
import { DutyUncheckedUpdateManyWithoutTeamInputSchema } from './DutyUncheckedUpdateManyWithoutTeamInputSchema';

export const DutyUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.DutyUpdateManyWithWhereWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => DutyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DutyUpdateManyMutationInputSchema), z.lazy(() => DutyUncheckedUpdateManyWithoutTeamInputSchema) ]),
});

export default DutyUpdateManyWithWhereWithoutTeamInputSchema;
