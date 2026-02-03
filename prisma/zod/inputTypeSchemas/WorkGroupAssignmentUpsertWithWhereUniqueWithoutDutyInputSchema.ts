import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkGroupAssignmentWhereUniqueInputSchema } from './WorkGroupAssignmentWhereUniqueInputSchema';
import { WorkGroupAssignmentUpdateWithoutDutyInputSchema } from './WorkGroupAssignmentUpdateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema';
import { WorkGroupAssignmentCreateWithoutDutyInputSchema } from './WorkGroupAssignmentCreateWithoutDutyInputSchema';
import { WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema } from './WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema';

export const WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema: z.ZodType<Prisma.WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInput> = z.strictObject({
  where: z.lazy(() => WorkGroupAssignmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkGroupAssignmentUpdateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedUpdateWithoutDutyInputSchema) ]),
  create: z.union([ z.lazy(() => WorkGroupAssignmentCreateWithoutDutyInputSchema), z.lazy(() => WorkGroupAssignmentUncheckedCreateWithoutDutyInputSchema) ]),
});

export default WorkGroupAssignmentUpsertWithWhereUniqueWithoutDutyInputSchema;
