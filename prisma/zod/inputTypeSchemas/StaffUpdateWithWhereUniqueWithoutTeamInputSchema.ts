import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateWithoutTeamInputSchema } from './StaffUpdateWithoutTeamInputSchema';
import { StaffUncheckedUpdateWithoutTeamInputSchema } from './StaffUncheckedUpdateWithoutTeamInputSchema';

export const StaffUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StaffUpdateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutTeamInputSchema) ]),
});

export default StaffUpdateWithWhereUniqueWithoutTeamInputSchema;
