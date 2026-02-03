import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';
import { AllowanceGroupUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUpdateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema';

export const AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInput> = z.strictObject({
  where: z.lazy(() => AllowanceGroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AllowanceGroupUpdateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema) ]),
});

export default AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInputSchema;
