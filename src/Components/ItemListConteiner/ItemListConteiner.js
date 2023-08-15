import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../Services/Firebase"
import ItemList from "../ItemList/ItemList"
import { DotSpinner } from '@uiball/loaders'

/*Contenedor de la lista de Cards */
const ItemListConteiner = ({ greeting }) => {
    const [Products, SetProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
   
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(Response => {
                SetProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
            setIsLoading(false)
    }, [categoryId])

    

    if (isLoading) {
        return <DotSpinner size={40} speed={1} color="black" />
    }

    return (
        <div>
            <ItemList Products={Products} />
        </div>
    )
}


export default ItemListConteiner