import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IncidentVehicleOrderByRelationAggregateInputSchema } from './IncidentVehicleOrderByRelationAggregateInputSchema';
import { DepartmentOrderByWithRelationInputSchema } from './DepartmentOrderByWithRelationInputSchema';

export const VehicleOrderByWithRelationInputSchema: z.ZodType<Prisma.VehicleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  departmentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  incidents: z.lazy(() => IncidentVehicleOrderByRelationAggregateInputSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
});

export default VehicleOrderByWithRelationInputSchema;
