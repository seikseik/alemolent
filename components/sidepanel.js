const Sidepanel = (props) => {
  const open = props.open
  return (
    <div className={open ? 'sidepanel open' : 'sidepanel'}>
      <div className="sidepanel__wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Sidepanel
