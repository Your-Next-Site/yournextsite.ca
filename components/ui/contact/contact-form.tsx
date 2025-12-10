'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import type z from 'zod'
import { Button } from '@/components/ui/button'
import ContentContainer from '@/components/ui/containers/content-container'
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions/resend'
import { formSchema } from '@/lib/zod/contact-form-schema'

export default function ContactForm() {
	function sendToast(success = true) {
		success
			? toast.info('Message sent successfully', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
			: toast.error('Message not sent', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		mode: 'onChange',
	})

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const success = await sendEmail(data)
		if (success === true) sendToast()
		else sendToast(false)
	}

	return (
		<ContentContainer>
			<form
				className="flex w-full flex-col"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FieldGroup>
					<Controller
						control={form.control}
						name="name"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Name
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="email"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Email
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="subject"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Subject
								</FieldLabel>
								<Input
									{...field}
									aria-invalid={fieldState.invalid}
									id={field.name}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={form.control}
						name="message"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-textarea-about">
									Message
								</FieldLabel>
								<Textarea
									{...field}
									aria-invalid={fieldState.invalid}
									className="min-h-[120px]"
									id="form-rhf-textarea-about"
									placeholder="I'm a have an idea, I wan to turn in to a website..."
								/>
								<FieldDescription>
									Tell us more about yourself. This will be
									used to help us personalize your experience.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>
				<Button
					className="mt-8 w-full bg-blue-600 font-bold text-lg text-white shadow-lg hover:bg-blue-700"
					size="lg"
					type="submit"
				>
					Send Email
				</Button>
			</form>
			<ToastContainer />
		</ContentContainer>
	)
}
