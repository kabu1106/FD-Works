import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamUpdateWithoutDutiesInputSchema } from './TeamUpdateWithoutDutiesInputSchema';
import { TeamUncheckedUpdateWithoutDutiesInputSchema } from './TeamUncheckedUpdateWithoutDutiesInputSchema';

export const TeamUpdateToOneWithWhereWithoutDutiesInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutDutiesInput> = z.strictObject({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutDutiesInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutDutiesInputSchema) ]),
});

export default TeamUpdateToOneWithWhereWithoutDutiesInputSchema;
