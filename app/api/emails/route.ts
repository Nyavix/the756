export async function POST() {
    const sender = {
        name: 'My App',
        address: 'no-reply@example.com',
    }

    const receipients = [{
        name: 'The756',
        address: 'info@the756.com',
    }]

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: 'Welcome to our website!',
            message: 'You are welcome to our platform',
        })

        return Response.json({
            accepted: result.accepted,
        })
    } catch (error) {
        return Response.json({ message: 'Unable to send email this time ' + JSON.stringify(process.env.MAIL_USER)},
            { status: 500}
        )
    }
}