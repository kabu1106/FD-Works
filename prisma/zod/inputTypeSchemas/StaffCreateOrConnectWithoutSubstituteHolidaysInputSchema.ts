import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffCreateWithoutSubstituteHolidaysInputSchema } from './StaffCreateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema';

export const StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutSubstituteHolidaysInput> = z.strictObject({
  where: z.lazy(() => StaffWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StaffCreateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema) ]),
});

export default StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema;
