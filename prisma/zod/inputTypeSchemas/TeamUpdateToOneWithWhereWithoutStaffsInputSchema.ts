import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamUpdateWithoutStaffsInputSchema } from './TeamUpdateWithoutStaffsInputSchema';
import { TeamUncheckedUpdateWithoutStaffsInputSchema } from './TeamUncheckedUpdateWithoutStaffsInputSchema';

export const TeamUpdateToOneWithWhereWithoutStaffsInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutStaffsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutStaffsInputSchema) ]),
});

export default TeamUpdateToOneWithWhereWithoutStaffsInputSchema;
