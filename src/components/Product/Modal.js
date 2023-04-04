import React from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
function Modal(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (dataForm) => {
    let inComing = `%0A 👤name: ${dataForm.name},%0A ☎️phone: ${dataForm.number},%0A 💡product: ${props.name},%0A Buyurtma uchun
  `;
    fetch(
      `https://api.telegram.org/bot5389743252:AAGXxIDTvWJSAf6wA7ORRxVz4U9Q2iSLmnk/sendMessage?chat_id=-1001553444445&text=${inComing}`
    ).then(() => {
      setForm(false);
      setHidden(false);
    });
  };
  const [form, setForm] = React.useState(true);
  const [hidden, setHidden] = React.useState();
  const get = () => {
    setTimeout(() => {
      props.close(false);
    }, 4000);
  };
  let lang = localStorage.getItem("lang");
  return (
    <div className="modal_target">
      {form ? (
        <form className="modal_content" onSubmit={handleSubmit(onSubmit)}>
          <span onClick={() => props.close(false)}>&times;</span>
          <h1>
            <FormattedMessage id="numberostk" />{" "}
          </h1>
          <input
            type="text"
            required
            placeholder={
              lang === "uz"
                ? "Ismingizni kiriting"
                : lang === "en"
                ? "Enter your name"
                : "Введите ваше имя"
            }
            {...register("name")}
          />
          <input
            type="text"
            required
            placeholder="+998 99 500 00 00"
            {...register("number")}
          />
          <button onClick={get}>OK</button>
        </form>
      ) : (
        <form className="modal_content" onSubmit={handleSubmit(onSubmit)}>
          <span onClick={() => props.close(false)}>&times;</span>
          <div className="suc_modal">
            <p>Raqaming qoldirildi, siz bilan tez orada bog’lanamamiz!</p>
            <img src="/check.svg" alt="" />
          </div>
        </form>
      )}
    </div>
  );
}

export default Modal;
