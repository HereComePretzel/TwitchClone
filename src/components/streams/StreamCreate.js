import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    //for rendering validation errors. Touched refers to whether an input has been interacted with.
    renderError({ error, touched }){
        if(touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            )
        }
    }
    //input is input, label is label, meta handles validations. Changed to an arrow function due to "this" issues
    renderInput = ({ input, label, meta }) => {
        //changes state of field if no info entered
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return( 
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            //handleSubmit is provided by redux forms, we pass in our onSubmit function as argument
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}className='ui form error'>
            {/* //Field is a redux forms component which provides numerous methods. Component gives method to Field */}
                <Field name='title' component={this.renderInput} label='Enter Title'/>
                <Field name='description' component={this.renderInput} label='Enter Description' />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}
//these are the validations that run. We name them based on the naming conventions in the Field Components
const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title!'
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description!'
    }

    return errors;
}

//wiring to use redux forms
export default reduxForm({
    // key is reserved, value is dev defined 
    form: 'streamCreate',
    // validate assigned to error handling
    validate
})(StreamCreate);