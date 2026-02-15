import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutSubstituteHolidaysInputSchema } from './StaffCreateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema';
import { StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema } from './StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';

export const StaffCreateNestedOneWithoutSubstituteHolidaysInputSchema: z.ZodType<Prisma.StaffCreateNestedOneWithoutSubstituteHolidaysInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
});

export default StaffCreateNestedOneWithoutSubstituteHolidaysInputSchema;
