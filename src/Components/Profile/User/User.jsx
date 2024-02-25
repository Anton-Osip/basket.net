import React from 'react'
import styles from './User.module.css'

import userImage from '../../../assets/image/userImage.jpg'

import { Typography } from 'antd'

const { Title } = Typography

export const User = () => {
  return (
    <div className={styles.user__info}>
      <div className={styles.user}>
        <img src={userImage} alt='user' />
      </div>
      <div className={styles.user__description}>
        <Title className={styles.user__name}>Osipchyk Anton</Title>
        <Title level={4} className={styles.user__burthdat}>
          Date of Birth: 30 October
        </Title>
        <Title level={4} className={styles.user__cite}>
          City: Minsk
        </Title>
        <Title level={4} className={styles.user__education}>
          Education: BNTU
        </Title>
      </div>
    </div>
  )
}
