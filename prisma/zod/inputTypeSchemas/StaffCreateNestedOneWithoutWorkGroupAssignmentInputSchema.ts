import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutWorkGroupAssignmentInputSchema } from './StaffCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema } from './StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutWorkGroupAssignmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutWorkGroupAssignmentInputSchema;
