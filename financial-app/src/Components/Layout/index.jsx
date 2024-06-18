

const Layout=({children})=>{
 const activeStyle='underline underline-offset-4'

    return(
      <div className="flex flex-col items-center mt-20">
         {children}
      </div>
    )
}
export default Layout