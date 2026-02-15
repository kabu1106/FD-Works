import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';
import { StaffUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUpdateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema';

export const StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInputSchema: z.ZodType<Prisma.StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInput> = z.strictObject({
  where: z.lazy(() => StaffWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StaffUpdateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema) ]),
});

export default StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInputSchema;
