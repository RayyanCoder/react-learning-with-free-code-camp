import React from 'react';
import ReactDOM from 'react-dom';


export default function FirstForm(){

    const [formData,setFormData] = React.useState({
        firstName:'',
        lastName:'',
        email:'',
        comments:'',
        isFriendly:true,
        employment:"",
        favColor:''
    });

    function handleChange(event){
        const {name,value,type,checked} = event.target;
        setFormData((previouseData)=>{
            return {
                ...previouseData,
                [name]:type === "checkbox" ? checked:value
            }

        });
    }

    function submitHandle(event){
            event.preventDefault();
    }
      console.log(formData);
    return(<div>
        This is a form components
        <form onSubmit={submitHandle}>
            <input type="text"
            placeholder='first name'
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            ></input>

            <input type="text"
            placeholder='first lastname'
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}

            ></input>

            
           <input type="text"
            placeholder='Enter your Email Address'
            onChange={handleChange}
            name="email"
            value={formData.email}

            ></input>
            <textarea
            placeholder='Enter your comments here'
            name='comments'
            onChange={handleChange}
            value={formData.comments}
            ></textarea>

            <input 
            type="checkbox"
             id='check1'
             name="isFriendly"
             onChange={handleChange}
             checked={formData.isFriendly}
              ></input>
            <label htmlFor='check1'>Are you friendly</label>

            <input 
             id='check1'
             type="radio"
             name="employment"
             checked={formData.employment == "Employee"}
             onChange={handleChange}
             value="Employee"
              ></input>
            <label htmlFor='check1'>Employee</label>
            <input 
             id='check1'
             type="radio"
             name="employment"
             onChange={handleChange}
             checked={formData.employment == "un Employee"}
             value="un Employeed"
              ></input>
            <label htmlFor='check1'>un employeed</label>
            <input 
             id='check1'
             type="radio"
             name="employment"
             onChange={handleChange}
             checked={formData.employment == "Student"}
             value="Student"
              ></input>
            <label htmlFor='check1'></label>
          <select
          name="favColor"
          onChange={handleChange}
          value={formData.favColor}
          >
            <option value="Read">Read</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="white">white</option>

          </select>
          <button>Submit</button>
        </form>
    </div>);
}