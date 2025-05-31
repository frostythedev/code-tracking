import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';   
import { formSchema } from './schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)), 
    };
};

export const actions: Actions = {

    default: async (event) => {
        const form = await superValidate(event, zod(formSchema));

        if (!form.valid) {
            return fail(400, { form });
        }

        // Here you would typically handle the form submission, e.g., save to a database or send an email.
        // For demonstration purposes, we'll just log the form data.
        console.log('Form submitted:', form.data);

        // Return the form with a success message
        return {
            form 
        };
    }

    // { success: true, message: 'Form submitted successfully!' }),
}