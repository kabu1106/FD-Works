import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema) ]),
});

export default SpecialLeaveTypeCreateOrConnectWithoutSpecialLeaveGroupInputSchema;
