import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TeamOrderByRelationAggregateInputSchema } from './TeamOrderByRelationAggregateInputSchema';
import { VehicleOrderByRelationAggregateInputSchema } from './VehicleOrderByRelationAggregateInputSchema';
import { AttendanceOrderByRelationAggregateInputSchema } from './AttendanceOrderByRelationAggregateInputSchema';

export const DepartmentOrderByWithRelationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  latitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  longitude: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  vehicle: z.lazy(() => VehicleOrderByRelationAggregateInputSchema).optional(),
  attendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
});

export default DepartmentOrderByWithRelationInputSchema;
