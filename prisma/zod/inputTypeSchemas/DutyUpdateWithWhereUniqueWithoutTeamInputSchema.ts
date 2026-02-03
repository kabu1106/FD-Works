import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateWithoutTeamInputSchema } from './DutyUpdateWithoutTeamInputSchema';
import { DutyUncheckedUpdateWithoutTeamInputSchema } from './DutyUncheckedUpdateWithoutTeamInputSchema';

export const DutyUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.DutyUpdateWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DutyUpdateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutTeamInputSchema) ]),
});

export default DutyUpdateWithWhereUniqueWithoutTeamInputSchema;
