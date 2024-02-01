"use client"
const LayoutProvider = ({ children , }) => {

    return (
      <>
     <div className={` w-full bg-primary-blue500 text-white dark:bg-primary-white dark:text-black`}>
        {children}
        </div>
      </>    
    )
}

export default LayoutProvider