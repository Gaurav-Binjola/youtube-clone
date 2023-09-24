

const LeftNavMenuItem = ({text,icon, className, action}) => {

  return (
    <div className={`${className} text-white text-sm cursor-pointer px-3 h-10 flex items-center mb-[1px] rounded-lg hover:bg-white/[0.5]`}
      onClick={action}
    >
      <span className=" mr-5 ">
        {icon}
      </span> {text}
    </div>
  )
}

export default LeftNavMenuItem