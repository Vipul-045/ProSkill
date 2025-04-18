import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>
          Get Interview-Ready with AI-Powered Practice & Feedback
        </h2>
        <p className='text-lg'>
          Practice coding interviews with AI-generated questions and receive instant feedback on your performance.
        </p>
        <Button asChild className='btn btn-primary max-sm:w-full'>
          <Link href="/interview">Start an Interview</Link>
        </Button>

      </div>
      <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
    </section>
    </>
  )
}

export default page  