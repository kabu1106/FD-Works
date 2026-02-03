import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema';

export const IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateWithoutIncidentStaffInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutIncidentStaffInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutIncidentStaffInputSchema) ]),
});

export default IncidentStaffAllowanceUpsertWithWhereUniqueWithoutIncidentStaffInputSchema;
