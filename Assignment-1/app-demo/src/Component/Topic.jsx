import React from 'react'

export default function Topic(props) {
    const sidebar = (
        <ul>
            {props.name.map((post)=>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )
    const content = props.name.map((post)=>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}
