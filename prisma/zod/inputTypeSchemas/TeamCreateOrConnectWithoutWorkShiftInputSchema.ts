import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutWorkShiftInputSchema } from './TeamCreateWithoutWorkShiftInputSchema';
import { TeamUncheckedCreateWithoutWorkShiftInputSchema } from './TeamUncheckedCreateWithoutWorkShiftInputSchema';

export const TeamCreateOrConnectWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema) ]),
});

export default TeamCreateOrConnectWithoutWorkShiftInputSchema;
