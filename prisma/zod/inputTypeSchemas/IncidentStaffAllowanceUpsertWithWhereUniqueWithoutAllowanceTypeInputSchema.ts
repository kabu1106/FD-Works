import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema';

export const IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema) ]),
  create: z.union([ z.lazy(() => IncidentStaffAllowanceCreateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedCreateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentStaffAllowanceUpsertWithWhereUniqueWithoutAllowanceTypeInputSchema;
