import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUpdateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentCreateWithoutDutyInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema';

export const SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutDutyInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema;
