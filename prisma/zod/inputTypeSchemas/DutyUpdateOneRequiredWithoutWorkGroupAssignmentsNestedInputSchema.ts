import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DutyCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema';
import { DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema } from './DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema';
import { DutyUpsertWithoutWorkGroupAssignmentsInputSchema } from './DutyUpsertWithoutWorkGroupAssignmentsInputSchema';
import { DutyWhereUniqueInputSchema } from './DutyWhereUniqueInputSchema';
import { DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInputSchema } from './DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInputSchema';
import { DutyUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUpdateWithoutWorkGroupAssignmentsInputSchema';
import { DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema } from './DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema';

export const DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema: z.ZodType<Prisma.DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DutyCreateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedCreateWithoutWorkGroupAssignmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DutyCreateOrConnectWithoutWorkGroupAssignmentsInputSchema).optional(),
  upsert: z.lazy(() => DutyUpsertWithoutWorkGroupAssignmentsInputSchema).optional(),
  connect: z.lazy(() => DutyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DutyUpdateToOneWithWhereWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUpdateWithoutWorkGroupAssignmentsInputSchema), z.lazy(() => DutyUncheckedUpdateWithoutWorkGroupAssignmentsInputSchema) ]).optional(),
});

export default DutyUpdateOneRequiredWithoutWorkGroupAssignmentsNestedInputSchema;
