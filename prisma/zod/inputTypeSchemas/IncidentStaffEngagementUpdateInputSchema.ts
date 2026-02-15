import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema } from './IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema';
import { StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema } from './StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema';

export const IncidentStaffEngagementUpdateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  engagedFrom: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  engagedTo: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  incident: z.lazy(() => IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema).optional(),
  staff: z.lazy(() => StaffUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema).optional(),
});

export default IncidentStaffEngagementUpdateInputSchema;
