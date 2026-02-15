import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DispatchedVehicleCreateNestedOneWithoutStaffsInputSchema } from './DispatchedVehicleCreateNestedOneWithoutStaffsInputSchema';

export const StaffInVehicleCreateInputSchema: z.ZodType<Prisma.StaffInVehicleCreateInput> = z.strictObject({
  staffId: z.number().int(),
  vehicle: z.lazy(() => DispatchedVehicleCreateNestedOneWithoutStaffsInputSchema),
});

export default StaffInVehicleCreateInputSchema;
