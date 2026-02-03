import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateWithoutTeamInputSchema } from './StaffUpdateWithoutTeamInputSchema';
import { StaffUncheckedUpdateWithoutTeamInputSchema } from './StaffUncheckedUpdateWithoutTeamInputSchema';
import { StaffCreateWithoutTeamInputSchema } from './StaffCreateWithoutTeamInputSchema';
import { StaffUncheckedCreateWithoutTeamInputSchema } from './StaffUncheckedCreateWithoutTeamInputSchema';

export const StaffUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StaffUpdateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema) ]),
});

export default StaffUpsertWithWhereUniqueWithoutTeamInputSchema;
