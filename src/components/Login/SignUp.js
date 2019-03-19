// @flow
import React, { Fragment } from "react";
import TextField from "@atlaskit/textfield";
import Button, { ButtonGroup } from "@atlaskit/button";
import { Link } from "react-router-dom";
import Form, {
  Field,
  FormFooter,
  HelperMessage,
  ErrorMessage,
  ValidMessage
} from "@atlaskit/form";

export default () => (
  <div
    style={{
      display: "flex",
      width: "400px",
      margin: "0 auto",
      flexDirection: "column"
    }}
  >
    <Form
      onSubmit={data => {
        // console.log('form data', data);
        return new Promise(resolve => setTimeout(resolve, 2000)).then(() =>
          data.username === "error" ? { username: "IN_USE" } : undefined
        );
      }}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="email" label="E-mail" isRequired defaultValue="">
            {({ fieldProps, error }) => (
              <Fragment>
                <TextField autoComplete="on" {...fieldProps} />
                {!error && (
                  <HelperMessage>
                    Please enter your email address.
                  </HelperMessage>
                )}
                {error && (
                  <ErrorMessage>
                    This user address is already in use, try another one.
                  </ErrorMessage>
                )}
              </Fragment>
            )}
          </Field>
          <Field
            name="password"
            label="Password"
            defaultValue=""
            isRequired
            validate={value => (value.length < 8 ? "TOO_SHORT" : undefined)}
          >
            {({ fieldProps, error, meta }) => (
              <Fragment>
                <TextField type="password" {...fieldProps} />
                {!error && !meta.valid && (
                  <HelperMessage>
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </HelperMessage>
                )}
                {error && (
                  <ErrorMessage>
                    Password needs to be more than 8 characters.
                  </ErrorMessage>
                )}
                {meta.valid && <ValidMessage>Awesome password!</ValidMessage>}
              </Fragment>
            )}
          </Field>
          <Field
            name="repassword"
            label="Re-enter password"
            defaultValue=""
            isRequired
            validate={value => (value.length < 8 ? "TOO_SHORT" : undefined)}
          >
            {({ fieldProps, error, meta }) => (
              <Fragment>
                <TextField type="password" {...fieldProps} />
                {!error && !meta.valid && (
                  <HelperMessage>Repeat your password</HelperMessage>
                )}
                {error && (
                  <ErrorMessage>Passwords must be the same!</ErrorMessage>
                )}
                {meta.valid && (
                  <ValidMessage>The passwords match!</ValidMessage>
                )}
              </Fragment>
            )}
          </Field>

          <FormFooter>
            <ButtonGroup>
              <Link to="/login">
                <Button type="button" appearance="subtle-link">
                  Back to sign in
                </Button>
              </Link>
              <Button appearance="subtle">Cancel</Button>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                Sign up
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  </div>
);
