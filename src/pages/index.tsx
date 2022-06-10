import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

// Components
import Button from "components/form/Button";
import Form from "components/form/Form";
import Input from "components/form/Input";

// Client
import { supabase } from "client/supabaseClient";

// Schema
import { loginSchema } from "schema/authentication";

// Helpers
import { app, buttons, links } from "helpers/text";

const Home: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: any) => {
    userLogin(data).then(() => {
      router.push("/");
    });
  };

  // NOTE: This authentication is actually working.
  async function userLogin({ email, password }: any) {
    try {
      setLoading(true);
      // NOTE: Can do destructure data here.
      const { error } = await supabase.auth.signIn({ email, password });

      if (error) {
        throw error;
      }

      setLoading(false);
      toast.success("Logged in.");
    } catch (error) {
      setLoading(false);
      // @ts-expect-error
      toast.error(`${error.error_description || error.message}.`);
      // @ts-expect-error
      console.error(error.error_description || error.message);
    }
  }

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
