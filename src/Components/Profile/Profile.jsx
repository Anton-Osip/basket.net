import React from 'react'
import styles from './Profile.module.css'

import banner from '../../assets/image/banner.jpg'

import { User } from './User/User'
import { NewPost } from './NewPosts/NewPosts'
import { Posts } from './Posts/Posts'

export const Profile = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src={banner} alt='banner' className={styles.banner__img} />
      </div>
      <User />
      <NewPost />
      <Posts />
    </>
  )
}
