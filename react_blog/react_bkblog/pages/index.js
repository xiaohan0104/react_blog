import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List } from 'antd'
import { CalendarFilled, FolderFilled, FireFilled } from '@ant-design/icons'
import axios from 'axios'
import '../static/style/pages/index.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import  servicePath  from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const Home = ( list ) => {
  const [mylist, setMylist] = useState(list.data)



  return (
    <>
      <Head>
        <title>Home</title>
     
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">

        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
            header={<div>最新</div>}
            itemLayout='vertical'
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className='list-title'>
                  <Link href = {{pathname:'/detailed',query:{id:item.id}}}><a>{item.title}</a></Link>
                  
                  </div>
                <div className='list-icon'>
                  <span><CalendarFilled />{item.addTime}</span>
                  <span><FolderFilled />{item.typeName}</span>
                  <span><FireFilled />{item.view_count}</span>
                </div>
                {/* <div className='list-context' 
                dangerouslySetInnerHTML = {{__html: marked( item.introduce)}}
            >{item.introduce}</div> */}
              </List.Item>
            )}

          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>

      </Row>
      <Footer />

    </>
  )
}



Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log('2222222222222',res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}



export default Home