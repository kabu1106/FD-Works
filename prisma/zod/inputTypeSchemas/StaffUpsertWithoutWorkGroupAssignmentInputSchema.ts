import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUpdateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';
import { StaffCreateWithoutWorkGroupAssignmentInputSchema } from './StaffCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffUpsertWithoutWorkGroupAssignmentInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutWorkGroupAssignmentInputSchema;
