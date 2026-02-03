import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamUpdateWithoutStaffsInputSchema } from './TeamUpdateWithoutStaffsInputSchema';
import { TeamUncheckedUpdateWithoutStaffsInputSchema } from './TeamUncheckedUpdateWithoutStaffsInputSchema';
import { TeamCreateWithoutStaffsInputSchema } from './TeamCreateWithoutStaffsInputSchema';
import { TeamUncheckedCreateWithoutStaffsInputSchema } from './TeamUncheckedCreateWithoutStaffsInputSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';

export const TeamUpsertWithoutStaffsInputSchema: z.ZodType<Prisma.TeamUpsertWithoutStaffsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TeamUpdateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutStaffsInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutStaffsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutStaffsInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
});

export default TeamUpsertWithoutStaffsInputSchema;
