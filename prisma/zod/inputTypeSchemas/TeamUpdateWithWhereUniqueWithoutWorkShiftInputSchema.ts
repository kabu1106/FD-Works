import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithoutWorkShiftInputSchema } from './TeamUpdateWithoutWorkShiftInputSchema';
import { TeamUncheckedUpdateWithoutWorkShiftInputSchema } from './TeamUncheckedUpdateWithoutWorkShiftInputSchema';

export const TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutWorkShiftInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutWorkShiftInputSchema) ]),
});

export default TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema;
