import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema';
import { AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema } from './AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';

export const AllowanceTypeCreateNestedManyWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeCreateNestedManyWithoutAllowanceGroupInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema).array(), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AllowanceTypeWhereUniqueInputSchema), z.lazy(() => AllowanceTypeWhereUniqueInputSchema).array() ]).optional(),
});

export default AllowanceTypeCreateNestedManyWithoutAllowanceGroupInputSchema;
