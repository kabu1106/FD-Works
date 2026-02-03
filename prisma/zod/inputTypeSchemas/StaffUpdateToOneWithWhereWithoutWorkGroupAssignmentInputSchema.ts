import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUpdateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';

export const StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema;
