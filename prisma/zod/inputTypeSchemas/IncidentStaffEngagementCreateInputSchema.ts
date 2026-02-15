import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema';
import { StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema } from './StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema';

export const IncidentStaffEngagementCreateInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateInput> = z.strictObject({
  id: z.string().optional(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  incident: z.lazy(() => IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema),
  staff: z.lazy(() => StaffCreateNestedOneWithoutIncidentStaffEngagementsInputSchema),
});

export default IncidentStaffEngagementCreateInputSchema;
