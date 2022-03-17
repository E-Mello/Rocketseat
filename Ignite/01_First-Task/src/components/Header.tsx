import { ToastContainer } from 'react-toastify'
import '../styles/header.scss'

export function Header() {
  return (
    <><ToastContainer
      position="top-right"
      autoClose={700}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false} />
      
      <header className="header">
        <div>
          <img src="/logo.svg" alt="to.do" />
        </div>
      </header></>
  )
}