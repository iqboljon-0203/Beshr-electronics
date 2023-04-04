import React from "react";
import img from "../../assets/images/baterka.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Context } from "../Wrapper";
import "./Contact.css";
import { FormattedMessage } from "react-intl";
import { useForm } from "react-hook-form";
function Contact() {
  const context = React.useContext(Context);
  const { register, handleSubmit, reset } = useForm();
  const [modal, setmodal] = React.useState(false);
  const onSubmit = (dataForm) => {
    let inComing = `%0A 👤name: ${dataForm.name},%0A ☎️phone: ${dataForm.number},%0A ,%0A Bog'lanish uchun
  `;
    fetch(
      `https://api.telegram.org/bot5389743252:AAGXxIDTvWJSAf6wA7ORRxVz4U9Q2iSLmnk/sendMessage?chat_id=-1001553444445&text=${inComing}`
    )
      .then(() => {
        setmodal(true);
        reset({ name: "", number: "" });
      })
  };
  React.useEffect(() => {
    setTimeout(() => {
      setmodal(false)
    }, 3000);
  }, [modal])
  
  return (
    <div className="contact" id="contact">
      {modal && (
        <div className="modal_target">
          <form className="modal_content" onSubmit={handleSubmit(onSubmit)}>
            <span onClick={() => setmodal(false)}>&times;</span>
            <div className="suc_modal">
              <p>Raqaming qoldirildi, siz bilan tez orada bog’lanamamiz!</p>
              <img src="/check.svg" alt="" />
            </div>
          </form>
        </div>
      )}
      <div className="contact__body">
        <FadeIn>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>
              <FormattedMessage id="pleased" />
            </h1>

            <input
              type="text"
              placeholder={
                context.locale === "uz"
                  ? "Ism"
                  : context.locale === "en"
                  ? "Name"
                  : "Имя"
              }
              required
              {...register("name")}
            />
            <input
              type="text"
              placeholder={
                context.locale === "uz"
                  ? "Telefon raqam"
                  : context.locale === "en"
                  ? "Phone number"
                  : "Телефон номер"
              }
              required
              {...register("number")}
            />
            <button>
              <FormattedMessage id="send" />
            </button>
          </form>
        </FadeIn>
        <img src={img} className="img" alt="" />
      </div>
      <div className="bottom">
        {/* <img src={img2} alt="" /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Contact;
