import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { StaffInVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema } from './StaffInVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema';

export const DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema: z.ZodType<Prisma.DispatchedVehicleUncheckedUpdateWithoutIncidentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  vehicleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  staffs: z.lazy(() => StaffInVehicleUncheckedUpdateManyWithoutVehicleNestedInputSchema).optional(),
});

export default DispatchedVehicleUncheckedUpdateWithoutIncidentInputSchema;
