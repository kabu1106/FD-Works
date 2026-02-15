import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';

export const StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutIncidentStaffEngagementsInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]),
});

export default StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema;
