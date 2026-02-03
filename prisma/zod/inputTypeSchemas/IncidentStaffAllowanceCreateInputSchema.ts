import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateNestedOneWithoutAllowancesInputSchema } from './IncidentStaffCreateNestedOneWithoutAllowancesInputSchema';
import { AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema } from './AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema';

export const IncidentStaffAllowanceCreateInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaff: z.lazy(() => IncidentStaffCreateNestedOneWithoutAllowancesInputSchema),
  allowanceType: z.lazy(() => AllowanceTypeCreateNestedOneWithoutIncidentStaffAllowanceInputSchema),
});

export default IncidentStaffAllowanceCreateInputSchema;
