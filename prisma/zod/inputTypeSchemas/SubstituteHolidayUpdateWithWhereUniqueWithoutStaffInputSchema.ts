import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayWhereUniqueInputSchema } from './SubstituteHolidayWhereUniqueInputSchema';
import { SubstituteHolidayUpdateWithoutStaffInputSchema } from './SubstituteHolidayUpdateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema';

export const SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SubstituteHolidayWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubstituteHolidayUpdateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema) ]),
});

export default SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema;
