import React from 'react';
import { FormControl, Input, FormHelperText } from '@chakra-ui/react';

const InputField = ({ placeholder, type, mt, children }) => {
  return (
    <FormControl>
      <Input
        placeholder={placeholder}
        type={type}
        mt={mt}
        padding='1.6rem'
        borderRadius='none'
        bg='brand.letterColor'
        focusBorderColor='transparent'
      />
      {children && <FormHelperText color='brand.buttonColor'>{children}</FormHelperText>}
    </FormControl>
  );
};

export default InputField;
