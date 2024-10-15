import logo from "../assets/logo.svg"

const LoadingScreen = () => {
  return (
    <div className={`bg-slate-950 h-screen flex items-center justify-center transition-opacity duration-500`}>
        <img src={logo} alt="" />
    </div>
  )
}

export default LoadingScreen;