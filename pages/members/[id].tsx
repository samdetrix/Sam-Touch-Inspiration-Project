// @ts-nocheck
import type { NextPage } from "next";
import {useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
import Link from 'next/link';
import { useRouter } from "next/router"
import Modal from "../../components/modal";
// import { Button } from '@material-ui/core';

import CardProfile from "@/components/profile";


export default function Member() {

    const router = useRouter();
    const { id } = router.query;

    const _id = id

    const [member, setMember] = useState({})

    const [showModal, setShowmodal] = useState(false);

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }

    const [state, setState] = useState({
        name: '',
        email: '',
        occupation: '',
        bio: '',
      });

    const handleChange = (e) => {
        const { value: eventValue } = e.target;
    
        setState({
          ...state,
          [e.target.name]: eventValue,
        });
      };



    //   const _id = member.id,

      const submitHandler = (e) => {
        e.preventDefault();

        
        const payload = {
          name: state.name,
          email: state.email,
          occupation: state.occupation,
          bio: state.bio,
        };
       
        axios.put(
            `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${member._id}`,
            payload,
              {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '63be7360969f06502871ad7f'
                  },
              },
        
              );  
        toggle();      
              
    }  

    // @ts-ignore
        const handleOpen = () =>{
            setShowmodal(true)
        }

        const handleClose = () =>{
            setShowmodal(false)
        }
      

    const body = (
        <div>
          <a className="text-primary">
            <b>Edit Member</b>
          </a>
          <p></p>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="occupation"
                placeholder="Occupation"
                onChange={handleChange}
              />
            </div>
    
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="bio"
                placeholder="Bio"
                onChange={handleChange}
              />
            </div>
    
            <button type="submit" className="bg-black text-white">
              {' '}
              SUBMIT{' '}
            </button>
    
          </form>
        </div>
      );

    useEffect(() => {
        
          axios
            .get(
              `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${_id}`,
              {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '63be7360969f06502871ad7f'
                  },
              }
            )
            .then((res: any) => {
              setMember(res.data);
              console.log(res.data);
              
            })
            .catch((err: any) => {
              console.log(err);
            });
        
      }, [open]);

    return (
        <>
        <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-8 mt-4">
            
            <CardProfile className="sm:col-span-6 ml-80"

            name = {member.name}
            id = {member._id}
            email ={member.email} 
            occupation={member.occupation}
            bio={member.bio}
            />
            {/* {member.name} */}

        </div>
        <span className="pl-80" onClick={handleOpen}>
            edit member info
        </span>
        {showModal ? 
            (<div>
            <h1>
                <Modal
                setShowmodal = {setShowmodal}
                body = {body}
                handleClose = {handleClose}
                handleOpen = {handleOpen}
                />
            </h1>
          </div>   ):(
            <div></div>
          ) 
    }
        
      </>
    )  

}