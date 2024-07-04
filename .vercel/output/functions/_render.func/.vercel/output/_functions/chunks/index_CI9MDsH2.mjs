import { k as createAstro, l as createComponent, m as renderTemplate, o as addAttribute, p as renderHead, q as renderComponent, t as renderSlot } from './astro/server_CRwyTHBL.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const AppConfig = {
  site_name: "Affordable Automatic Gate",
  title: "Affordable Automatic Gate",
  description: "Affordable Automatic Gate.",
  author: "Affordable Automatic Gate",
  locale_region: "US",
  locale: "en_US"
};

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en-US"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(AppConfig.author, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="title" content="Affordable Automatic Gate"><meta name="description" content="Affordable Automatic Gate"><link rel="alternate" type="application/rss+xml" href="/rss.xml"><link rel="sitemap" href="/sitemap-index.xml"><link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png"><link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png"><link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png"><link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png"><link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png"><link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png"><link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196"><link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32"><link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16"><link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128"><meta name="application-name" content=" "><meta name="msapplication-TileColor" content="#FFFFFF"><meta name="msapplication-TileImage" content="mstile-144x144.png"><meta name="msapplication-square70x70logo" content="mstile-70x70.png"><meta name="msapplication-square150x150logo" content="mstile-150x150.png"><meta name="msapplication-wide310x150logo" content="mstile-310x150.png"><meta name="msapplication-square310x310logo" content="mstile-310x310.png">${renderHead()}</head> <body> <header> ${renderComponent($$result, "Header", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/header/header", "client:component-export": "default" })} </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <div id="modal-root"></div> </body></html>`;
}, "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/layouts/Layout.astro", void 0);

