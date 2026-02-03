import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithoutStaffInputSchema } from './IncidentStaffUpdateWithoutStaffInputSchema';
import { IncidentStaffUncheckedUpdateWithoutStaffInputSchema } from './IncidentStaffUncheckedUpdateWithoutStaffInputSchema';

export const IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffUpdateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default IncidentStaffUpdateWithWhereUniqueWithoutStaffInputSchema;
