import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog">
            <img className="img-cover" src={RegisterBg} alt="thumb"/>
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore temporibus tenetur in tempora corrupti possimus ullam ea perspiciatis quam.</p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={() => history.push('/')}/>
        </div>
    )
}

export default DetailBlog