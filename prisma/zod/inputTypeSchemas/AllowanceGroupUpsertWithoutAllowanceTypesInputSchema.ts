import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUpdateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupWhereInputSchema } from './AllowanceGroupWhereInputSchema';

export const AllowanceGroupUpsertWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupUpsertWithoutAllowanceTypesInput> = z.strictObject({
  update: z.union([ z.lazy(() => AllowanceGroupUpdateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema) ]),
  create: z.union([ z.lazy(() => AllowanceGroupCreateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema) ]),
  where: z.lazy(() => AllowanceGroupWhereInputSchema).optional(),
});

export default AllowanceGroupUpsertWithoutAllowanceTypesInputSchema;
