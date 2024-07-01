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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log("Form submitted");
    closeModalHandler();
  }

  const handleChange = (value: string) => {
    console.log('Selected value:', value);
  };

  const buildRadioButtons = () => {
    return  (
      <div className={`${classNameId}__container-options`}>
        <div className={`${classNameId}__option`} >
          <p>Points and caps:</p>
          <RadioButtons name="pointsAndCaps" options={pointsAndCapsOptions} onChange={handleChange} />
        </div>
        <div className={`${classNameId}__option`}>
          <p>Center design:</p>
          <RadioButtons name="centerDesign" options={yesNoOptions} onChange={handleChange} />
        </div>
        <div className={`${classNameId}__option`}>
          <p>Custom design:</p>
          <RadioButtons name="customDesign" options={yesNoOptions} onChange={handleChange} />
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
            error=""
            label="Name*"
            name="name"
            onChange={() => {}}
            placeholder="Your name"
            required
          />
          <InputText
            error=""
            label="Phone*"
            name="phone"
            onChange={() => {}}
            placeholder="Phone number"
            required
          />
          <InputText
            error=""
            label="Address*"
            name="address"
            onChange={() => {}}
            placeholder="Your address"
            required
          />
          <InputText
            error=""
            label="Email"
            name="email"
            onChange={() => {}}
            placeholder="Your email"
          />
          <br />
          <InputText
            error=""
            label="Style" 
            name="style"
            onChange={() => {}}
            placeholder="Style of gate"
          />
          <InputText
            error=""
            label="Gate length (ft)" 
            name="gateLength"
            onChange={() => {}}
            placeholder="Length of gate"
          />
          <InputText
            error=""
            label="Fence length (ft)" 
            name="fenceLength"
            onChange={() => {}}
            placeholder="Length of fence"
          />
          <InputText
            error=""
            label="Opening style" 
            name="openingStyle"
            onChange={() => {}}
            placeholder="Style of opening"
          />
          <InputText
            error=""
            label="Gate opener" 
            name="gateOpener"
            onChange={() => {}}
            placeholder="Type of gate opener"
          />
          <InputText
            error=""
            label="Color" 
            name="color"
            onChange={() => {}}
            placeholder="Color of gate"
          />
          <InputText
            error=""
            label="Brick work" 
            name="brickWork"
            onChange={() => {}}
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
            onChange={() => {}}
            placeholder="Comments"
            isTextArea
          />
          <GreenButton title="Send" onClick={() => handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default FormContact;
