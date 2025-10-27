import React from 'react'

const AccountDetails = () => {
  return (
   <form action="" className=' w-full flex justify-start items-start flex-col gap-4 '>
                                   {/* Account Details  */}
                                   <div className=' w-full   flex justify-start items-start flex-col  h-fit    '>
                                       <h4 className='sm:text-2xl text-xl   font-medium'>Account Details </h4>
   
   
                                       <div className='w-full flex justify-start items-start flex-col gap-3 mt-4'>
   
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>First Name</label>
                                               <input type="text" placeholder='First name' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>Last Name</label>
                                               <input type="text" placeholder='Last name' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
   
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>Display Name</label>
                                               <input type="text" placeholder='Display name ' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                               <p className='text-sm  text-formText'>This will be how your name will be displayed in the account section and in reviews</p>
                                           </div>
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>Email Address</label>
                                               <input type="text" placeholder='Email address' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
                                       </div>
   
   
                                   </div>
                                   {/* password */}
                                   <div className=' w-full   flex justify-start items-start flex-col  h-fit    '>
                                       <h4 className='sm:text-2xl text-xl   font-medium'>Password </h4>
   
   
                                       <div className='w-full flex justify-start items-start flex-col gap-3 mt-4'>
   
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>Old Password</label>
                                               <input type="text" placeholder='Old password' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>New Password</label>
                                               <input type="text" placeholder='New password' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
   
   
                                           <div className='w-full flex flex-col justify-start items-start gap-2'>
                                               <label className='text-formText font-medium text-sm uppercase '>Repeat Password</label>
                                               <input type="text" placeholder='Repeat Password' className='w-full  py-1 border border-formText rounded-md text-base  sm:px-4 px-2 font-light ' />
                                           </div>
                                       </div>
   
   
                                   </div>
   
   
                                   <button type='submit' className='w-fit text-center flex justify-center items-center p-2 sm:px-10 px-6 font-extralight rounded-lg bg-black text-primary mt-4'>Save changes</button>
                               </form>
  )
}

export default AccountDetails