import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema } from './IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema';

export const IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUncheckedUpdateWithoutVehicleInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  incidentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUncheckedUpdateManyWithoutIncidentVehicleNestedInputSchema).optional(),
});

export default IncidentVehicleUncheckedUpdateWithoutVehicleInputSchema;
