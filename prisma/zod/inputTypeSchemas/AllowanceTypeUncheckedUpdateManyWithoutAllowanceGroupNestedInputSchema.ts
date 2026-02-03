import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema } from './AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema';
import { AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema } from './AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema } from './AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema';
import { AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema } from './AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema';
import { AllowanceTypeWhereUniqueInputSchema } from './AllowanceTypeWhereUniqueInputSchema';
import { AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema } from './AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema';
import { AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema } from './AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema';
import { AllowanceTypeScalarWhereInputSchema } from './AllowanceTypeScalarWhereInputSchema';

export const AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeCreateWithoutAllowanceGroupInputSchema).array(), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUncheckedCreateWithoutAllowanceGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeCreateOrConnectWithoutAllowanceGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUpsertWithWhereUniqueWithoutAllowanceGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AllowanceTypeCreateManyAllowanceGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AllowanceTypeWhereUniqueInputSchema), z.lazy(() => AllowanceTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AllowanceTypeWhereUniqueInputSchema), z.lazy(() => AllowanceTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AllowanceTypeWhereUniqueInputSchema), z.lazy(() => AllowanceTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AllowanceTypeWhereUniqueInputSchema), z.lazy(() => AllowanceTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUpdateWithWhereUniqueWithoutAllowanceGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema), z.lazy(() => AllowanceTypeUpdateManyWithWhereWithoutAllowanceGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AllowanceTypeScalarWhereInputSchema), z.lazy(() => AllowanceTypeScalarWhereInputSchema).array() ]).optional(),
});

export default AllowanceTypeUncheckedUpdateManyWithoutAllowanceGroupNestedInputSchema;
