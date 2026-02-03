import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema';
import { AllowanceGroupWhereUniqueInputSchema } from './AllowanceGroupWhereUniqueInputSchema';

export const AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema: z.ZodType<Prisma.AllowanceGroupCreateNestedOneWithoutAllowanceTypesInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceGroupCreateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema).optional(),
  connect: z.lazy(() => AllowanceGroupWhereUniqueInputSchema).optional(),
});

export default AllowanceGroupCreateNestedOneWithoutAllowanceTypesInputSchema;
