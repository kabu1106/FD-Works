import { z } from 'zod';

export const DepartmentScalarFieldEnumSchema = z.enum(['id','code','name','latitude','longitude','isActive']);

export default DepartmentScalarFieldEnumSchema;
