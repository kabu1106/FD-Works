import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveTypeCreateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedCreateWithoutSpecialLeaveGroupInputSchema) ]),
});

export default SpecialLeaveTypeUpsertWithWhereUniqueWithoutSpecialLeaveGroupInputSchema;
