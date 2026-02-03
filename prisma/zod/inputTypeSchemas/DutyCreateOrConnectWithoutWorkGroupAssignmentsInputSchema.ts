import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema';

export const DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema: z.ZodType<Prisma.DutyCreateOrConnectWithoutWorkGroupAssignmentsInput> = z.strictObject({
  where: z.lazy(() => DutyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DutyCreateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema) ]),
});

export default DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema;
