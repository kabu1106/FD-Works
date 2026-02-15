import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInputSchema } from './IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInputSchema';

export const DispatchedVehicleUpdateWithoutStaffsInputSchema: z.ZodType<Prisma.DispatchedVehicleUpdateWithoutStaffsInput> = z.strictObject({
  vehicleId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  incident: z.lazy(() => IncidentReadModelUpdateOneRequiredWithoutVehiclesNestedInputSchema).optional(),
});

export default DispatchedVehicleUpdateWithoutStaffsInputSchema;
