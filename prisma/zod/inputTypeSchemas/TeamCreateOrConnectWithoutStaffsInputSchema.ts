import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutStaffsInputSchema } from './TeamCreateWithoutStaffsInputSchema';
import { TeamUncheckedCreateWithoutStaffsInputSchema } from './TeamUncheckedCreateWithoutStaffsInputSchema';

export const TeamCreateOrConnectWithoutStaffsInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutStaffsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutStaffsInputSchema) ]),
});

export default TeamCreateOrConnectWithoutStaffsInputSchema;
