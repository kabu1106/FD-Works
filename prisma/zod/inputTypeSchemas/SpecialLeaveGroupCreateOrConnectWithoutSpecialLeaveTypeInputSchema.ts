import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveGroupWhereUniqueInputSchema } from './SpecialLeaveGroupWhereUniqueInputSchema';
import { SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveGroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveGroupCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveGroupUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveGroupCreateOrConnectWithoutSpecialLeaveTypeInputSchema;
