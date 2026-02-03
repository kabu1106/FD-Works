import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeUpdateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUpdateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema';

export const AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema) ]),
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema) ]),
});

export default AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema;
