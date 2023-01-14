import Image from "next/image"
import Avatar from '@mui/material/Avatar';
import {useEffect, useState } from "react";

// import { classNames } from "../lib/utils"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Modal from "../components/modal";

export function classNames(...classes: (String | null | undefined)[]) {
    return classes.filter(Boolean).join(' ')
  }
  

interface PostProps {
  name:any
  email:string
  occupation:any
  bio:any
  id: any
  className: any
}

export default function CardProfile({ className,name, id, email,occupation, bio}:PostProps) {

const member = { name, id, email,occupation, bio}

  return (

    <div
      className={classNames(
      "border rounded-lg p-6 shadow-[0px_0px_28px_rgba(0,0,0,0.08)] flex flex-col items-center bg-[#FFFFFF]",
      className
      )}
    > <h1 className='text-xl text-[#020203] mb-6 uppercase justify-center'>member profile</h1>
      <div className="pt-3">
        { <Avatar
        sx={{ width: 90, height: 93}}
       />}
      </div> 
      <p className="flex flex-col  items-center">
      <span className="text-base text-[#5F6062] whitespace-nowrap pt-6">{member.name ? member.name : <Skeleton width={140} />}</span>
        <span className="text-md text-gray-400  mt-2">{member.email ? member.email : <Skeleton width={100} /> }</span>
        <span className="text-md text-gray-400  mt-2">{member.occupation ? member.occupation : <Skeleton width={100} /> }</span>
        <span className="text-sm text-gray-400  mt-2">{member.bio ? member.bio : <Skeleton width={100} /> }</span>
      </p>
      
      {/* <p className={userStatus == 'Active' ? "uppercase text-green text-sm mt-2":"uppercase text-red-500 text-sm mt-1"}>{member.userStatus ? member.userStatus :  <Skeleton width={70} />}</p> */}

      <div className="mt-10">
        {/* <Modal/> */}
      </div>
    
    </div>
  )
}
