// @flow
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import TextField from "@atlaskit/textfield";
import Button, { ButtonGroup } from "@atlaskit/button";
import { Checkbox } from "@atlaskit/checkbox";
import Form, { CheckboxField, Field, FormFooter } from "@atlaskit/form";

const Wrapper = styled.div`
  min-width: 450px;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px;
  box-sizing: border-box;
  color: rgb(23, 43, 77);
  padding: 48px;
`;

const LoginForm = props => {
  const submit = data => {
    // eslint-disable-next-line
    console.log(data);

    props.history.push("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={data => submit(data)}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <Field name="username" label="User name" isRequired defaultValue="">
              {({ fieldProps }) => (
                <Fragment>
                  <TextField autoComplete="off" {...fieldProps} />
                </Fragment>
              )}
            </Field>
            <Field name="password" label="Password" defaultValue="" isRequired>
              {({ fieldProps }) => (
                <Fragment>
                  <TextField type="password" {...fieldProps} />
                </Fragment>
              )}
            </Field>
            <CheckboxField name="remember" label="Remember me" defaultIsChecked>
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Always sign in on this device"
                />
              )}
            </CheckboxField>
            <FormFooter>
              <ButtonGroup>
                <Button appearance="subtle">Cancel</Button>
                <Button
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Sign up
                </Button>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(LoginForm);
