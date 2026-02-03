import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema';

export const IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentStaffAllowanceUpdateWithWhereUniqueWithoutIncidentStaffInputSchema;
