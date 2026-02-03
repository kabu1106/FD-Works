import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';
import { IncidentStaffUpdateWithoutAllowancesInputSchema } from './IncidentStaffUpdateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema';

export const IncidentStaffUpdateToOneWithWhereWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffUpdateToOneWithWhereWithoutAllowancesInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => IncidentStaffUpdateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema) ]),
});

export default IncidentStaffUpdateToOneWithWhereWithoutAllowancesInputSchema;
