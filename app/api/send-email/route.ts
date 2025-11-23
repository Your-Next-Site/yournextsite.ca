import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { type NextRequest, NextResponse } from 'next/server'

const sesClient = new SESClient({
	region: 'us-east-1', // Change to your AWS SES region
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
	},
})

export async function POST(req: NextRequest) {
	try {
		const { name, email, subject, content } = await req.json()

		const params = {
			Source: 'no-reply@yournextsite.ca', // Must be a verified email in SES
			Destination: {
				ToAddresses: ['me@wagnerpires.ca', 'pmacdonald15@gmail.com'],
			},
			//   Destination: { ToAddresses: [email] },
			Message: {
				Subject: { Data: subject },
				Body: {
					Text: { Data: `From: ${name} ${email} \n\n${content}` },
				},
			},
		}

		await sesClient.send(new SendEmailCommand(params))

		return NextResponse.json({ message: 'Email sent successfully!' })
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json(
			{ error: 'Failed to send email' },
			{ status: 500 },
		)
	}
}
