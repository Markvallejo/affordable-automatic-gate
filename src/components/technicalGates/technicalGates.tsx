import "@/styles/technicalGates/technicalGates.css";

const TechnicalGates = () => {
  const classNameId = "technical-gates";

  return (
    <div className={`${classNameId}`}>
      <div className={`${classNameId}__background`} />
      <div className={`${classNameId}__main-container`}>
        <p className={`${classNameId}__subtitle-text`}>
          Technical details <strong>that matter.</strong>
        </p>
        <h3 className={`${classNameId}__title`}>
          Gate <strong>Operators</strong>
        </h3>
        <p className={`${classNameId}__description`}>
          We offer <strong>solar panels and battery backup</strong>, and fixing
          any gate and gate operator problem ensuring continuous security.
        </p>
        <div className={`${classNameId}__image-container`}>
          <img
            src="/assets/technical-gates/gate_operator.png"
            alt="gate operator"
          />
        </div>
        <h3 className={`${classNameId}__title align-right`}>
          Swing or <strong>Slider</strong>
        </h3>
        <p className={`${classNameId}__description align-right`}>
          Choose your <strong>opening system</strong> according to the best use
          of your space and comfort.
        </p>
        <div className={`${classNameId}__image-container`}>
          <img src="/assets/technical-gates/swing_type.png" alt="swing type" />
          <div className={`${classNameId}__container-text-styles`}>
            <p>Single</p>
            <p>Double</p>
            <p>Slider</p>
          </div>
        </div>
        <div className={`${classNameId}__container-bottom`}>
          <div className={`${classNameId}__container-info`}>
            <h3 className={`${classNameId}__title`}>
              Top <strong>Points</strong>
            </h3>
            <p className={`${classNameId}__description`}>
              Smooth or top points, choose the best for{" "}
              <strong>your security.</strong>
            </p>
          </div>
          <div className={`${classNameId}__image-container image-aligh-right`}>
            <img
              src="/assets/technical-gates/points_type.png"
              alt="points type"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalGates;
