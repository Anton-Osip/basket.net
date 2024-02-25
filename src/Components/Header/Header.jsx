import React from 'react'
import styles from './Header.module.css'
import ball from '../../assets/image/logo.svg'

import { Layout } from 'antd'

const { Header } = Layout

export const MyHeader = () => {
  return (
    <Header id={styles.header}>
      <a href='home' className={styles.logo}>
        <img src={ball} alt='logo' />
      </a>
    </Header>
  )
}
