import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUpdateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema';
import { DutyCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';

export const DutyUpsertWithoutWorkGroupAssignmentsInputSchema: z.ZodType<Prisma.DutyUpsertWithoutWorkGroupAssignmentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => DutyUpdateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema) ]),
  create: z.union([ z.lazy(() => DutyCreateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema) ]),
  where: z.lazy(() => DutyWhereInputSchema).optional(),
});

export default DutyUpsertWithoutWorkGroupAssignmentsInputSchema;
