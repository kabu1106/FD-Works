import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUpdateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';

export const StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema;
