import { useState } from "react";
import SendOtp from "../components/template/SendOtp";
import CheckOtp from "../components/template/CheckOtp";

const Autentication = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  return (
    <>
      <div>
        {step === 1 && (
          <SendOtp setStep={setStep} number={number} setNumber={setNumber} />
        )}
        {step === 2 && (
          <CheckOtp
            number={number}
            setStep={setStep}
            code={code}
            setCode={setCode}
          />
        )}
      </div>
    </>
  );
};

export default Autentication;
