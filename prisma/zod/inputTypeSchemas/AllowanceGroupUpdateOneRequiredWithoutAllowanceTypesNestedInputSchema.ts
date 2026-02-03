import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceGroupCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema } from './AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUpsertWithoutAllowanceTypesInputSchema } from './AllowanceGroupUpsertWithoutAllowanceTypesInputSchema';
import { AllowanceGroupWhereUniqueInputSchema } from './AllowanceGroupWhereUniqueInputSchema';
import { AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInputSchema } from './AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUpdateWithoutAllowanceTypesInputSchema';
import { AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema } from './AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema';

export const AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema: z.ZodType<Prisma.AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceGroupCreateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedCreateWithoutAllowanceTypesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AllowanceGroupCreateOrConnectWithoutAllowanceTypesInputSchema).optional(),
  upsert: z.lazy(() => AllowanceGroupUpsertWithoutAllowanceTypesInputSchema).optional(),
  connect: z.lazy(() => AllowanceGroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AllowanceGroupUpdateToOneWithWhereWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUpdateWithoutAllowanceTypesInputSchema), z.lazy(() => AllowanceGroupUncheckedUpdateWithoutAllowanceTypesInputSchema) ]).optional(),
});

export default AllowanceGroupUpdateOneRequiredWithoutAllowanceTypesNestedInputSchema;
