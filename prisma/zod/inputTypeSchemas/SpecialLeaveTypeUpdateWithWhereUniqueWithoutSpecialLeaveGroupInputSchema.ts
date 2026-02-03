import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveTypeWhereUniqueInputSchema } from './SpecialLeaveTypeWhereUniqueInputSchema';
import { SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema';
import { SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema } from './SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema';

export const SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema: z.ZodType<Prisma.SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveTypeUpdateWithoutSpecialLeaveGroupInputSchema), z.lazy(() => SpecialLeaveTypeUncheckedUpdateWithoutSpecialLeaveGroupInputSchema) ]),
});

export default SpecialLeaveTypeUpdateWithWhereUniqueWithoutSpecialLeaveGroupInputSchema;
