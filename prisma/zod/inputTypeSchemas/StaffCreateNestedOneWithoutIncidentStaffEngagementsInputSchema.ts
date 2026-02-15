import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutIncidentStaffEngagementsInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema;
