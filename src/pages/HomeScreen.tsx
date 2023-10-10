import React,{useState} from 'react'
import NavBarComponent from '../components/NavBarComponent'
import '../styles/homeScreen.css'
import SearchBarComponent from '../components/SearchBarComponent'
import SuggestionBoxComponent from '../components/SuggestionBoxComponent'
import {fakeProducts} from '../faker';
import { product } from '../utils/productInterface'


const HomeScreen= () => {
    const [inFocus,setInFocus]=useState<boolean>(false)
    const [seachBarValue,setSearchBarValue]=useState<string>("")
    let result:product[]=fakeProducts.slice(0,5);

    if(seachBarValue!==""){
        result=fakeProducts.filter((item) => item.name.toLowerCase().includes(seachBarValue.toLowerCase())).slice(0,5);
    }

  return (
    <>
    <div style={{backgroundImage:"url('./assets/bg.png')"}} className='home-container'>
    <NavBarComponent/>
    <SearchBarComponent  searchBarValue={seachBarValue} setSearchBarValue={setSearchBarValue}  setInFocus={setInFocus} />
    {inFocus &&<SuggestionBoxComponent products={result}/>}
    </div>
    </>
  )
}

export default HomeScreen
