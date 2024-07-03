import React from "react";
import "@/styles/contact/formContact.css";
import InputText from "../common/inpus/inputsText";
import RadioButtons from "../common/radioButtons/radioButtons";
import GreenButton from "../common/buttons/greenButton";

interface FormContactProps {
  closeModalHandler: () => void;
}
interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const FormContact = ({ closeModalHandler }: FormContactProps) => {
  const classNameId = "form-contact";
  const [sending, setSending] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    style: '',
    gateLength: '',
    fenceLength: '',
    openingStyle: '',
    gateOpener: '',
    color: '',
    brickWork: '',
    pointsAndCaps: '',
    centerDesign: '',
    customDesign: '',
    comments: ''
  });
  const [errors, setErrors] = React.useState({
    name: '',
    phone: '',
    address: ''
  });

  const pointsAndCapsOptions: Option[] = [
    { value: 'sharp', label: '', 
      // icon: <SharpIcon /> 
    },
    { value: 'round', label: '', 
      // icon: <RoundIcon /> 
    },
    { value: 'flat', label: '', 
      // icon: <FlatIcon /> 
    },
    { value: 'ball', label: '', 
      // icon: <BallIcon /> 
    },
  ];

  const yesNoOptions: Option[] = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };


  const hanndlePointsAndCaps = (name: string) => (value: string)  => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  const hanndleCenterDesign = (name: string) => (value: string)  => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  const hanndleCustomDesign = (name: string) => (value: string)  => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const formatCurrentData = (data: typeof formData) => {
    let htmlVersion: string  = `<h2>New estimate request</h2>`
    let textVersion: string = "New estimate request\n\n"
  
    Object.entries(data).forEach(([key, value]) => {
      htmlVersion += `<p><strong>${key}:</strong> ${value}</p>`;
      textVersion += `${key}: ${value}\n`;
    });
  
    return { html: htmlVersion, text: textVersion };
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const emailTo = import.meta.env.PUBLIC_EMAIL_USER;

    const newErrors = {
      name: formData.name ? '' : 'Required field',
      phone: formData.phone ? '' : 'Required field',
      address: formData.address ? '' : 'Required field'
    };

    setErrors(newErrors);
    if (!formData.name || !formData.phone || !formData.address) {
      return;
    }
    setSending(true);

    const newData = formatCurrentData(formData)

    try {
      const response = await fetch('/api/sendEmail', {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: 'Acme <onboarding@resend.dev>',
          to: emailTo,
          subject: 'New estimate request',
          html: newData.html,
          text: newData.text,
        }),
      });
  
      const data = await response.json();
      if (data) {
        console.log("data--> ", data);
      }

      setSending(false);
      closeModalHandler();
    } catch (error) {
      setSending(false);
      console.error(error);
    }
  }

  const buildRadioButtons = () => {
    return  (
      <div className={`${classNameId}__container-options`}>
        <div className={`${classNameId}__option`} >
          <p>Points and caps:</p>
          <RadioButtons name="pointsAndCaps" options={pointsAndCapsOptions} onChange={hanndlePointsAndCaps('pointsAndCaps')} />
        </div>
        <div className={`${classNameId}__option`}>
          <p>Center design:</p>
          <RadioButtons name="centerDesign" options={yesNoOptions} onChange={hanndleCenterDesign('centerDesign')} />
        </div>
        <div className={`${classNameId}__option`}>
          <p>Custom design:</p>
          <RadioButtons name="customDesign" options={yesNoOptions} onChange={hanndleCustomDesign('customDesign')} />
        </div>
    </div>
    )
  }

  return (
    <div className={`${classNameId}__wrapper`}>
      <div className={`${classNameId}__title-form-container`}>
        <p>Affordable Automatic Gate</p>
        <span>-Cost and time estimate-</span>
      </div>
      <div className={`${classNameId}__form-container`}>
        <p className={`${classNameId}__form-description`}>
          The <strong>Name, phone and address information are necessary</strong>{" "}
          to give you a better estimate.
        </p>
        <form id="form-contact" noValidate className={`${classNameId}__form`} onSubmit={handleSubmit} autoComplete="off">
          <InputText
            error={errors.name}
            label="Name*"
            name="name"
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
          <InputText
            error={errors.phone}
            label="Phone*"
            name="phone"
            onChange={handleInputChange}
            placeholder="Phone number"
            required
          />
          <InputText
            error={errors.address}
            label="Address*"
            name="address"
            onChange={handleInputChange}
            placeholder="Your address"
            required
          />
          <InputText
            error=""
            label="Email"
            name="email"
            onChange={handleInputChange}
            placeholder="Your email"
          />
          <br />
          <InputText
            error=""
            label="Style" 
            name="style"
            onChange={handleInputChange}
            placeholder="Style of gate"
          />
          <InputText
            error=""
            label="Gate length (ft)" 
            name="gateLength"
            onChange={handleInputChange}
            placeholder="Length of gate"
          />
          <InputText
            error=""
            label="Fence length (ft)" 
            name="fenceLength"
            onChange={handleInputChange}
            placeholder="Length of fence"
          />
          <InputText
            error=""
            label="Opening style" 
            name="openingStyle"
            onChange={handleInputChange}
            placeholder="Style of opening"
          />
          <InputText
            error=""
            label="Gate opener" 
            name="gateOpener"
            onChange={handleInputChange}
            placeholder="Type of gate opener"
          />
          <InputText
            error=""
            label="Color" 
            name="color"
            onChange={handleInputChange}
            placeholder="Color of gate"
          />
          <InputText
            error=""
            label="Brick work" 
            name="brickWork"
            onChange={handleInputChange}
            placeholder="Brick work"
          />
          <br />
          {
            buildRadioButtons()
          }
          <br />
          <InputText
            error=""
            label="Comments" 
            name="comments"
            onChange={handleInputChange}
            placeholder="Comments"
            isTextArea
          />
          <GreenButton 
            title={sending ? "Sending..." : "Send" }  
            onClick={handleSubmit} 
            disabled={sending}
          />
        </form>
      </div>
    </div>
  );
};

export default FormContact;
