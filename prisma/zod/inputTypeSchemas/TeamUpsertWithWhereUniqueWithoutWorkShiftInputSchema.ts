import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutWorkShiftInputSchema } from './TeamUpdateWithoutWorkShiftInputSchema';
import { TeamUncheckedUpdateWithoutWorkShiftInputSchema } from './TeamUncheckedUpdateWithoutWorkShiftInputSchema';
import { TeamCreateWithoutWorkShiftInputSchema } from './TeamCreateWithoutWorkShiftInputSchema';
import { TeamUncheckedCreateWithoutWorkShiftInputSchema } from './TeamUncheckedCreateWithoutWorkShiftInputSchema';

export const TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutWorkShiftInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema) ]),
});

export default TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema;
