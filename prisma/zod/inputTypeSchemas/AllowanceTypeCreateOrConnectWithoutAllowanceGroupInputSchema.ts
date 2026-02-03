import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema';

export const AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeCreateOrConnectWithoutAllowanceGroupInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema) ]),
});

export default AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema;
