import { JSX, SVGProps } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

/* Our Icons for each Social Networks and Routing */
const navigation = [
  {
    name: 'Linkedin',
    href: 'https://linkedin.com/in/sune-kara',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaLinkedinIn />
    )
  },
  {
    name: 'Github',
    href: 'https://github.com/gitkarasune',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <FaGithub />
    )
  }
]

export default function Footer() {
  return (
    <footer className='py-8 roboto'>
      <div className='container max-w-3xl'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                role='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-10 w-10'/>
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-11 md:mt-0'>
            <p className='text-center text-md leading-5 text-muted-foreground'>
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
