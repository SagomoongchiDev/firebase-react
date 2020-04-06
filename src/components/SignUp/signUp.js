import React from 'react';
import {useForm, Controller} from "react-hook-form";

const SignUp = () => {
    const {handleSubmit, control, reset} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller as={<input/>} rules={{required: true}} name="id" control={control} defaultValue=""/>
            <button onClick={onSubmit}>제출</button>
            <button onClick={reset}>리셋</button>
        </form>

    );
};

export default SignUp;