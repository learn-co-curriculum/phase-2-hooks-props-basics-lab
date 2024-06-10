import React from "react";

const Links = (props) => {
  console.log(props)
  return (
    <div>
    <h3>Links</h3>
    <a href = {props.github}>https://github.com/liza</a>
    <a href = {props.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  )
}


export default Links;
