import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StaffCreateWithoutSubstituteHolidaysInputSchema } from './StaffCreateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema';
import { StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema } from './StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema';
import { StaffUpsertWithoutSubstituteHolidaysInputSchema } from './StaffUpsertWithoutSubstituteHolidaysInputSchema';
import { StaffWhereUniqueInputSchema } from './StaffWhereUniqueInputSchema';
import { StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInputSchema } from './StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInputSchema';
import { StaffUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUpdateWithoutSubstituteHolidaysInputSchema';
import { StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema } from './StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema';

export const StaffUpdateOneRequiredWithoutSubstituteHolidaysNestedInputSchema: z.ZodType<Prisma.StaffUpdateOneRequiredWithoutSubstituteHolidaysNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => StaffCreateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedCreateWithoutSubstituteHolidaysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StaffCreateOrConnectWithoutSubstituteHolidaysInputSchema).optional(),
  upsert: z.lazy(() => StaffUpsertWithoutSubstituteHolidaysInputSchema).optional(),
  connect: z.lazy(() => StaffWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StaffUpdateToOneWithWhereWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUpdateWithoutSubstituteHolidaysInputSchema), z.lazy(() => StaffUncheckedUpdateWithoutSubstituteHolidaysInputSchema) ]).optional(),
});

export default StaffUpdateOneRequiredWithoutSubstituteHolidaysNestedInputSchema;
