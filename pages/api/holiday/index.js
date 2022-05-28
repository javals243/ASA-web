const nodemailer = require("nodemailer");
export default async function handler(req, res) {
    if (req.method === "POST") {
        const {
            name,
            email,
            phone,
            services,
            specialDemands,
            personNumber,
            coordonner,
            aboutHolliday,
        } = req.body;

        const customServices = services.map((s) => s.label);

        let html = "<ul>";

        html += `${customServices.map(
      (c) => `<li key=${Math.random()}>${c}</li>`
    )}`;

    html += "</ul>";

    // return res.json({
    //   data: {
    //     name,
    //     email,
    //     phone,
    //     services: customServices,
    //     specialDemands,
    //     personNumber,
    //     coordonner,
    //     aboutHolliday,
    //   },
    // });
    const ouput = `
            <h3 style="color:blue; font-size:14px; text-align:center;font-weight:bolde; font-size:20px;">Assistance sejour acceuil</h3>
            <h3>
            les informations du client:
            </h3>
            <ul style="list-style:none; margin-left:0;">
            
            <li style="text-decoration:none;">Identité: ${name}  </li>
            <li>email : ${email} </li>
              <li>phone : ${phone}</li>
            <li>Nombre de personne : ${personNumber}</li>
            <li>Coordonner : ${coordonner}</li>
            
            <li>Nombre de personne :</li>
            <li>Qu’attendais-vous de vos vacances: ${aboutHolliday}</li>
            </ul>
            <h3>
            les services dont il a besoin :
            </h3>
           ${html}
            <h3>Demandes spéciales</h3>
            <p>${specialDemands}</p>
            <p style="text-align:center;">ASA &copy; Tous droits réservés </p>
        `;
    async function main() {
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
          rejectUnauthorized: false,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"ASA" <email@sgoldengroup.com>', // sender address
        to: "valere.pay@gmail.com", // list of receivers
        subject: "Un commerçant viens de vous contacter", // Subject line
        text: "commerçant", // plain text body
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
    return res.status(500).json({ message: "Only POST requests are allowed" });
  }
}