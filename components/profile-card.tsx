import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaCheckCircle, FaRocket } from 'react-icons/fa'

import Image from 'next/image';
// import profile from "@/public/Images/authors/profile.jpg"
// import coverPicture from "@/public/Images/projects/Typing-game.jpg"

interface ProfileCardPros {
    name: string;
    bio: string;
    email: string;
    linkedin: string;
    github: string;
}

const ProfileCard: React.FC<ProfileCardPros> = ({ name, bio, email, linkedin, github }) => {

    const [isFullscreen, setIsFullscreen] = useState<{ isOpen: boolean, image: string | null }>({
        isOpen: false,
        image: null,
    });

    useEffect(() => {
        if (isFullscreen.isOpen) {
            // Lock scroll when the model is open
            document.body.style.overflow = "hidden";
        } else {
            // unlock scroll when the model is closed
            document.body.style.overflow = "auto";
        }

        // Clean: reset when the component unmounts or modal is closed
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isFullscreen.isOpen]);

    const handleOpenFullscreen = (imageUrl: string) => {
        setIsFullscreen({ isOpen: true, image: imageUrl });
    }

    const handleCloseFullscreen = () => {
        setIsFullscreen({ isOpen: false, image: null });
    }

    return (
        <div className='max-w-xl max-auto bg-white dark:bg-stone-900 shadow-lg rounded-2xl overflow-hidden'>
            {/* Fullscreen model */}
            {isFullscreen.isOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={handleCloseFullscreen}>
                    <div className='relative' onClick={(e) => e.stopPropagation()}>
                        <Image
                            className='rounded-lg'
                            src={isFullscreen.image!}
                            alt='profile'
                            width={800}
                            height={800}
                            objectFit='cover'
                            priority={true}
                        />
                        <button className='absolute top-4 right-4 text-blue-700 text-3xl' onClick={handleCloseFullscreen}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Profile card */}
            <div className='relative h-40 p-4 ImageBackround cursor-pointer' onClick={() => handleOpenFullscreen("/Images/projects/Typing-game.jpg")}>
                <div className='flex justify-end relative h-full'>
                    {/* Profile Image */}
                    <div className='absolute bottom-0 right-0'>
                        <Image
                            className='rounded-full border-2 border-white'
                            src="/Images/authors/profile.jpg"
                            alt='profile'
                            width={100}
                            height={100}
                            objectFit='cover'
                            onClick={(e) => {
                                e.stopPropagation() //Prevent event bubbling
                                handleOpenFullscreen("/Images/authors/profile.jpg")
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 relative">
                <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-1'>{name} <FaCheckCircle className='text-sm text-blue-500 dark:text-green-500' /></h2>
                <p className='text-gray-600 text-sm mt-2 dark:text-gray-300'>{bio}</p>
                <div className='mt-4'>
                    <a href={`mailto:${email}`} className='text-gray-600 dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 hover:underline flex items-center'><FaEnvelope className='mr-2 text-blue-600' size={24} />{email}</a>
                </div>
                <div className=' mt-3'>
                    <a href={linkedin} target='_blank' className='text-gray-600 dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 flex hover:underline'><FaLinkedinIn className='mr-2 text-blue-600' size={24} />in/sune-kara</a>
                </div>
                <div className=' mt-3'>
                    <a href={github} target='_blank' className='text-gray-600 dark:text-gray-400 hover:dark:text-blue-600 hover:text-blue-600 flex hover:underline'><FaGithub className='mr-2 text-blue-600' size={24} />gitKarasune</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard