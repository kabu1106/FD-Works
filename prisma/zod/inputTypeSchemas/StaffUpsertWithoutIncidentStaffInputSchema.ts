import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutIncidentStaffInputSchema } from './StaffUpdateWithoutIncidentStaffInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffInputSchema';
import { StaffCreateWithoutIncidentStaffInputSchema } from './StaffCreateWithoutIncidentStaffInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffUpsertWithoutIncidentStaffInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutIncidentStaffInputSchema;
