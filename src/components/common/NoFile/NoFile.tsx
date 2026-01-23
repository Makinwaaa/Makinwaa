import styled from 'styled-components'
import NoFileImage from "./NoFile.svg"

export default function NoFile({ title, desc }: { title?: string, desc?: string }) {
  return (<div>
    <Style>
      <img src={NoFileImage} alt="No Data" />
      <h4 className='mb-1 mt-5'>{title || "No data"}</h4>
      <p className='col-12 col-md-7'>
        {desc || "Oops! No data available at the moment. Please check back later."}
      </p>
    </Style>
  </div>
  )
}

const Style = styled.div`
  display: -ms-grid;
  display: grid;
  place-items: center;
  margin-top: 100px;

  p{
    text-align: center;
    margin-bottom: 33px;
    font-family: Plus Jakarta Sans;
    font-weight: normal;
    font-size: 14px;
    color: #14213d;
  }
`