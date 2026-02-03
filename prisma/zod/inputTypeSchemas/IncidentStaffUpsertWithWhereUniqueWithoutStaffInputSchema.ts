import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffWhereUniqueInputSchema } from './IncidentStaffWhereUniqueInputSchema';
import { IncidentStaffUpdateWithoutStaffInputSchema } from './IncidentStaffUpdateWithoutStaffInputSchema';
import { IncidentStaffUncheckedUpdateWithoutStaffInputSchema } from './IncidentStaffUncheckedUpdateWithoutStaffInputSchema';
import { IncidentStaffCreateWithoutStaffInputSchema } from './IncidentStaffCreateWithoutStaffInputSchema';
import { IncidentStaffUncheckedCreateWithoutStaffInputSchema } from './IncidentStaffUncheckedCreateWithoutStaffInputSchema';

export const IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.IncidentStaffUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffUpdateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffCreateWithoutStaffInputSchema), z.lazy(() => IncidentStaffUncheckedCreateWithoutStaffInputSchema) ]),
});

export default IncidentStaffUpsertWithWhereUniqueWithoutStaffInputSchema;
