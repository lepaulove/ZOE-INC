import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function WithUserData(OriginalComponent, props) {

    const { userProfileData } = useSelector(mapUserDataState)

  return (
    <OriginalComponent userProfileData={userProfileData} userId={props.userId}/>
  )
}