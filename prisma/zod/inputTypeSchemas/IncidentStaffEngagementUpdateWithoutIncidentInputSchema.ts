import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema } from './StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema';

export const IncidentStaffEngagementUpdateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateWithoutIncidentInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  engagedFrom: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  engagedTo: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema).optional(),
});

export default IncidentStaffEngagementUpdateWithoutIncidentInputSchema;
