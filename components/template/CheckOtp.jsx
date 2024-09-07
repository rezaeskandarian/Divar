import { Navigate } from "react-router-dom";
import { CheckNumber } from "../../services/Auth";
import { setCookie } from "../../utils/cookie";

const CheckOtp = ({ number, setStep, code, setCode }) => {
  
  
    const SendVerification = async (event) => {
    event.preventDefault();

    const { response, error } = await CheckNumber(number, code);
    if (code.length !== 5) return;
    
    if (response) {
      setCookie(response.data);
      Navigate("/dashboard");
    }
    if (error) {
      return console.log(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={SendVerification}>
        <h3>وارد شدن به حساب کاربری</h3>
        <p>
          کد احراز هویت به شماره {number} پیامک شده است لطفا کد را وارد کنید{" "}
        </p>
        <label htmlFor="input">کد احراز هویت</label>
        <input
          type="text"
          value={code}
          placeholder="کد پیامک شده  را وارد کنید"
          onChange={(e) => setCode(e.target.value)}
        />     
        <button type="submit">وارد شدن</button>
        <button onClick={() => setStep(1)}>تغییر شماره همراه </button>
      </form>
    </>
  );
};

export default CheckOtp;
