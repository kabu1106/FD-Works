import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUpdateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema';

export const SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default SpecialLeaveAssignmentUpdateWithWhereUniqueWithoutStaffInputSchema;
