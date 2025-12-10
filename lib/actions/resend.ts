'use server'
import { error } from 'node:console'
import { Resend } from 'resend'
import type z from 'zod'
import { EmailTemplate } from '@/components/ui/email-templates/contact-email'
import { formSchema } from '../zod/contact-form-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(
	values: z.infer<typeof formSchema>,
): Promise<boolean> {
	const validatedFields = formSchema.safeParse({
		name: values.name,
		subject: values.subject,
		email: values.email,
		message: values.message,
	})

	if (!validatedFields.success) {
		console.error('Invalid form data: ', validatedFields.error)
		return false
	}

	try {
		const { data, error } = await resend.emails.send({
			from: 'Contact Form <contact@resend.dev>',
			to: ['pmacdonald15@gmail.com'],
			subject: validatedFields.data.subject,
			react: EmailTemplate({
				name: validatedFields.data.name,
				email: validatedFields.data.email,
				subject: validatedFields.data.message,
				message: validatedFields.data.message,
			}),
			replyTo: validatedFields.data.email,
		})

		console.log('Result: ', data)

		if (error) {
			console.error('Error ', error)
			return false
		}
		return true
	} catch (e: unknown) {
		console.error('ErrorSending email: ', e, error)
		return false
	}
}
