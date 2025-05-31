import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'), 
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Please enter a valid @ email address'),
    message: z.string().min(10, 'Please let us know how we can help you'),
});

export type FormSchma = typeof formSchema;