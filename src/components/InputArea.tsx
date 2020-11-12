import React from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { InputType } from '../types/InputType';

const InputArea: React.FC<InputType> = ({ label, passwordMode = false, onChange }) => (
    <TextField
        label={label}
        type={passwordMode ? 'password' : undefined}
        onChange={onChange}
        className="inputWidth"
    />
)

export default InputArea