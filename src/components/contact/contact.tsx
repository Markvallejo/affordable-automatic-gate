import "@/styles/contact/contact.css";

const ContactGates = () => {
  const classNameId = "contact-gates";

  const handleClick = () => { 
    console.log('Open Form')
  }
  
  return (
    <div className={`${classNameId}`}>
      <div className={`${classNameId}__main-container`} >
        <p className={`${classNameId}__title`}><strong>Contact</strong> information</p>
        <div className={`${classNameId}__container-right`}>
          <div className={`${classNameId}__container-right__info`}>
            <img src="/assets/contact/call_icon.png" alt="phone" />
            <p className={`${classNameId}__container-info__title`}>Give us a <strong>call</strong></p>
          </div>
          <p className={`${classNameId}__description`}> 
            Schedule an appointment, we'll discuss installation requirements, <strong> timing and costs.</strong> 
          </p>
          <p className={`${classNameId}__text-contact`}> 
            <strong>Mario</strong> Martínez <strong><a href="tel:832-483-1503">832-483-1503</a></strong>
          </p>
        </div>
        <div className={`${classNameId}__container-left`}>
          <div className={`${classNameId}__container-left__info`}>
            <p className={`${classNameId}__container-info__title`}>Get a <strong> time and cost</strong> estimate</p>
            <img src="/assets/contact/quote_icon.png" alt="quote" />
          </div>
          <button className={`${classNameId}__link-form`} onClick={handleClick} > 
            Click here to complete our form.
          </button>
          <p className={`${classNameId}__description`}> 
            We'll provide you with an optimal cost estimate for any gate, fence or reparation. 
          </p>
        </div>
        <div className={`${classNameId}__container-map`}>
          <a href="https://www.google.com.mx/maps/@25.4083072,-101.0168044,14z" target="_blank">
            <img src="/assets/contact/contact_map.png" alt="image location" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactGates;
