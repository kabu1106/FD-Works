import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUpdateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentCreateWithoutStaffInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema';

export const SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutStaffInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutStaffInputSchema) ]),
});

export default SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutStaffInputSchema;
