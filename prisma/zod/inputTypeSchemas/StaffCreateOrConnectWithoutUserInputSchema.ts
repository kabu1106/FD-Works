import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema';
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema';

export const StaffCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutUserInputSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema) ]),
});

export default StaffCreateOrConnectWithoutUserInputSchema;
