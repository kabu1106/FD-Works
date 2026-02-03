import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutUserInputSchema } from './StaffCreateWithoutUserInputSchema';
import { StaffUncheckedCreateWithoutUserInputSchema } from './StaffUncheckedCreateWithoutUserInputSchema';
import { StaffCreateOrConnectWithoutUserInputSchema } from './StaffCreateOrConnectWithoutUserInputSchema';
import { StaffUpsertWithoutUserInputSchema } from './StaffUpsertWithoutUserInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutUserInputSchema } from './StaffUpdateToOneWithWhereWithoutUserInputSchema';
import { StaffUpdateWithoutUserInputSchema } from './StaffUpdateWithoutUserInputSchema';
import { StaffUncheckedUpdateWithoutUserInputSchema } from './StaffUncheckedUpdateWithoutUserInputSchema';

export const StaffUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutUserInputSchema), z.lazy(() => StaffUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StaffWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StaffWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => StaffUpdateWithoutUserInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export default StaffUpdateOneWithoutUserNestedInputSchema;
