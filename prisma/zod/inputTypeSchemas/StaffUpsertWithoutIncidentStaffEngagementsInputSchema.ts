import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUpdateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';
import { StaffCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.StaffUpsertWithoutIncidentStaffEngagementsInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutIncidentStaffEngagementsInputSchema;
