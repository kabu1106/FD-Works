import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema } from './IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema';

export const IncidentVehicleUncheckedUpdateInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vehicleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema).optional(),
});

export default IncidentVehicleUncheckedUpdateInputSchema;
