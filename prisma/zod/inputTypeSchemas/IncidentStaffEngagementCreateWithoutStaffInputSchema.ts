import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema';

export const IncidentStaffEngagementCreateWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffEngagementCreateWithoutStaffInput> = z.strictObject({
  id: z.string().optional(),
  engagedFrom: z.coerce.date(),
  engagedTo: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  incident: z.lazy(() => IncidentCreateNestedOneWithoutIncidentStaffEngagementsInputSchema),
});

export default IncidentStaffEngagementCreateWithoutStaffInputSchema;
