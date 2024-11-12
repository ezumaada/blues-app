import React from 'react';
import rev from '../../assets/images/dreadsrev.png';


const Reviews = () => {
    const Cards =(props) => {
        return (
            <div >
                <div  className=' border-2 border-solid border-black px-2 py-3 my-10  '>
                    <p className='text-black font-semibold'>This is the platform you need if you ever want to venture into the real estate business. Thanks to Blues for helping me in the process of selling my property.</p>
                    <div className='flex flex-row gap-3 w-[160px] mt-4 '>
                        <div><img className='w-[45px] h-[45px]' src={props.img} alt="review-picture" /></div>
                        <div><h2 className='text-black'>Jude Henry</h2>
                            <p className='text-black'>Lekki Phase 2</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div className='bg-[url("../reviewbg.png")] mt-5 w-[100%] h-[420px]'>
        <div className='flex flex-col gap-5 px-9 items-center mt-4' >
            <div className='flex flex-col mt-5 gap-2 items-center justify-center'>
                <h2 className='text-black font-bold text-2xl'>Let Our Reviews do the Talking</h2>
                <p className='text-black font-normal text-base'>See what our clients are saying about us</p>
            </div>
            <div className='flex flex-row gap-8 justify-between items-center '>
                <Cards img={rev}/>
                <Cards img={rev}/>
            </div>
        </div>
    </div>
  )
}

export default Reviews