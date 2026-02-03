import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeScalarWhereInputSchema } from './AllowanceTypeScalarWhereInputSchema';
import { AllowanceTypeUpdateManyMutationInputSchema } from './AllowanceTypeUpdateManyMutationInputSchema';
import { AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupInputSchema';

export const AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInput> = z.strictObject({
  where: z.lazy(() => AllowanceTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AllowanceTypeUpdateManyMutationInputSchema), z.lazy(() => AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupInputSchema) ]),
});

export default AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema;
