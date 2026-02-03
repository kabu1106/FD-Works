import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutUserInputSchema } from './StaffUpdateWithoutUserInputSchema';
import { StaffUncheckedUpdateWithoutUserInputSchema } from './StaffUncheckedUpdateWithoutUserInputSchema';
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema';
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutUserInputSchema: z.ZodType<Prisma.StaffUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutUserInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutUserInputSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutUserInputSchema;
