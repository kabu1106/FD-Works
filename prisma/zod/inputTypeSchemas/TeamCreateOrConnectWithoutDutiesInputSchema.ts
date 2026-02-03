import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutDutiesInputSchema } from './TeamCreateWithoutDutiesInputSchema';
import { TeamUncheckedCreateWithoutDutiesInputSchema } from './TeamUncheckedCreateWithoutDutiesInputSchema';

export const TeamCreateOrConnectWithoutDutiesInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutDutiesInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDutiesInputSchema) ]),
});

export default TeamCreateOrConnectWithoutDutiesInputSchema;
