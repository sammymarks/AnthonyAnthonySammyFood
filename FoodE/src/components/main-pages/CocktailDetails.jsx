import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import DataContext from '../../DataContext'




export default function CocktailDetails () {
    const { cocktailDetailData, setCocktailDetailData, isRandomCocktail, setIsRandomCocktail } = useContext(DataContext)

    // const getRandom = async () => {
    //     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    //     console.log("response", response.data.drinks[0])
    //     setCocktailDetailData(response.data.drinks[0])
    //     // console.log("usestate", cocktailDetailData)
    // }

    const parseCocktailDetailData = () => {
        
        // const parseRecipe = () => {
        //     console.log('parseRecipe running')
        //     let divs
        //     for (let i=1; i<=15; i++) {
        //         // console.log(i)
        //         // const ingr = strIngredient[i]
        //         // const meas = strMeasure[i]
                
        //         cocktailDetailData.{`strMeasure${i}`} ? divs +=
        //             <div>{cocktailDetailData.strMeasure[i]} <span className='detail-bold'>{cocktailDetailData.strIngredient[i]}</span></div>
        //         : null 
                
        //     }




        //     const ingr = `strIngredient1`
        //     const meas = `strMeasure1`

        //     return (
        //         // divs
        //         <div>{cocktailDetailData.${meas}} <span className='detail-bold'>{cocktailDetailData.${ingr}}</span></div>
        //     )
        // }

        console.log("cocktailDetailData", cocktailDetailData)
        const data = cocktailDetailData

        const title = data.strDrink
        const imageURL = data.strDrinkThumb
        const videoURL = data.strVideo
        const instructionsEng = data.strInstructions

        const glass = data.strGlass

        return (
            <div className='detail-container'>
                <div className='detail-title'>{title}</div>
                <img className='detail-image' src={imageURL}></img>
                <div className='detail-glass'><span className='detail-bold'>Serve in a </span>{glass}</div>
                <div className='detail-instructions'><span className='detail-bold'>Instructions: </span>{instructionsEng}</div>
                {/* {                    
                    parseRecipe()
                } */}
                <ul className='detail-recipe'>
                    {data.strMeasure1 ? <li>{cocktailDetailData.strMeasure1} <span className='detail-bold'>{cocktailDetailData.strIngredient1}</span></li> : null}
                    {data.strMeasure2 ? <li>{cocktailDetailData.strMeasure2} <span className='detail-bold'>{cocktailDetailData.strIngredient2}</span></li> : null}
                    {data.strMeasure3 ? <li>{cocktailDetailData.strMeasure3} <span className='detail-bold'>{cocktailDetailData.strIngredient3}</span></li> : null}
                    {data.strMeasure4 ? <li>{cocktailDetailData.strMeasure4} <span className='detail-bold'>{cocktailDetailData.strIngredient4}</span></li> : null}
                    {data.strMeasure5 ? <li>{cocktailDetailData.strMeasure5} <span className='detail-bold'>{cocktailDetailData.strIngredient5}</span></li> : null}
                    {data.strMeasure6 ? <li>{cocktailDetailData.strMeasure6} <span className='detail-bold'>{cocktailDetailData.strIngredient6}</span></li> : null}
                    {data.strMeasure7 ? <li>{cocktailDetailData.strMeasure7} <span className='detail-bold'>{cocktailDetailData.strIngredient7}</span></li> : null}
                    {data.strMeasure8 ? <li>{cocktailDetailData.strMeasure8} <span className='detail-bold'>{cocktailDetailData.strIngredient8}</span></li> : null}
                    {data.strMeasure9 ? <li>{cocktailDetailData.strMeasure9} <span className='detail-bold'>{cocktailDetailData.strIngredient9}</span></li> : null}
                    {data.strMeasure10 ? <li>{cocktailDetailData.strMeasure10} <span className='detail-bold'>{cocktailDetailData.strIngredient10}</span></li> : null}
                    {data.strMeasure11 ? <li>{cocktailDetailData.strMeasure11} <span className='detail-bold'>{cocktailDetailData.strIngredient11}</span></li> : null}
                    {data.strMeasure12 ? <li>{cocktailDetailData.strMeasure12} <span className='detail-bold'>{cocktailDetailData.strIngredient12}</span></li> : null}
                    {data.strMeasure13 ? <li>{cocktailDetailData.strMeasure13} <span className='detail-bold'>{cocktailDetailData.strIngredient13}</span></li> : null}
                    {data.strMeasure14 ? <li>{cocktailDetailData.strMeasure14} <span className='detail-bold'>{cocktailDetailData.strIngredient14}</span></li> : null}
                    {data.strMeasure15 ? <li>{cocktailDetailData.strMeasure15} <span className='detail-bold'>{cocktailDetailData.strIngredient15}</span></li> : null}
                    {/* {parseRecipe()} */}
                </ul>
            </div>
        )

    }
    
    useEffect(() => {
        if (isRandomCocktail) {
            // getRandom()
            setIsRandomCocktail(false)
        }
        // console.log("usestate", cocktailDetailData)
    }, [])




    

    

    return (
        <div className="CocktailDetails">
            <h4>CocktailDetails</h4>
            {parseCocktailDetailData()}
        </div>
    )
}   