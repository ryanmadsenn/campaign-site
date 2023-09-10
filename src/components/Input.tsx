import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  _input?: ChakraInputProps;
}

const Input = ({ name, type, label, placeholder, _input }: InputProps) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name);

  return (
    <FormControl isInvalid={!!(touched && error)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {..._input}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default Input;
