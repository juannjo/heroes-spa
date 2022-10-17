import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <div className="container mt-5">
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList 
        publisher='Marvel Comics'
      />
    </div>
  )
}
