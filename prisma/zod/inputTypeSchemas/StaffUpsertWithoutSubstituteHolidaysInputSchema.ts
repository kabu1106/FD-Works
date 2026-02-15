import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUpdateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema';
import { StaffCreateWithoutSubstituteHolidaysInputSchema } from './StaffCreateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema';
import { StaffWhereInputSchema } from './StaffWhereInputSchema';

export const StaffUpsertWithoutSubstituteHolidaysInputSchema: z.ZodType<Prisma.StaffUpsertWithoutSubstituteHolidaysInput> = z.strictObject({
  update: z.union([ z.lazy(() => StaffUpdateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema) ]),
  create: z.union([ z.lazy(() => StaffCreateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema) ]),
  where: z.lazy(() => StaffWhereInputSchema).optional(),
});

export default StaffUpsertWithoutSubstituteHolidaysInputSchema;
