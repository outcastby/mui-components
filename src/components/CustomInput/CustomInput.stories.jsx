import React from 'react';
import CustomInput from "./CustomInput";

export default {
  title: 'Base|Custom Input',
  parameters: {
    component: CustomInput,
    componentSubtitle: 'Custom Input',
  },
};

export const withLabel = () => <CustomInput labelText="Name" />;
export const withHelpText = () => <CustomInput labelText="Name" helpText="Look at that..." />;
export const withError = () => <CustomInput labelText="Name" error />;
export const withSuccess = () => <CustomInput labelText="Name" success value="Atanych" />;
