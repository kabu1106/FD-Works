import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IncidentUpdateOneRequiredWithoutVehiclesNestedInputSchema } from './IncidentUpdateOneRequiredWithoutVehiclesNestedInputSchema';
import { IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema } from './IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema';

export const IncidentVehicleUpdateWithoutVehicleInputSchema: z.ZodType<Prisma.IncidentVehicleUpdateWithoutVehicleInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dispatchTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  returnTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  incident: z.lazy(() => IncidentUpdateOneRequiredWithoutVehiclesNestedInputSchema).optional(),
  IncidentStaff: z.lazy(() => IncidentStaffUpdateManyWithoutIncidentVehicleNestedInputSchema).optional(),
});

export default IncidentVehicleUpdateWithoutVehicleInputSchema;
