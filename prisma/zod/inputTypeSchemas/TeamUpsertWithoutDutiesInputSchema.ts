import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamUpdateWithoutDutiesInputSchema } from './TeamUpdateWithoutDutiesInputSchema';
import { TeamUncheckedUpdateWithoutDutiesInputSchema } from './TeamUncheckedUpdateWithoutDutiesInputSchema';
import { TeamCreateWithoutDutiesInputSchema } from './TeamCreateWithoutDutiesInputSchema';
import { TeamUncheckedCreateWithoutDutiesInputSchema } from './TeamUncheckedCreateWithoutDutiesInputSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';

export const TeamUpsertWithoutDutiesInputSchema: z.ZodType<Prisma.TeamUpsertWithoutDutiesInput> = z.strictObject({
  update: z.union([ z.lazy(() => TeamUpdateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutDutiesInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedCreateWithoutDutiesInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
});

export default TeamUpsertWithoutDutiesInputSchema;
