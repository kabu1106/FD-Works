import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema';
import { StaffUpsertWithoutIncidentStaffEngagementsInputSchema } from './StaffUpsertWithoutIncidentStaffEngagementsInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema } from './StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema';
import { StaffUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUpdateWithoutIncidentStaffEngagementsInputSchema';
import { StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';

export const StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutIncidentStaffEngagementsInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutIncidentStaffEngagementsInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema;
