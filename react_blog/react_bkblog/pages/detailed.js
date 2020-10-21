
import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalculatorFilled, FolderFilled, FireFilled } from '@ant-design/icons'
import '../static/style/pages/detailed.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
// import ReactMarkdown from 'react-markdown'
// import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import { tuple } from 'antd/lib/_util/type'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import axios from 'axios'
//先进行引入
import  servicePath  from '../config/apiUrl'

const Detailed = (props) => {


  // const tocify = new Tocify()
  // renderer.heading = function(text, level, raw) {
  //       const anchor = tocify.add(text, level);
  //       return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  //     };

  const renderer = new marked.Renderer()


  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content)

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >

          <div className='detailed-title'>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      </div>
          <div className='list-icon conter'>
            <span><CalculatorFilled /></span>
            <span><FolderFilled /></span>
            <span><FireFilled /></span>
          </div>
          <div className='detailed-content' dangerouslySetInnerHTML={{ __html: html }}>

          </div>
      左侧
    </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          {/* <div className="datailed-nav comm-box">
            <Affix offsetTop={5}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                {tocify && tocify.render()}
              </div>
            </Affix>

          </div> */}
        </Col>
      </Row>
      <Footer />

    </div>
  )
}
Detailed.getInitialProps = async (context) => {

  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {

    axios(servicePath.getArticleById+id).then(
      (res) => {
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}


export default Detailed