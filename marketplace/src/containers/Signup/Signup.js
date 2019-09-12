import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Signup.css';
import Logo from '../Logo.png';

class Signup extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'name',
          placeholder: 'Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'username',
          placeholder: 'Username'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    errorMessage: '',
    successMessage: ''
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    // console.log(...this.state.controls);
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    console.log(updatedControls);
    console.log(this.state);
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  submitHandler = event => {
    event.preventDefault();
    const signupData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value,
      username: this.state.controls.username.value,
      name: this.state.controls.name.value,
      role: ['user']
    };
    let url = 'http://localhost:8080/api/auth/signu';
    axios
      .post(url, signupData)
      .then(response => {
        console.log(response);
        this.setState({ successMessage: response.data.message });
      })
      .catch(err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    console.log(formElementsArray.length);
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    let successMessage = null;

    if (this.state.successMessage) {
      successMessage = <p>{this.state.successMessage}</p>;
    }

    let errorMessage = null;

    if (this.state.errorMessage) {
      errorMessage = <h1>{this.state.errorMessage}</h1>;
    }

    return (
      <div
        className={classes.Auth}
        style={{ margin: 'auto', width: '25%', paddingTop: '8%' }}
      >
        {successMessage}
        {errorMessage}
        <img
          style={{
            paddingLeft: '5%',
            width: '70%',
            height: '5%',
            display: 'inline-block'
          }}
          src={Logo}
          alt="logo"
        />
        <p style={{ paddingLeft: '5%' }}>
          {'Building Product Selection Platform'}
        </p>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;

// import React from "react";

// // import "./Login.css";

// const Signup = ({
//   onEmailChange,
//   onPasswordChange,
//   onFirstNameChange,
//   onLastNameChange,
//   onSubmitSignIn,
//   disabled,
//   userInvalid,
//   userShouldValidate,
//   userTouched,
//   passwordInvalid,
//   passwordShouldValidate,
//   passwordTouched,
//   firstInvalid,
//   firstShouldValidate,
//   firstTouched,
//   lastInvalid,
//   lastShouldValidate,
//   lastTouched
// }) => {
//   const inputUserClasses = ["Login", "input-field"];
//   const inputPassClasses = ["Login", "input-field"];
//   const inputFirstClasses = ["Login", "input-field"];
//   const inputLastClasses = ["Login", "input-field"];

//   if (userInvalid && userShouldValidate && userTouched) {
//     inputUserClasses.push("Invalid");
//   }
//   if (passwordInvalid && passwordShouldValidate && passwordTouched) {
//     inputPassClasses.push("Invalid");
//   }
//   if (firstInvalid && firstShouldValidate && firstTouched) {
//     inputFirstClasses.push("Invalid");
//   }
//   if (lastInvalid && lastShouldValidate && lastTouched) {
//     inputLastClasses.push("Invalid");
//   }

//   return (
//     <div className="Login" style={{ margin: "auto", width: "20%" }}>
//       {/*<form>*/}
//       <div className="input-icons">
//         <input
//           className={inputUserClasses.join(" ")}
//           type="text"
//           placeholder="Username or Email"
//           onChange={onEmailChange}
//           style={{ borderColor: "none" }}
//         />
//       </div>
//       <div className="input-icons">
//         <input
//           className={inputPassClasses.join(" ")}
//           type="text"
//           placeholder="Password"
//           onChange={onPasswordChange}
//         />
//       </div>
//       <div className="input-icons">
//         <input
//           className={inputFirstClasses.join(" ")}
//           type="text"
//           placeholder="First Name"
//           onChange={onFirstNameChange}
//         />
//       </div>
//       <div className="input-icons">
//         <input
//           className={inputLastClasses.join(" ")}
//           type="text"
//           placeholder="Last Name"
//           onChange={onLastNameChange}
//         />
//       </div>
//       <div>
//         <button
//           type="submit"
//           style={{ float: "right", backgroundColor: "blue" }}
//           onClick={onSubmitSignIn}
//           disabled={disabled}
//         >
//           Login
//         </button>
//       </div>
//       {/*</form>*/}
//     </div>
//   );
// };

// export default Signup;
