import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecialLeaveAssignmentWhereUniqueInputSchema } from './SpecialLeaveAssignmentWhereUniqueInputSchema';
import { SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema';
import { SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema } from './SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema';

export const SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema: z.ZodType<Prisma.SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInput> = z.strictObject({
  where: z.lazy(() => SpecialLeaveAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SpecialLeaveAssignmentUpdateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedUpdateWithoutSpecialLeaveTypeInputSchema) ]),
  create: z.union([ z.lazy(() => SpecialLeaveAssignmentCreateWithoutSpecialLeaveTypeInputSchema), z.lazy(() => SpecialLeaveAssignmentUncheckedCreateWithoutSpecialLeaveTypeInputSchema) ]),
});

export default SpecialLeaveAssignmentUpsertWithWhereUniqueWithoutSpecialLeaveTypeInputSchema;
