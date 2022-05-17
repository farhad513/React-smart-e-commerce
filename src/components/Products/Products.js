import React, {useState, useEffect} from 'react'

const Products = () => {
    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState();
    let compoentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products/");
            if (compoentMounted) {
                setdata(await res.clone().json())
                setFilter(await res.json())
                setLoading(false)
            }
            return  () => {
                compoentMounted = false
            }
        }
        getProducts();
    },[])
  return (
      <>
      
      </>
  )
}

export default Products