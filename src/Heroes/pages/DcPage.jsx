import { HeroList } from '../../Heroes'

export const DcPage = () => {
  return (
   <div className='container mt-5'>
    <h1>DC Comics</h1>
    <hr />

    <HeroList 
      publisher="DC Comics"
    />
   </div>
  )
}
