import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentVehicleCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema';
import { IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema } from './IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema';
import { IncidentVehicleUpsertWithoutIncidentStaffInputSchema } from './IncidentVehicleUpsertWithoutIncidentStaffInputSchema';
import { IncidentVehicleWhereUniqueInputSchema } from './IncidentVehicleWhereUniqueInputSchema';
import { IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInputSchema } from './IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInputSchema';
import { IncidentVehicleUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUpdateWithoutIncidentStaffInputSchema';
import { IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema';

export const IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentVehicleCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedCreateWithoutIncidentStaffInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentVehicleCreateOrConnectWithoutIncidentStaffInputSchema).optional(),
  upsert: z.lazy(() => IncidentVehicleUpsertWithoutIncidentStaffInputSchema).optional(),
  connect: z.lazy(() => IncidentVehicleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentVehicleUpdateToOneWithWhereWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentVehicleUncheckedUpdateWithoutIncidentStaffInputSchema) ]).optional(),
});

export default IncidentVehicleUpdateOneRequiredWithoutIncidentStaffNestedInputSchema;
