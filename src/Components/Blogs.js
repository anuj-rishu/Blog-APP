import React, { useContext } from 'react'
import { Appcontext } from '../Context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blogs = () => {
  const {posts ,loading} = useContext(Appcontext)
  return (
   <div className='flex justify-center items-center h-screen w-11/12 max-w-[670px] py-8 flex-col gap-y-7 mt-[66px] mb-[66px]'>
{
  loading ?(<Spinner/>):(
    posts.length ===0 ?
    (
      <div>
        <p>No post Found</p>
      </div>  ):
      posts.map((post) => (
        <div key={post.id}>
          <p className=' font-bold  text-lg' >{post.title}</p>
          <p className=' text-sm mt-[4px] '>
            By <span className=' italic'> {post.author}</span> on <span className='underline font-bold'>{post.category}</span>
          </p>
          <p className=' text-sm mt-[4px] '>Posted on {post.date}</p>
          <p className=' text-md mt-[14px] text-justify '>{post.content}</p>
      
          <div className=' flex gapx-3'>
            {post.tags && post.tags.map((tag , index) => {
              return <span key={index} className=' text-blue-500  mx-1 underline font-bold text-xs mt-[5px]' >{`#${tag}`}</span>
            })}
          </div>
        </div>
      )))
   
  
}

    </div>
  )
}

export default Blogs