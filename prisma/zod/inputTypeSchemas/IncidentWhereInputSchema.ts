import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumIncidentStatusFilterSchema } from './EnumIncidentStatusFilterSchema';
import { IncidentStatusSchema } from './IncidentStatusSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DutyRelationFilterSchema } from './DutyRelationFilterSchema';
import { DutyWhereInputSchema } from './DutyWhereInputSchema';
import { IncidentCategoryRelationFilterSchema } from './IncidentCategoryRelationFilterSchema';
import { IncidentCategoryWhereInputSchema } from './IncidentCategoryWhereInputSchema';
import { IncidentTypeRelationFilterSchema } from './IncidentTypeRelationFilterSchema';
import { IncidentTypeWhereInputSchema } from './IncidentTypeWhereInputSchema';
import { LocationRelationFilterSchema } from './LocationRelationFilterSchema';
import { LocationWhereInputSchema } from './LocationWhereInputSchema';
import { HospitalNullableRelationFilterSchema } from './HospitalNullableRelationFilterSchema';
import { HospitalWhereInputSchema } from './HospitalWhereInputSchema';
import { IncidentVehicleListRelationFilterSchema } from './IncidentVehicleListRelationFilterSchema';
import { IncidentStaffEngagementListRelationFilterSchema } from './IncidentStaffEngagementListRelationFilterSchema';

export const IncidentWhereInputSchema: z.ZodType<Prisma.IncidentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => IncidentWhereInputSchema), z.lazy(() => IncidentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IncidentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IncidentWhereInputSchema), z.lazy(() => IncidentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dutyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  typeId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  locationId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  destinationId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  destinationName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  occurredAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumIncidentStatusFilterSchema), z.lazy(() => IncidentStatusSchema) ]).optional(),
  isDeleted: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  duty: z.union([ z.lazy(() => DutyRelationFilterSchema), z.lazy(() => DutyWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => IncidentCategoryRelationFilterSchema), z.lazy(() => IncidentCategoryWhereInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => IncidentTypeRelationFilterSchema), z.lazy(() => IncidentTypeWhereInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => LocationRelationFilterSchema), z.lazy(() => LocationWhereInputSchema) ]).optional(),
  destination: z.union([ z.lazy(() => HospitalNullableRelationFilterSchema), z.lazy(() => HospitalWhereInputSchema) ]).optional().nullable(),
  vehicles: z.lazy(() => IncidentVehicleListRelationFilterSchema).optional(),
  incidentStaffEngagements: z.lazy(() => IncidentStaffEngagementListRelationFilterSchema).optional(),
});

export default IncidentWhereInputSchema;
