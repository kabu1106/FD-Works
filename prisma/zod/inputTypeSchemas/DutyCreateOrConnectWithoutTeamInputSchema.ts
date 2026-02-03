import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutTeamInputSchema } from './DutyCreateWithoutTeamInputSchema';
import { DutyUncheckedCreateWithoutTeamInputSchema } from './DutyUncheckedCreateWithoutTeamInputSchema';

export const DutyCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutTeamInputSchema), z.lazy(() => DutyUncheckedCreateWithoutTeamInputSchema) ]),
});

export default DutyCreateOrConnectWithoutTeamInputSchema;
