import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema } from './IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema';
import { IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema } from './IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema';

export const AllowanceTypeUpdateWithoutAllowanceGroupInputSchema: z.ZodType<Prisma.AllowanceTypeUpdateWithoutAllowanceGroupInput> = z.strictObject({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  IncidentStaffAllowance: z.lazy(() => IncidentStaffAllowanceUpdateManyWithoutAllowanceTypeNestedInputSchema).optional(),
  IncidentAllowanceSummary: z.lazy(() => IncidentAllowanceSummaryUpdateManyWithoutAllowanceTypeNestedInputSchema).optional(),
});

export default AllowanceTypeUpdateWithoutAllowanceGroupInputSchema;
