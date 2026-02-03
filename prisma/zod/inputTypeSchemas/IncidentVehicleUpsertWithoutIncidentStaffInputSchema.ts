import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUpdateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema';
import { IncidentVehicleCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleWhereInputSchema } from './IncidentVehicleWhereInputSchema';

export const IncidentVehicleUpsertWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentVehicleUpsertWithoutIncidentStaffInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentVehicleUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema) ]),
  where: z.lazy(() => IncidentVehicleWhereInputSchema).optional(),
});

export default IncidentVehicleUpsertWithoutIncidentStaffInputSchema;
