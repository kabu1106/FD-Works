import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayWhereUniqueInputSchema } from './SubstituteHolidayWhereUniqueInputSchema';
import { SubstituteHolidayCreateWithoutStaffInputSchema } from './SubstituteHolidayCreateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateWithoutStaffInputSchema';

export const SubstituteHolidayCreateOrConnectWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayCreateOrConnectWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SubstituteHolidayWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema) ]),
});

export default SubstituteHolidayCreateOrConnectWithoutStaffInputSchema;
