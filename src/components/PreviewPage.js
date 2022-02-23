import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import GenerateGraph from './GenerateGraph';
import { FaFileDownload } from 'react-icons/fa';
import ziggyLogo from '../assets/zlogo.png'

import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf'


const PreviewPage = () => {
  const {userValue} = useContext(TaskContext)
  const {location, compliedBy, monitoringPeriod, compliedOn} = userValue

  const onButtonClick = () => {
    
    htmlToImage.toPng(document.getElementById('myPage'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF("portrait", "mm", "a4");
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("download.pdf"); 
        })
  };

  const data = [
    { name: "Facebook", value: 1400},
    { name: "Google", value: 3000},
    { name: "Youtube", value: 5000}
  ]


  return (
    <div>
      <div id='myPage' >

            <img  src={ziggyLogo} className='w-[7rem] float-right absolute ml-20 flex' alt="logo"/>

            <h1 className={style.title}> Air Quality Report </h1>
            <h1 className={style.TitleDate}> January 2022 </h1>

        <div className='grid grid-cols-6 gap-2 mt-20'>
          
          <div className="col-start-2 mt-5">
            <h1 className={style.labelText}><i class="fas fa-map-marker-alt"/> Location </h1>
          </div>

          <div className="col-end-6 mt-5 ">
            <h1 className={style.labelText}><i class="fas fa-user"/> Compiled By </h1>
          </div>

          <div className="col-start-2 mt-5">
            <h1 className={style.inputText}> {location} </h1>
          </div>
          
          <div className="col-end-6 mt-5 ">
            <h1 className={style.inputText}> {compliedBy} </h1>
          </div>
          
          <div className="col-start-2 mt-5">
            <h1 className={style.labelText}><i class="fas fa-calendar-alt"/> Monitizing Period </h1>
          </div>

          <div className="col-end-6 mt-5">
            <h1 className={style.labelText}><i class="fas fa-clock" /> Compiled On </h1>
          </div>

          <div className="col-start-2 mt-5 ">
            <h1 className={style.inputText}> {monitoringPeriod} </h1>
          </div>

          <div className="col-end-6  mt-5">
            <h1 className={style.inputText}> {compliedOn} </h1>
          </div>

        </div>

        <div className="flex justify-center mt-60">
          <h1 className="px-6 py-2.5 rounded-full text-xl font-semibold bg-neutral-800 text-white uppercase"> Average Air Quality Rating </h1>
        </div>

        <div className='grid grid-cols-6 gap-2'>

          <div className="col-start-2">
            <GenerateGraph data={data} />
          </div>

          <div className="col-span-6 col-start-4 my-36">
            <h1 className='text-green-500 text-3xl text-gray-700 text-base font-medium my-4'> Good (8 CO2)</h1>
            <h1 className='text-yellow-500 text-3xl text-gray-700 text-base font-medium my-4'> Medium (2 PM, 1 VOC) </h1>
            <h1 className='text-red-500 text-3xl text-gray-700 text-base font-medium my-4'> Poor (2 PM) </h1>
          </div>

        </div>

      </div>


          <div className='bg-emerald-100 w-5/6 h-[200px] border-l-[20px] border-emerald-200 '>
            <p className='text-emerald-600 ml-4 font-extralight'>Add notes </p>
            </div>


        <div className="flex justify-center">
        <button onClick={onButtonClick} className="my-3 px-10 py-3 bg-blue-700 text-white font-medium text-lg 
          leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg 
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
          active:shadow-lg transition duration-150 ease-in-out flex flex-row" > <FaFileDownload className='mr-2'/> <p>Download</p> </button>
      </div>
      
    </div>
  ) 
}

export default PreviewPage

const style = {
title: `my-10 flex pt-20 justify-center form-label text-5xl font-bold underline-offset-8 uppercase`,
TitleDate: `my-10 flex text-blue-700 justify-center form-label text-4xl text-base font-medium`,
labelText:`uppercase text-xl font-medium text-gray-400 text-base`,
inputText: `text-xl text-gray-900 text-base font-medium`,
}