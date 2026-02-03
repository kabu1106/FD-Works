import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutIncidentStaffInputSchema } from './StaffCreateWithoutIncidentStaffInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffInputSchema';
import { StaffCreateOrConnectWithoutIncidentStaffInputSchema } from './StaffCreateOrConnectWithoutIncidentStaffInputSchema';
import { StaffUpsertWithoutIncidentStaffInputSchema } from './StaffUpsertWithoutIncidentStaffInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutIncidentStaffInputSchema } from './StaffUpdateToOneWithWhereWithoutIncidentStaffInputSchema';
import { StaffUpdateWithoutIncidentStaffInputSchema } from './StaffUpdateWithoutIncidentStaffInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffInputSchema';

export const StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutIncidentStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutIncidentStaffInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutIncidentStaffInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutIncidentStaffInputSchema), z.lazy(() => StaffUpdateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutIncidentStaffNestedInputSchema;
