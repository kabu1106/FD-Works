import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema } from './SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';

export const SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema).array(), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SpecialLeaveTypeCreateManySpecialLeaveGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema), z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema).array() ]).optional(),
});

export default SpecialLeaveTypeUncheckedCreateNestedManyWithoutSpecialLeaveGroupInputSchema;
