
import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'
import { CalculatorFilled, FolderFilled, FireFilled } from '@ant-design/icons'
import '../static/style/pages/detailed.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const Detailed = () => (
  <>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>
          <Breadcrumb className='bread-div'>
            <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href='/mylist'>视频</a></Breadcrumb.Item>
            <Breadcrumb.Item><a >xxx</a></Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='detailed-title'>
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </div>
        <div className='list-icon conter'>
            <span><CalculatorFilled /></span>
            <span><FolderFilled /></span>
            <span><FireFilled /></span>
        </div>
        <div className='detailed-content'>

        </div>
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Advert />
      </Col>
    </Row>
    <Footer />

  </>
)

export default Detailed