import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutIncidentStaffInputSchema } from './StaffUpdateWithoutIncidentStaffInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffInputSchema';

export const StaffUpdateToOneWithWhereWithoutIncidentStaffInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutIncidentStaffInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutIncidentStaffInputSchema;
