import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffCreateNestedOneWithoutAllowancesInputSchema } from './IncidentStaffCreateNestedOneWithoutAllowancesInputSchema';

export const IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceCreateWithoutAllowanceTypeInput> = z.strictObject({
  id: z.string().optional(),
  incidentStaff: z.lazy(() => IncidentStaffCreateNestedOneWithoutAllowancesInputSchema),
});

export default IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema;
