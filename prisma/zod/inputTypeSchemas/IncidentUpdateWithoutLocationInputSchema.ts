import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema } from './DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema';
import { IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema } from './IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema';
import { IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema } from './IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema';
import { HospitalUpdateOneWithoutDestinationNestedInputSchema } from './HospitalUpdateOneWithoutDestinationNestedInputSchema';
import { IncidentVehicleUpdateManyWithoutIncidentNestedInputSchema } from './IncidentVehicleUpdateManyWithoutIncidentNestedInputSchema';

export const IncidentUpdateWithoutLocationInputSchema: z.ZodType<Prisma.IncidentUpdateWithoutLocationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  destinationName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema).optional(),
  category: z.lazy(() => IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema).optional(),
  type: z.lazy(() => IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema).optional(),
  destination: z.lazy(() => HospitalUpdateOneWithoutDestinationNestedInputSchema).optional(),
  vehicles: z.lazy(() => IncidentVehicleUpdateManyWithoutIncidentNestedInputSchema).optional(),
});

export default IncidentUpdateWithoutLocationInputSchema;
