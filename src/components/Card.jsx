import React from 'react'

const Card = ({ title, tag, date, desc, author, URL, extra, RMlink }) => {
  return (
    <div>
      <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">{date}</span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{tag}</a>
        </div>

        <div class="mt-2">
          <p href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</p>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
        </div>

        <div class="flex items-center justify-between mt-4">
          <a href={RMlink} class="text-blue-600 dark:text-blue-400 hover:underline">{RMlink ? 'Read More' : ''}</a>

          <div class="flex items-center">
            <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={URL || "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"} alt="avatar"></img>
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{author}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
