import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeUpdateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUpdateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema';

export const AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AllowanceTypeUpdateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateWithoutAllowanceGroupInputSchema) ]),
});

export default AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema;
