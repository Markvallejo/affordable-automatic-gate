import "@/styles/contact/formContact.css";
import InputText from "../common/inpus/inputsText";

interface FormContactProps {
  closeModalHandler: () => void;
}

const FormContact = ({ closeModalHandler }: FormContactProps) => {
  const classNameId = "form-contact";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log("Form submitted");
    closeModalHandler();
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
          <InputText
            error=""
            label="Comments" 
            name="comments"
            onChange={() => {}}
            placeholder="Comments"
            isTextArea
          />
        </form>
      </div>
    </div>
  );
};

export default FormContact;
