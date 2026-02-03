import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffScalarWhereInputSchema } from './StaffScalarWhereInputSchema';
import { StaffUpdateManyMutationInputSchema } from './StaffUpdateManyMutationInputSchema';
import { StaffUncheckedUpdateManyWithoutTeamInputSchema } from './StaffUncheckedUpdateManyWithoutTeamInputSchema';

export const StaffUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => StaffScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StaffUpdateManyMutationInputSchema), z.lazy(() => StaffUncheckedUpdateManyWithoutTeamInputSchema) ]),
});

export default StaffUpdateManyWithWhereWithoutTeamInputSchema;
