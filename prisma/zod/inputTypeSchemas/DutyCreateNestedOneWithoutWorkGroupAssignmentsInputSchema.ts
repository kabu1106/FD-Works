import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';

export const DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema: z.ZodType<Prisma.DutyCreateNestedOneWithoutWorkGroupAssignmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
});

export default DutyCreateNestedOneWithoutWorkGroupAssignmentsInputSchema;
