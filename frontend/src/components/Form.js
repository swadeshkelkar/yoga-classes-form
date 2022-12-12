import React, { useState } from "react";
import axios from "axios";

const Form =({setAlert, setError}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [batch, setBatch] = useState("6:00 AM to 7:00 AM");
  const [paymentMode, setPaymentMode] = useState("upi");

  const isValidAge = (dateOfBirthInput) => {
    var dob = new Date(dateOfBirthInput);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    if (age >= 18 && age <= 65) {
      return true;
    }
    return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   
    if (!isValidAge(dateOfBirth)) {
      setError(true);
      setTimeout(() => {        setError(false);
      }, 3000);

      return;
    }
    const formData = {
      firstName,
      lastName,
      email,
      contact,
      dateOfBirth,
      address,
      gender,
      batch,
      paymentMode,   
     };
    try {
      await axios.post(`http://localhost:5000/user`, formData);
      setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
    } catch (error) {
      setError(true);
      setTimeout(() => {        setError(false);
      }, 3000);
     
    }
  };
  return (
    <div>
          
      <form onSubmit={onSubmit}>
        <div className='flex flex-row mt-4 mb-4'>
          <div className='first-name w-1/2'>
            <label htmlFor='first-name' className='p-2 '>
              First Name
            </label>
            <input required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              id='first-name'
              type='text'
              className='p-2 border-2 rounded'
              placeholder='Akshay'
            ></input>
          </div>
          <div className='last-name w-1/2'>
            <label htmlFor='last-name' className='px-2'>
              Last Name
            </label>
            <input required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              id='last-name'
              type='text'
              className='p-2 border-2 rounded'
              placeholder='Jain'
            ></input>
          </div>
        </div>
        <div className='flex flex-row my-4'>
          <div className='email w-1/2'>
            <label htmlFor='email' className='p-2'>
              Email
            </label>{" "}
            <input required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id='email'
              type='text'
              className='p-2 border-2 rounded w-72'
              placeholder='abc@xyz.com'
            ></input>
          </div>
          <div className='birth-date w-1/3'>
            <label htmlFor='birth-date' className='px-2'>
              Date of Birth
            </label>
            <input required
              id='birth-date'
              // value={dateOfBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              type='date'
              className='p-2 border-2 rounded w-40'
              // placeholder='01-01-2000'
            ></input>
          </div>
        </div>
        <div className='flex flex-row my-4'>
          <div className='contact w-1/3'>
            <label htmlFor='contact' className='p-2'>
              Contact
            </label>
            <input required
              id='contact'              type='text' pattern="[1-9]{1}[0-9]{9}"
              minLength='10'
              maxLength='10'
              className='p-2 border-2 rounded w-44'
              placeholder='1234567890'
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            ></input>
          </div>
          <div className='gender w-1/3 py-2 pl-8'>
            <label htmlFor='gender' className='p-2'>
              Gender
            </label>
            <select required
              className='border-black rounded'
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              name='gender'
              
              id='gender'
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>

              <option value='other'>Other</option>
            </select>
          </div>
          <div className='batch w-1/3 py-2'>
            <label htmlFor='batch' className='p-2'>
              Batch
            </label>
            <select required
              className='rounded'
              name='batch'
              
              id='batch'
              value={batch}
              onChange={(e) => {
                setBatch(e.target.value);
              }}
            >
              <option value={this}>6:00 AM to 7:00 AM</option>
              <option value={this}>7:00 AM to 8:00 AM</option>
              <option value={this}>8:00 AM to 9:00 AM</option>
              <option value={this}>5:00 PM to 6:00 PM</option>
            </select>
          </div>
        </div>
        <div className='flex flex-row my-4'>
          <div className='address w-3/5'>
            <label htmlFor='address' className='p-2'>
              Address
            </label>
            <input required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              id='address'
              type='text'
              minLength='3'
              maxLength='100'
              className='p-2 border-2 rounded w-96'
              placeholder='street, city, state'
            ></input>
          </div>
          <div className='batch w-2/5 py-2'>
            <label htmlFor='batch' className='p-2'>
              Payment Mode
            </label>
            <select required
              className='rounded'
              name='batch'
              
              id='batch'
              value={paymentMode}
              onChange={(e) => {
                setPaymentMode(e.target.value);
              }}
            >
              <option value='upi'>UPI</option>
              <option value='debit-card'>Debit Card</option>
              <option value='credit-card'>Credit Card</option>
              <option value='wallet'>Wallet</option>
            </select>
          </div>
        </div>
        <button
          type='submit'
          className='flex  mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
        >
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default Form;
