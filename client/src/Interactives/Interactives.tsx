import React, { ReactElement } from "react";
import "./Interactives.css";

const CustomButton: React.FC<CustomButtonProps> = ({ label, icon, ...props }): ReactElement => {
  return (
    <button className={`custom_button ${props.className}`.trim()} {...props}>
      {icon ? icon : label}
    </button>
  );
};

const CustomInputField: React.FC<CustomTextFieldProps> = ({ label, ...props }): ReactElement => {
  return (
    <div className="text_field_container" key={`input-container-${label}`}>
      <input className={getInputClassName()} {...props} />
      <label className={props.value ? "input_label_filled" : "custom_input_label"}>{label}</label>
    </div>
  );

  function getInputClassName(): string {
    if (props.value) return `custom_input_filled ${props.className ?? ""}`.trim();
    if (props.type === "date" && !props.value) return `custom_input input_hidden ${props.className ?? ""}`.trim();
    return `custom_input ${props.className ?? ""}`.trim();
  }
};

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: any;
}

interface CustomTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export { CustomButton, CustomInputField };
