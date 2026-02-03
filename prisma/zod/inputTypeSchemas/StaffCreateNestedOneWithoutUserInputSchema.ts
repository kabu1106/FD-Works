import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema';
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema';
import { StaffCreateOrConnectWithoutUserInputSchema } from './StaffCreateOrConnectWithoutUserInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutUserInputSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutUserInputSchema;
