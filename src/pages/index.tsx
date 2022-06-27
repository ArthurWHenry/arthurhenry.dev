import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

// Components
import Button from "components/form/Button";
import Form from "components/form/Form";
import Input from "components/form/Input";

// Schema
import { loginSchema } from "schema/authentication";

// Helpers
import { app, buttons, links } from "helpers/text";

// SWR
import { userLogin } from "lib/auth";

const Home: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Handles login.
  const onSubmit = (data: any) => {
    setLoading(true);
    userLogin(data)
      .then(() => {
        // NOTE: We can destructure user and error here.
        setLoading(false);
        toast.success("Successfully logged in!");
        router.push("/feed");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error logging user in.");
        console.error(error.error_description || error.message);
      });
  };

  // Shared input classes.
  const inputClasses = {
    error: "form-error",
    input: "form-input",
    label: "sr-only",
    wrapper: "form-wrapper",
  };

  return (
    <div className="centered-page">
      <Link href="/">
        <h1 className="title">{app.name}</h1>
      </Link>
      <div className="form">
        <h2 className="form-header">Sign in to your account</h2>
        <Form handleSubmit={onSubmit} schema={loginSchema}>
          {({ register, formState }: any) => (
            <>
              <Input
                autoComplete="email"
                classes={inputClasses}
                error={formState.errors.email}
                label="Email address"
                name="email"
                placeholder="Email address"
                register={register}
                type="email"
              />
              <Input
                autoComplete="password"
                classes={inputClasses}
                error={formState.errors.password}
                label="Password"
                name="password"
                placeholder="Password"
                register={register}
                type="password"
              />
              <Button
                type="submit"
                isDisabled={loading || Object.keys(formState.errors).length > 0}
                isFullWidth
                isLoading={loading}
              >
                {buttons.login}
              </Button>
            </>
          )}
        </Form>
        <Link href="/register">
          <a className="form-link">{links.signup}</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
