import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { DutyUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUpdateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema';

export const DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInputSchema: z.ZodType<Prisma.DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DutyUpdateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema) ]),
});

export default DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInputSchema;
