import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutWorkGroupAssignmentInputSchema } from './StaffCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema';
import { StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema } from './StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema';
import { StaffUpsertWithoutWorkGroupAssignmentInputSchema } from './StaffUpsertWithoutWorkGroupAssignmentInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema } from './StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema';
import { StaffUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUpdateWithoutWorkGroupAssignmentInputSchema';
import { StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema } from './StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema';

export const StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedCreateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutWorkGroupAssignmentInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutWorkGroupAssignmentInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUpdateWithoutWorkGroupAssignmentInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutWorkGroupAssignmentInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutWorkGroupAssignmentNestedInputSchema;
