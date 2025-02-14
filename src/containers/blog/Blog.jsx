import React from 'react'
import Article from '../../components/article/Article';
// import blog01 from './import';
import {blogNeed, blog01} from './import.js';
import './blog.css'


function Blog() {
  return (
    <div className="gpt3__blog section___padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient___text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article img={blog01} date="Sep 26, 2021" text="Understanding Organizational Structures" para="Dive into the fundamentals of organizational frameworks and how they shape the way businesses operate and grow in today's dynamic environment."/>
        </div>
        <div className="gpt3__blog-container_groupB">
          {/* <Article img={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article img={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article img={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article img={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
          {blogNeed.map((blog, index) => (
            <Article key={blog.id} img={blog.image} date={blog.date} text={blog.title} para={blog.para} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog;
