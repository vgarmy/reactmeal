import React, { useEffect,useState } from 'react'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

function Body(){

    const[items,setItems]=useState([])

    useEffect(() =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{

            console.log(res.data);

            setItems(res.data.meals)

        }).catch(err=>{
            
            console.log(err);

        })
    },[])

    const itemsList=items.map((obj) => {
        return <div className='col-md-4'>
                <p>{obj.strMeal}</p>
                <img src={obj.strMealThumb} className='img-fluid' />
                <p>{obj.idMeal}</p>
            </div>
    })

    return(
    <div>
        <div className='row'>
            {itemsList}
        </div>
    </div>
    )
}

export default Body