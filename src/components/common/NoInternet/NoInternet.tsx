
import Button from '../Button'
import Man from './Icons/Man'
import NoInternetBar from './Icons/NoInternetBAr'
import Phone from './Icons/Phone'

const NoInternet = (props: any) => {
  const { text } = props
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className='relative w-full h-full pt-12 xl:pt-24 flex flex-col items-center justify-center'>
      <div className="relative w-full flex items-center justify-center h-fit">
        <div className="flex items-center justify-center absolute w-full top-0 left-0">
          <div className="relative w-fit h-fit">
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
              <NoInternetBar />
            </div>
            <Phone />
          </div>
          <Man />
        </div>
        <div className="xl:w-1/2 bg-[#fff] h-fit p-4 absolute top-[210px]">
          <h1 className="text-center text-dark0b text-[2rem] font-[500] mb-3">Whoops</h1>
          <p className='text-[14px] text-textGrey mb-3'>
            {text
              ? text
              : `We apologize for the inconvenience, but it appears that there is currently no internet connection available. Please check your network settings and ensure that you are properly connected to the internet. Without an internet connection, certain features and services may be inaccessible. Please try troubleshooting steps:
                    Check your Wi-Fi or Ethernet connection, Restart your router or modem, Verify network settings, Contact your Internet Service Provider (ISP)`
            }
          </p>
          <div className="flex justify-center">
            <Button onClick={reload} buttonType='primary' size='md'>Refresh Page</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoInternet