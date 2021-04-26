import React from 'react'
import { formatRelative } from 'date-fns'

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
}) => {
  return (
    <div className={'flex'}>
      <div className={'inline-block mb-6 h-16 pr-5 leading-10'}>
        {photoURL ? (
          <img className={'rounded-full float-left h-full'} src={photoURL} alt="avatar"/>
        ) : <img className={'rounded-full float-left h-full'} src={'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'} alt="avatar"/> }
      </div>
      <div>
        <div className={'flex-1'}>
        {displayName ? <span className="ml-3">{displayName}</span> : <span className="ml-3">John Doe</span>}
        {createdAt?.seconds ? (
          <span className={'text-gray-500 ml-3 text-sm font-semibold tracking-wide'}>{formatRelative(new Date(createdAt.seconds * 1000), new Date())}</span>
        ): null}
        </div>
      <p className={'ml-3'}>{text}</p>
      </div>
    </div>
  )
}

export default Message
