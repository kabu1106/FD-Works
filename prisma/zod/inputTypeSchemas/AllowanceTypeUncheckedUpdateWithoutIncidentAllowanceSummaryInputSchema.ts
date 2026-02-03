import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeNestedInputSchema } from './IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeNestedInputSchema';

export const AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema: z.ZodType<Prisma.AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allowanceGroupId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUncheckedUpdateManyWithoutAllowanceTypeNestedInputSchema).optional(),
});

export default AllowanceTypeUncheckedUpdateWithoutIncidentAllowanceSummaryInputSchema;
