import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      signupApi({ name, email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account successfully created!");
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { signup, isLoading };
}
