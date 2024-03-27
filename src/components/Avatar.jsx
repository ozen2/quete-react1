function Avatar(props) {
  return (
    <>
      <img src={props.img} />
      <p>{props.firstName} {props.lastName}</p>
    </>
  )
}

export default Avatar;