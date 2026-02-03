import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUpdateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema';

export const SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutDutyInputSchema;
