'use server'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const sesClient = new SESClient({
	region: 'us-east-1', // Change to your AWS SES region
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
	},
})

export async function submitForm(formData: FormData) {
	try {
		const name = formData.get('name') as string
		const email = formData.get('email') as string
		const subject = formData.get('subject') as string
		const content = formData.get('content') as string

		const params = {
			Source: 'no-reply@yournextsite.ca', // Must be a verified email in SES
			Destination: {
				ToAddresses: [
					'me@wagnerpires.ca',
					'patrick@yournextsite.ca',
					'pmacdonald15@gmail.com',
				],
			},
			//   Destination: { ToAddresses: [email] },
			Message: {
				Subject: { Data: subject },
				Body: {
					Text: { Data: `From: ${name} ${email} \n\n${content}` },
				},
			},
		}

		const results = await sesClient.send(new SendEmailCommand(params))
		console.log('results: ', results)
		return { success: true }
	} catch (error) {
		console.error('Error sending email:', error)
	}
}
