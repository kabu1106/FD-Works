import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentStaffAllowanceWhereUniqueInputSchema } from './IncidentStaffAllowanceWhereUniqueInputSchema';
import { IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema';
import { IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema } from './IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema';

export const IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema: z.ZodType<Prisma.IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInput> = z.strictObject({
  where: z.lazy(() => IncidentStaffAllowanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IncidentStaffAllowanceUpdateWithoutAllowanceTypeInputSchema), z.lazy(() => IncidentStaffAllowanceUncheckedUpdateWithoutAllowanceTypeInputSchema) ]),
});

export default IncidentStaffAllowanceUpdateWithWhereUniqueWithoutAllowanceTypeInputSchema;
