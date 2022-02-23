import React, { useState, useContext, useRef } from 'react'
import TaskContext from '../context/TaskContext'
import { FaFilePdf } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ziggyLogo from '../assets/zlogo.png'

const UserInput = () => {

  const {setValue} = useContext(TaskContext)

  const linkRef = useRef(null)

  const [userInput, setUserInput] = useState({})

  const onChange = (e) => {
    setUserInput({...userInput ,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setValue(userInput)
    
    linkRef.current.click()
  }

  return (
    <div>
      
      <Link to='previewPage' className='hidden' ref={linkRef}> Enter </Link>

      <form onSubmit={handleSubmit}>
        <div className={style.container}>
         
          <div className={style.containerWrapper}>
          <img  src={ziggyLogo} className={style.logo} alt="logo"/>
             <label className={style.title}>  Air Quality Report </label>
            <div className='grid grid-cols-4 gap-4 gap-y-6'>
              <div className="col-span-6 sm:col-start-1 sm:col-end-6 mt-10">
                  <label className={style.formLabel}> <i class="fas fa-map-marker-alt"/> Location: </label>
                  
                  <input type="text" 
                  className={style.input} 
                      name="location" onChange={onChange} placeholder={'enter location'}/>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className={style.formLabel}><i class="fas fa-user"/> Compiled By: </label>
                  
                  <input type="text" className={style.input} name="compliedBy" onChange={onChange} placeholder={'enter your name'}/>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className={style.formLabel}><i class="fas fa-calendar-alt"/> Monitoring period: </label>
                  
                  <input type="datetime-local" className={style.input}  name="monitoringPeriod" onChange={onChange}/>
              </div>

              <div className="col-span-6 sm:col-start-1 sm:col-end-6 ">
                  <label className={style.formLabel}><i class="fas fa-clock" /> Compiled On: </label>
                  
                  <input type="date" className={style.input} name="compliedOn" onChange={onChange}/>
              </div>
              
            </div>

            
          
            <div className='flex justify-center mt-7'>
              <button type="submit" className={style.button}> <FaFilePdf className='mr-2' /> <p>Generate PDF</p> </button>
            </div>
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserInput


const style = {
  logo:`w-[4rem] ml-[40%] absolute `,
  container: `relative px-5 flex justify-center mt-10 mb-5`,
  containerWrapper:`border border-solid border-gray-300 block p-10 rounded-lg bg-[white] shadow-lg max-w-2xl sm:w-7/12`,
  formLabel:`form-label text-gray-700 text-base font-medium uppercase`,
  title: `w-full h-[10vh] text-2xl uppercase`,
  input: `block w-full px-3 py-1.5 border border-gray-300 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-700 focus:outline-cyan-500`,                    
  button: `px-6 py-2.5 bg-blue-600 text-white font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex flex-col"`,
}