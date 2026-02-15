import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema';

export const IncidentStaffEngagementCreateWithoutIncidentInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateWithoutIncidentInput> = z.strictObject({
  id: z.string().optional(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema),
});

export default IncidentStaffEngagementCreateWithoutIncidentInputSchema;
