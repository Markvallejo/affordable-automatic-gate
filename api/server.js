import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/sendEmail', async (req, res) => {
  const {
    name,
    phone,
    address,
    email,
    style,
    gateLength,
    fenceLength,
    openingStyle,
    gateOpener,
    color,
    brickWork,
    pointsAndCaps,
    centerDesign,
    customDesign,
    comments
  } = req.body;

  const emailUser = 'markvallejo7@gmail.com';
  const emailPass = '65198600'; 
  
  let transporter = createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const emailText = `
    Name: ${name}
    Phone: ${phone}
    Address: ${address}
    Email: ${email}
    Gate Style: ${style}
    Gate Length: ${gateLength}
    Fence Length: ${fenceLength}
    Opening Style: ${openingStyle}
    Gate Opener: ${gateOpener}
    Color: ${color}
    Brick Work: ${brickWork}
    Points AndCaps: ${pointsAndCaps}
    Center Design: ${centerDesign}
    Custom Design: ${customDesign}
    Comments: ${comments}
  `;

  console.log(emailUser);
  console.log(emailPass);

  try {
    await transporter.sendMail({
      from: '"Affordable Automatic Gate" <markvallejo7@gmail.com>',
      to: 'markvallejo7@gmail.com',
      subject: 'Nuevo mensaje de Affordable Automatic Gate',
      text: emailText,
    });

    res.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
