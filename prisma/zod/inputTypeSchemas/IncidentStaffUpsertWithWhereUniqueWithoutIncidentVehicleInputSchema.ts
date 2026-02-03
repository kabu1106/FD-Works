import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithoutIncidentVehicleInputSchema } from './IncidentStaffUpdateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema';
import { IncidentStaffCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffCreateWithoutIncidentVehicleInputSchema';
import { IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema } from './IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema';

export const IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema: z.ZodType<Prisma.IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutIncidentVehicleInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutIncidentVehicleInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutIncidentVehicleInputSchema) ]),
});

export default IncidentStaffUpsertWithWhereUniqueWithoutIncidentVehicleInputSchema;
