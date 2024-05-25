import { useState } from "react";
import { Bottom } from "./Bottom";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

type Type = {
  type: string;
};

export const Auth = ({ type }: Type) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/${type === "signup" ? "signup" : "signin"}`,
        {
          name,
          email,
          password,
        }
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error");
    }
  }

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={type === "signup" ? "Sign up" : "Sign in"} />
          <SubHeading label={"Enter your credentials"} />
          {type === "signup" ? (
            <InputBox
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="John"
              label={"Name"}
            />
          ) : null}

          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="test@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            type="Password"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={sendRequest}
              label={type === "signup" ? "Create Account" : "Log In"}
            />
          </div>
          <Bottom
            label={
              type === "signup"
                ? "Already have an account?"
                : "Create an account"
            }
            buttonText={type === "signup" ? "Sign In" : "Sign Up"}
            to={type === "signup" ? "/signin" : "/signup"}
          />
        </div>
      </div>
    </div>
  );
};
