import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DutyOrderByWithRelationInputSchema } from './DutyOrderByWithRelationInputSchema';
import { IncidentCategoryOrderByWithRelationInputSchema } from './IncidentCategoryOrderByWithRelationInputSchema';
import { IncidentTypeOrderByWithRelationInputSchema } from './IncidentTypeOrderByWithRelationInputSchema';
import { LocationOrderByWithRelationInputSchema } from './LocationOrderByWithRelationInputSchema';
import { HospitalOrderByWithRelationInputSchema } from './HospitalOrderByWithRelationInputSchema';
import { IncidentVehicleOrderByRelationAggregateInputSchema } from './IncidentVehicleOrderByRelationAggregateInputSchema';

export const IncidentOrderByWithRelationInputSchema: z.ZodType<Prisma.IncidentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  dutyId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  typeId: z.lazy(() => SortOrderSchema).optional(),
  locationId: z.lazy(() => SortOrderSchema).optional(),
  destinationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  destinationName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  duty: z.lazy(() => DutyOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => IncidentCategoryOrderByWithRelationInputSchema).optional(),
  type: z.lazy(() => IncidentTypeOrderByWithRelationInputSchema).optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputSchema).optional(),
  destination: z.lazy(() => HospitalOrderByWithRelationInputSchema).optional(),
  vehicles: z.lazy(() => IncidentVehicleOrderByRelationAggregateInputSchema).optional(),
});

export default IncidentOrderByWithRelationInputSchema;
