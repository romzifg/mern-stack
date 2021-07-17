import React from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss'

const DetailBlog = () => {
    return (
        <div className="detail-blog">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore temporibus tenetur in tempora corrupti possimus ullam ea perspiciatis quam.</p>
        </div>
    )
}

export default DetailBlog