import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffUpdateWithoutAllowancesInputSchema } from './IncidentStaffUpdateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema';
import { IncidentStaffCreateWithoutAllowancesInputSchema } from './IncidentStaffCreateWithoutAllowancesInputSchema';
import { IncidentStaffUncheckedCreateWithoutAllowancesInputSchema } from './IncidentStaffUncheckedCreateWithoutAllowancesInputSchema';
import { IncidentStaffWhereInputSchema } from './IncidentStaffWhereInputSchema';

export const IncidentStaffUpsertWithoutAllowancesInputSchema: z.ZodType<Prisma.IncidentStaffUpsertWithoutAllowancesInput> = z.strictObject({
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutAllowancesInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutAllowancesInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutAllowancesInputSchema) ]),
  where: z.lazy(() => IncidentStaffWhereInputSchema).optional(),
});

export default IncidentStaffUpsertWithoutAllowancesInputSchema;
