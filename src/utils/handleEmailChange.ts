import type { Dispatch, SetStateAction } from "react";
import type React from "react";

export const handleInputChange = <T>(
    e:React.ChangeEvent<HTMLInputElement>,
    formData: T,
    setFormData: Dispatch<SetStateAction<T>>,
    fieldName: keyof T
) => {
    setFormData({...formData, [fieldName]: e.target.value});
}