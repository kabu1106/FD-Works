import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema';

export const IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateWithoutIncidentStaffInput> = z.strictObject({
  id: z.string().optional(),
  allowanceType: z.lazy(() => AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema),
});

export default IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema;
