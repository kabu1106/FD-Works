import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutSpecialLeaveTypeInputSchema;
