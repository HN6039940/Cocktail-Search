import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/NewsLetter.js";

const newsLetter = "https://www.course-api.com/cocktails-newsletter";
export const formAction = async ({ request }) => {
  try {
    const requestFormData = await request.formData();
    const data = Object.fromEntries(requestFormData);
    const response = await axios.post(newsLetter, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    throw new Response("Bad Request", { status: 400 });
  }
};
const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";

  // const {
  //   mutate: submitForm,
  //   isError,
  //   isSuccess,
  // } = useMutation({
  //   mutationFn: async (e) => {
  //     const requestFormData = new FormData(e.target);
  //     const data = Object.fromEntries(requestFormData);
  //     const response = await axios.post(newsLetter, data);
  //     return response.data.msg;
  //   },
  //   onSuccess: (data) => {
  //     toast.success(data);
  //   },
  //   onError: (error) => {
  //     toast.error(error?.response?.data?.msg);
  //   },
  // });

  // if (isError) throw new Response("Bad Request", { status: 400 });

  return (
    <Wrapper>
      <Form action="" className="form" method="post">
        <h3 className="form-header">Our Newsletter</h3>
        <div className="form-row">
          <label htmlFor="first name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="last name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            name="email"
            id="email"
            required
          />
        </div>
        <button type="submit" className="btn form-btn" disabled={isSubmit}>
          {isSubmit ? "Sending..." : "Submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default NewsLetter;
