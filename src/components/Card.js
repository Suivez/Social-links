import React from 'react'
import avatarIcon from '../images/avatar-jessica.jpeg';

function Card() {
    const buttonSocial = (socialTitle) => {
        return (
            <button className='w-full my-2 p-3 rounded-lg bg-grey700 outline-none border-none text-white text-sm font-semibold hover:bg-green hover:text-grey700 transition delay-0 linear'>{socialTitle}</button>
        )
    }

    return (
        <div className='flex flex-col items-center justify-center bg-grey800 w-96 m-5 p-5 sm:m-0 text-white rounded-xl'>
            <img src={avatarIcon} alt='Avatar' className='rounded-full w-24 my-5'/>
            <h2 className='text-2xl font-bold tracking-wide'>Jessica Randall</h2>
            <p className='text-sm my-3 text-green font-semibold'>London, United Kingdom</p>
            <p className='text-sm my-3'>"Front-end developer and avid reader."</p>
            {buttonSocial("GitHub")}
            {buttonSocial("Fronted Mentor")}
            {buttonSocial("LinkedIn")}
            {buttonSocial("Twitter")}
            {buttonSocial("Instagram")}
        </div>
    )
}

export default Card
