import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { VehicleUpdateOneRequiredWithoutIncidentsNestedInputSchema } from './VehicleUpdateOneRequiredWithoutIncidentsNestedInputSchema';
import { IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema } from './IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema';

export const IncidentVehicleUpdateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateWithoutIncidentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  vehicle: z.lazy(() => VehicleUpdateOneRequiredWithoutIncidentsNestedInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema).optional(),
});

export default IncidentVehicleUpdateWithoutIncidentInputSchema;
