import { SendNumber } from "../../services/Auth";

const SendOtp = ({ setStep, number, setNumber }) => {
  const sendData = async (event) => {
    event.preventDefault();
    
    if (number.length !== 11) return;
    const { response, error } = await SendNumber(number);
    console.log({ response, error });

    if (response) setStep(2);
    if (error) console.log(error.response);
  };

  return (
    <>
      <form onSubmit={sendData}>
        <h3>ارسال کد به شماره همراه</h3>
        <p>برای استفاده از امکانات دیوار لطفا با شماره همراه وارد شوید </p>
        <label htmlFor="input">شماره همراه </label>
        <input
          id="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="شماره همراه "
        />
        <button type="submit">ارسال کد تایید </button>
      </form>
    </>
  );
};

export default SendOtp;
