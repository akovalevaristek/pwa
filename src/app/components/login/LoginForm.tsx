import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "./PasswordField";

export const LoginForm: React.FC<{ setIsLogin: any }> = ({ setIsLogin }) => {
  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        setIsLogin(true);
      }}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};
