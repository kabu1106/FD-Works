import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutWorkGroupAssignmentInputSchema } from './StaffCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema';

export const StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutWorkGroupAssignmentInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]),
});

export default StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema;
