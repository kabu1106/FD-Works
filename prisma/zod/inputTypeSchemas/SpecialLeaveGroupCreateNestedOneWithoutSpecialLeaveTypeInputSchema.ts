import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupWhereUniqueInputSchema } from './SpecialLeaveGroupWhereUniqueInputSchema';

export const SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInput> = z.strictObject({
  create: z.union([ z.lazy(() => SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema).optional(),
  connect: z.lazy(() => SpecialLeaveGroupWhereUniqueInputSchema).optional(),
});

export default SpecialLeaveGroupCreateNestedOneWithoutSpecialLeaveTypeInputSchema;