const Modal = ({ title, children, closeModalHandler }) => {
  const [modalRoot, setModalRoot] = useState(null);
  const classNameId = "modal";
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("body-hidden");
    const modal = document.getElementById("modal-root");
    setModalRoot(modal);
    return () => {
      body?.classList.remove("body-hidden");
    };
  }, []);
  return modalRoot ? ReactDOM.createPortal(
    /* @__PURE__ */ jsxs("div", { className: `${classNameId}`, children: [
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-overlayBtn`, children: [
        /* @__PURE__ */ jsx("p", { className: `${classNameId}__title`, children: title }),
        /* @__PURE__ */ jsxs("button", { className: `${classNameId}__overlayBtn`, onClick: closeModalHandler, children: [
          "Back home",
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/header/menu_close.png",
              alt: "icon-menu",
              height: 49,
              width: 56
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `${classNameId}__content`, children })
    ] }),
    modalRoot
  ) : null;
};

const InputText = (props) => {
  const {
    disabled,
    className = "",
    error,
    label,
    maxLength,
    name,
    onChange,
    placeholder,
    isTextArea,
    required,
    value
  } = props;
  const classNameId = "input-text";
  return /* @__PURE__ */ jsxs("div", { className: `${classNameId} ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-main ${isTextArea ? "text-area-container" : ""} `, children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: `${classNameId}__inputLabel ${required ? "is-bold" : ""} `,
          htmlFor: name,
          children: [
            label,
            ":"
          ]
        }
      ),
      !isTextArea ? /* @__PURE__ */ jsx(
        "input",
        {
          className: `${classNameId}__inputField ${error ? `${classNameId}__inputError` : ""}`,
          id: name,
          placeholder,
          name,
          type: "text",
          autoComplete: "off",
          maxLength,
          onChange,
          defaultValue: value,
          required,
          disabled
        }
      ) : /* @__PURE__ */ jsx(
        "textarea",
        {
          className: `${classNameId}__inputField ${classNameId}__inputTextArea ${error ? `${classNameId}__inputError` : ""}`,
          id: name,
          placeholder,
          name,
          maxLength: 250,
          onChange,
          defaultValue: value,
          required,
          disabled
        }
      )
    ] }),
    error ? /* @__PURE__ */ jsx("span", { className: `${classNameId}__errorText`, children: error }) : null
  ] });
};

const RadioButtons = ({ name, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };
  return /* @__PURE__ */ jsx("div", { className: "radio-group", children: options.map((option) => /* @__PURE__ */ jsxs("label", { className: "radio-option", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "radio",
        name,
        value: option.value,
        checked: selectedValue === option.value,
        onChange: () => handleChange(option.value),
        className: "radio-input"
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "radio-custom", children: option.icon ? option.icon : /* @__PURE__ */ jsx("span", { className: `radio-circle ${selectedValue === option.value ? "selected" : ""}` }) }),
    /* @__PURE__ */ jsx("span", { className: "radio-label", children: option.label })
  ] }, option.value)) });
};

const GreenButton = ({ onClick, disabled = false, title }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "send-button",
      onClick,
      disabled,
      children: title
    }
  );
};

const FormContact = ({ closeModalHandler }) => {
  const classNameId = "form-contact";
  const [sending, setSending] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    style: "",
    gateLength: "",
    fenceLength: "",
    openingStyle: "",
    gateOpener: "",
    color: "",
    brickWork: "",
    pointsAndCaps: "",
    centerDesign: "",
    customDesign: "",
    comments: ""
  });
  const [errors, setErrors] = React.useState({
    name: "",
    phone: "",
    address: ""
  });
  const pointsAndCapsOptions = [
    {
      value: "sharp",
      label: ""
      // icon: <SharpIcon /> 
    },
    {
      value: "round",
      label: ""
      // icon: <RoundIcon /> 
    },
    {
      value: "flat",
      label: ""
      // icon: <FlatIcon /> 
    },
    {
      value: "ball",
      label: ""
      // icon: <BallIcon /> 
    }
  ];
  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" }
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  };
  const hanndlePointsAndCaps = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const hanndleCenterDesign = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const hanndleCustomDesign = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const formatCurrentData = (data) => {
    let htmlVersion = `<h2>New estimate request</h2>`;
    let textVersion = "New estimate request\n\n";
    Object.entries(data).forEach(([key, value]) => {
      htmlVersion += `<p><strong>${key}:</strong> ${value}</p>`;
      textVersion += `${key}: ${value}
`;
    });
    return { html: htmlVersion, text: textVersion };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailTo = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "http://localhost:4321", "ASSETS_PREFIX": undefined}.PUBLIC_EMAIL_USER;
    const newErrors = {
      name: formData.name ? "" : "Required field",
      phone: formData.phone ? "" : "Required field",
      address: formData.address ? "" : "Required field"
    };
    setErrors(newErrors);
    if (!formData.name || !formData.phone || !formData.address) {
      return;
    }
    setSending(true);
    const newData = formatCurrentData(formData);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "Acme <onboarding@resend.dev>",
          to: emailTo,
          subject: "New estimate request",
          html: newData.html,
          text: newData.text
        })
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
  };
  const buildRadioButtons = () => {
    return /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-options`, children: [
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__option`, children: [
        /* @__PURE__ */ jsx("p", { children: "Points and caps:" }),
        /* @__PURE__ */ jsx(RadioButtons, { name: "pointsAndCaps", options: pointsAndCapsOptions, onChange: hanndlePointsAndCaps("pointsAndCaps") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__option`, children: [
        /* @__PURE__ */ jsx("p", { children: "Center design:" }),
        /* @__PURE__ */ jsx(RadioButtons, { name: "centerDesign", options: yesNoOptions, onChange: hanndleCenterDesign("centerDesign") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__option`, children: [
        /* @__PURE__ */ jsx("p", { children: "Custom design:" }),
        /* @__PURE__ */ jsx(RadioButtons, { name: "customDesign", options: yesNoOptions, onChange: hanndleCustomDesign("customDesign") })
      ] })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: `${classNameId}__wrapper`, children: [
    /* @__PURE__ */ jsxs("div", { className: `${classNameId}__title-form-container`, children: [
      /* @__PURE__ */ jsx("p", { children: "Affordable Automatic Gate" }),
      /* @__PURE__ */ jsx("span", { children: "-Cost and time estimate-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${classNameId}__form-container`, children: [
      /* @__PURE__ */ jsxs("p", { className: `${classNameId}__form-description`, children: [
        "The ",
        /* @__PURE__ */ jsx("strong", { children: "Name, phone and address information are necessary" }),
        " ",
        "to give you a better estimate."
      ] }),
      /* @__PURE__ */ jsxs("form", { id: "form-contact", noValidate: true, className: `${classNameId}__form`, onSubmit: handleSubmit, autoComplete: "off", children: [
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: errors.name,
            label: "Name*",
            name: "name",
            onChange: handleInputChange,
            placeholder: "Your name",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: errors.phone,
            label: "Phone*",
            name: "phone",
            onChange: handleInputChange,
            placeholder: "Phone number",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: errors.address,
            label: "Address*",
            name: "address",
            onChange: handleInputChange,
            placeholder: "Your address",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Email",
            name: "email",
            onChange: handleInputChange,
            placeholder: "Your email"
          }
        ),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Style",
            name: "style",
            onChange: handleInputChange,
            placeholder: "Style of gate"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Gate length (ft)",
            name: "gateLength",
            onChange: handleInputChange,
            placeholder: "Length of gate"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Fence length (ft)",
            name: "fenceLength",
            onChange: handleInputChange,
            placeholder: "Length of fence"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Opening style",
            name: "openingStyle",
            onChange: handleInputChange,
            placeholder: "Style of opening"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Gate opener",
            name: "gateOpener",
            onChange: handleInputChange,
            placeholder: "Type of gate opener"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Color",
            name: "color",
            onChange: handleInputChange,
            placeholder: "Color of gate"
          }
        ),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Brick work",
            name: "brickWork",
            onChange: handleInputChange,
            placeholder: "Brick work"
          }
        ),
        /* @__PURE__ */ jsx("br", {}),
        buildRadioButtons(),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(
          InputText,
          {
            error: "",
            label: "Comments",
            name: "comments",
            onChange: handleInputChange,
            placeholder: "Comments",
            isTextArea: true
          }
        ),
        /* @__PURE__ */ jsx(
          GreenButton,
          {
            title: sending ? "Sending..." : "Send",
            onClick: handleSubmit,
            disabled: sending
          }
        )
      ] })
    ] })
  ] });
};

