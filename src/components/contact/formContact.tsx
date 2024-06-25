import "@/styles/contact/formContact.css";

interface FormContactProps { 
  closeModalHandler: () => void
}

const FormContact = ({ closeModalHandler } : FormContactProps) => {
  const classNameId = "form-contact";
  
  return (
    <div className={`${classNameId}__wrapper`}>
      <div className={`${classNameId}__title-form-container`}>
        <p>Affordable Automatic Gate</p>
        <span>-Cost and time estimate-</span>
      </div>
      <div className={`${classNameId}__form-container`}>
        Form
      </div>
    </div>
  );
};

export default FormContact;
