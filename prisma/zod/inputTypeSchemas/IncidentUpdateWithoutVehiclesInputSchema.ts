import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema } from './DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema';
import { IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema } from './IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema';
import { IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema } from './IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema';
import { LocationUpdateOneRequiredWithoutIncidentsNestedInputSchema } from './LocationUpdateOneRequiredWithoutIncidentsNestedInputSchema';
import { HospitalUpdateOneWithoutDestinationNestedInputSchema } from './HospitalUpdateOneWithoutDestinationNestedInputSchema';

export const IncidentUpdateWithoutVehiclesInputSchema: z.ZodType<Prisma.IncidentUpdateWithoutVehiclesInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  destinationName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  duty: z.lazy(() => DutyUpdateOneRequiredWithoutIncidentsNestedInputSchema).optional(),
  category: z.lazy(() => IncidentCategoryUpdateOneRequiredWithoutIncidentNestedInputSchema).optional(),
  type: z.lazy(() => IncidentTypeUpdateOneRequiredWithoutIncidentNestedInputSchema).optional(),
  location: z.lazy(() => LocationUpdateOneRequiredWithoutIncidentsNestedInputSchema).optional(),
  destination: z.lazy(() => HospitalUpdateOneWithoutDestinationNestedInputSchema).optional(),
});

export default IncidentUpdateWithoutVehiclesInputSchema;
