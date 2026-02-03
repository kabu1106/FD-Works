import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutTeamInputSchema } from './StaffCreateWithoutTeamInputSchema';
import { StaffUncheckedCreateWithoutTeamInputSchema } from './StaffUncheckedCreateWithoutTeamInputSchema';

export const StaffCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutTeamInputSchema), z.lazy(() => StaffUncheckedCreateWithoutTeamInputSchema) ]),
});

export default StaffCreateOrConnectWithoutTeamInputSchema;
