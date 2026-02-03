import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const IncidentVehicleScalarWhereInputSchema: z.ZodType<Prisma.IncidentVehicleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentVehicleScalarWhereInputSchema), z.lazy(() => IncidentVehicleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentVehicleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentVehicleScalarWhereInputSchema), z.lazy(() => IncidentVehicleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  incidentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  vehicleId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  dispatchTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  returnTime: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default IncidentVehicleScalarWhereInputSchema;
