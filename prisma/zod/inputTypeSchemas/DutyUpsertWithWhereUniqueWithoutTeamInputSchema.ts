import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateWithoutTeamInputSchema } from './DutyUpdateWithoutTeamInputSchema';
import { DutyUncheckedUpdateWithoutTeamInputSchema } from './DutyUncheckedUpdateWithoutTeamInputSchema';
import { DutyCreateWithoutTeamInputSchema } from './DutyCreateWithoutTeamInputSchema';
import { DutyUncheckedCreateWithoutTeamInputSchema } from './DutyUncheckedCreateWithoutTeamInputSchema';

export const DutyUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.DutyUpsertWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DutyUpdateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema) ]),
});

export default DutyUpsertWithWhereUniqueWithoutTeamInputSchema;
