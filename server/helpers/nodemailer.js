import {createTransport} from 'nodemailer'

async function enviarEmail ({ subject, text }) {
    
    const config = {
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.usermail,
        pass: process.env.passwordmail
      }
    };
  
    const transporter = createTransport(config);
  
    const message = {
      from: process.env.usermail,
      to: "agustinmazza12345@gmail.com",
      subject,
      text
    };
  
    return await transporter.sendMail(message);
  }
  
  app.post('/', async (req, res) => {
    try {
      const sentInfo = await enviarEmail(req.body);
  
      res.status(200).json(sentInfo);
    } catch (error) {
      console.log(error);
  
      res.send('error');
    }
  });