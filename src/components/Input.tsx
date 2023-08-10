import React from "react";

type InputPropsType = {
    // callback:()=> void
    labelName: string
    value:number
    setValue:(value:number)=> void
}

export const Input = (props: InputPropsType) => {




    return (
        <div>
            <label htmlFor = ''>{props.labelName}</label>
            <input onChange={(e)=>{props.setValue(+e.currentTarget.value)}} type = {'number'} />
        </div>
    )
}
