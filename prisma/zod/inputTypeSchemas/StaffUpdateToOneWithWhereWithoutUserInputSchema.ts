import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutUserInputSchema } from './StaffUpdateWithoutUserInputSchema';
import { StaffUncheckedUpdateWithoutUserInputSchema } from './StaffUncheckedUpdateWithoutUserInputSchema';

export const StaffUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutUserInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutUserInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutUserInputSchema;