const ContactGates = () => {
  const classNameId = "contact-gates";
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleClick = () => {
    setModalOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { id: "direct-call", className: `${classNameId}`, children: /* @__PURE__ */ jsxs("div", { className: `${classNameId}__main-container`, children: [
      /* @__PURE__ */ jsxs("p", { className: `${classNameId}__title`, children: [
        /* @__PURE__ */ jsx("strong", { children: "Contact" }),
        " information"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-right`, children: [
        /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-right__info`, children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/contact/call_icon.png", alt: "phone" }),
          /* @__PURE__ */ jsxs("p", { className: `${classNameId}__container-info__title`, children: [
            "Give us a ",
            /* @__PURE__ */ jsx("strong", { children: "call" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: `${classNameId}__description`, children: [
          "Schedule an appointment, we'll discuss installation requirements,",
          " ",
          /* @__PURE__ */ jsx("strong", { children: " timing and costs." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: `${classNameId}__text-contact`, children: [
          /* @__PURE__ */ jsx("strong", { children: "Mario" }),
          " Martínez",
          " ",
          /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx("a", { href: "tel:832-483-1503", children: "832-483-1503" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-left`, children: [
        /* @__PURE__ */ jsxs("div", { className: `${classNameId}__container-left__info`, children: [
          /* @__PURE__ */ jsxs("p", { className: `${classNameId}__container-info__title`, children: [
            "Get a ",
            /* @__PURE__ */ jsx("strong", { children: " time and cost" }),
            " estimate"
          ] }),
          /* @__PURE__ */ jsx("img", { src: "/assets/contact/quote_icon.png", alt: "quote" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: `${classNameId}__link-form`,
            onClick: handleClick,
            children: "Click here to complete our form."
          }
        ),
        /* @__PURE__ */ jsx("div", { id: "cost-estimate", children: /* @__PURE__ */ jsx("p", { className: `${classNameId}__description`, children: "We'll provide you with an optimal cost estimate for any gate, fence or reparation." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `${classNameId}__container-map`, children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.google.com.mx/maps/@25.4083072,-101.0168044,14z",
          target: "_blank",
          children: /* @__PURE__ */ jsx("img", { src: "/assets/contact/contact_map.png", alt: "location" })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: `${classNameId}__bg-bottom` })
    ] }) }),
    modalOpen && /* @__PURE__ */ jsx(Modal, { title: "Cost estimate", closeModalHandler: closeModal, children: /* @__PURE__ */ jsx(FormContact, { closeModalHandler: closeModal }) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title, description } = AppConfig;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...{ title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cover", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/cover/cover", "client:component-export": "default" })} ${renderComponent($$result2, "GridGates", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/stylesGates/stylesGates", "client:component-export": "default" })} ${renderComponent($$result2, "TechnicalGates", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/technicalGates/technicalGates", "client:component-export": "default" })} ${renderComponent($$result2, "ContactGates", ContactGates, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact/contact", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/footer/footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/index.astro", void 0);

const $$file = "C:/Users/Marcos Vallejo/Desktop/portones/affordable-automatic-gate/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
