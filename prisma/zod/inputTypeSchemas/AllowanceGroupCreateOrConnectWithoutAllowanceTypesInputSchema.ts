import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupWhereUniqueInputSchema } from './AllowanceGroupWhereUniqueInputSchema';
import { AllowanceGroupCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema';

export const AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupCreateOrConnectWithoutAllowanceTypesInput> = z.strictObject({
  where: z.lazy(() => AllowanceGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AllowanceGroupCreateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema) ]),
});

export default AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema;
