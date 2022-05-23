const nodemailer = require("nodemailer");
export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log(req.body);
        const ouput = `
        <p>You have a new contact request</p>
        <h3>Contact details</h3>
        <ul>
        <li>name : ${req.body.name}</li>
         <li>email : ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "mail.sgoldengroup.com",
                port: 26,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "email@sgoldengroup.com", // generated ethereal user
                    pass: "sgoldendroup123456789", // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"ASA" <email@sgoldengroup.com>', // sender address
                to: "valere.pay@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: ouput, // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }

        main().catch(console.error);
    } else {
        res.json({
            success: false,
            message: "Only POST requests are allowed.",
        });
    }
}