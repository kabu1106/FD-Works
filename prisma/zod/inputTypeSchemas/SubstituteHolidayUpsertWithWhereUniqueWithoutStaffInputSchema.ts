import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayWhereUniqueInputSchema } from './SubstituteHolidayWhereUniqueInputSchema';
import { SubstituteHolidayUpdateWithoutStaffInputSchema } from './SubstituteHolidayUpdateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema';
import { SubstituteHolidayCreateWithoutStaffInputSchema } from './SubstituteHolidayCreateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateWithoutStaffInputSchema';

export const SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SubstituteHolidayWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubstituteHolidayUpdateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedUpdateWithoutStaffInputSchema) ]),
  create: z.union([ z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema) ]),
});

export default SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema;
