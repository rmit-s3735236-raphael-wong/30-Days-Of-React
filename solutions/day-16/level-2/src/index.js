// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option value={value}> {label}</option>
))

// Higher Order Components for every type of input
const Input = ({ type, name, value, id, onChange, onBlur, placeholder}) => {
  return(
    <input type={type} name={name} value={value} id={id} onChange={onChange} onBlur={onBlur} placeholder={placeholder}/>
  )
}

const TextInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='text'/>
  }
}

const EmailInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='email' name='email' placeholder='Email'/>
  }
}

const TelInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='tel' name='Tel' placeholder='Telephone'/>
  }
}

const DOBInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='date' name='dateOfBirth' placeholder='Date of Birth'/> 
  }
}

const ColorInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='color' name='favoriteColor' id='favoriteColor' placeholder='Favorite Color'/>
  }
}

const WeightInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='number' name='weight' id='weight' placeholder='Weight in Kg'/>
  }
}

const GenderInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='radio' name='gender'/>
  }
}

const CheckboxInputHOC = (Component) => {
  return (props) => {
    return <Component {...props} type='checkbox'/>
  }
}

const TextInput = TextInputHOC(Input)
const EmailInput = EmailInputHOC(Input)
const TelInput = TelInputHOC(Input)
const DOBInput = DOBInputHOC(Input)
const ColorInput = ColorInputHOC(Input)
const WeightInput = WeightInputHOC(Input)
const GenderInput = GenderInputHOC(Input)
const CheckboxInput = CheckboxInputHOC(Input)

class App extends Component {
  // declaring state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      tel: false,
      weight: false,
    },
  }
  handleChange = (e) => {
    /*
    // we can get the name and value like this but we can also destructure it from e.target
    const name = e.target.name
    const value = e.target.value
    */
    const { name, value, type, checked } = e.target
    // [variablename] this we can make a value stored in a certain variable could be a key for an object, in this case a key for the state

    if (type === 'checkbox') {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      })
    } else if (type === 'file') {
      this.setState({ [name]: e.target.files[0] })
    } else {
      this.setState({ [name]: value })
    }
  }
  handleBlur = (e) => {
    const { name , value} = e.target
    this.setState({ touched: { ...this.state.touched, [name]: true } })
  }
  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      weight: '',
    }

    if (
      (this.state.touched.firstName && this.state.firstName.length < 3) ||
      (this.state.touched.firstName && this.state.firstName.length > 12)
    ) {
      errors.firstName = 'First name must be between 2 and 12'
    }

    if (
      (this.state.touched.lastName && this.state.lastName.length < 3) ||
      (this.state.touched.lastName && this.state.lastName.length > 12)
    ) {
      errors.lastName = 'Last name must be between 2 and 12'
    }

    if (
      this.state.touched.email && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))
    ) {
      errors.email = 'Invalid email address. Please check again.'
    }

    if (
      this.state.touched.tel && !(this.state.tel.match(/^\d{10}$/))
    ) {
      errors.tel = 'Invalid telephone number. Please make sure its in the format (XXXXXXXXXX).'
    }

    if (
      this.state.touched.weight && isNaN(parseFloat(this.state.weight))
    ) {
      errors.weight = 'Invalid Weight detected. Please enter numbers only (in kg).'
      console.log(this.state.weight)
      console.log(isNaN(parseFloat(this.state.weight)))
    }

    return errors
  }
  handleSubmit = (e) => {
    // stops the default behavior of form element specifically refreshing of page
    e.preventDefault()

    const {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills,
    } = this.state

    const formattedSkills = []
    for (const key in skills) {
      console.log(key)
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase())
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      country,
      gender,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      bio,
      file,
      skills: formattedSkills,
    }
    console.log(data)
  }

  render() {
    // accessing the state value by destrutcturing the state
    // the noValidate attribute on the form is to stop the HTML5 built-in validation

    const { firstName, lastName, email, tel, weight } = this.validate()
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name </label>
              <TextInput
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='First Name'
              />{' '}
              <br />
              <small>{firstName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name </label>
              <TextInput
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                placeholder='Last Name'
              />{' '}
              <br />
              <small>{lastName}</small>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email </label>
              <EmailInput
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />{' '}
              <br />
              <small>{email}</small>
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='tel'>Telephone </label>
            <TelInput
              value={this.state.tel}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />{' '}
            <br />
            <small>{tel}</small>
          </div>

          <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date of birth </label>
            <DOBInput
              value={this.state.dateOfBirth}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='favoriteColor'>Favorite Color </label>
            <ColorInput
              value={this.state.favoriteColor}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>Weight </label>
            <WeightInput
              value={this.state.weight}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />{' '}
            <br />
            <small>{weight}</small>
          </div>
          <div>
            <label htmlFor='country'>Country</label> <br />
            <select name='country' onChange={this.handleChange} id='country'>
              {selectOptions}
            </select>
          </div>

          <div>
            <p>Gender</p>
            <div>
              <GenderInput
                id='female'
                value='Female'
                onChange={this.handleChange}
                checked={this.state.gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <GenderInput
                id='male'
                value='Male'
                onChange={this.handleChange}
                checked={this.state.gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <GenderInput
                id='other'
                value='Other'
                onChange={this.handleChange}
                checked={this.state.gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div>
            <p>Select your skills</p>
            <div>
              <CheckboxInput
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <CheckboxInput
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <CheckboxInput
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={this.state.bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
