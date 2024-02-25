import React from 'react'
import styles from './App.module.css'
import { MyHeader } from './Components/Header/Header'
import { MySider } from './Components/Sider/Sider'
import { Profile } from './Components/Profile/Profile'

import { Layout } from 'antd'

const { Content } = Layout

export const App = () => {
  return (
    <Layout>
      <MyHeader />
      <Layout>
        <MySider />
        <Content id={styles.content}>
          <Profile />
        </Content>
      </Layout>
    </Layout>
  )
}
