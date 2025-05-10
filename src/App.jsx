import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './CustomHooks/Button'
import AlertBox from './Day-4Components/AlertBox'
import Subscribe from './Day-4Components/Subscribe'
import Products from './Day-5/Products'
import Drive from './Day-5/Drive'
import Props from './Day-5/Props'
import ObjectasProps from './Day-5/ObjectasProps'
import Button1 from './components/Button1'
import Button2 from './Button2'
import Todo from './components/Todo'
import Timer from './components/Timer'
import MainCounter from './components/Counters/MainCounter'
import CartContainer from './components/Cart/CartContainer'
import CartContainer2 from './components/Cart2/CartContainer2'
import useEffect1 from './components/useEffect1'
import Mapping from './day-6/Mapping'
import Figma from './day-6/figmaTabs/Figma'
import MoviesContainer from './Movies/MoviesContainer'
import Timer1 from './Timer.jsx/Timer1'
import Todo1 from './Json server/Todo1'
import AddTodo from './Json server/AddTodo'
import UserefHook from './useRef/UserefHook'
import UseCallbackHook from './useRef/UseCallbackHook'
import { Navbar, UseContextHook } from './ContextAPI/UseContextHook'
import Form from './FormSubmission/Form'
import Notes from './revise/Notes'
import Home from './ContextAPI-modal/Home'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Router/components/Navigation'
import AllRoutes from './Router/components/AllRoutes'
import ThemeToggle from './TanstackQuery/ThemeToggle'
import SearchForm from './TanstackQuery/SearchForm'
import Gallery from './TanstackQuery/Gallery'
import { Context } from './ContextAPI-modal/Context'
import Counter from './useReducer,Redux/Counter'
import Dashboard from './fakeStore_ReduxToolit/Dashboard'
import Counter_333 from './ReduxToolkit/Counter_333'
import Otp from "./OTPLogin/Otp"
import Page from './Modal/Page'
import Routes_fake from './fakeStore_ReduxToolit/Routes_fake'
import Checkbox from './CheckboxRadioBtn/Checkbox'
import SelectAllCheckBox from './CheckboxRadioBtn/SelectAllCheckBox'
import Memo from './Reactmemo/Memo'
import TransferList from './Challenges/TransferList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Components from './Bootstrap/Components'
import Form1 from './FormValidations/Form1'
import Validation from './FormValidations/Validation'
import Layout from './Routing_setup/components/Layout'
import LoginProvider from './Routing_setup/components/LoginProvider'
import BankAccount from './reducerWithContext/BankAccount'
import AccountContext from './reducerWithContext/AccountContext'
import  Pagination  from './Pagination/Pagination'
import InputWithItems from './InputItems/InputWithItems'
import ColorCyclingBox from './Challenges/ColorCyclingBox'


function App() {
  const [count, setCount] = useState(0);
  const handleclick = ()=>{setCount(count+1)}
  let style = {
    color:"red",
    backgroundColor:"green"
  }

  let skills = ["html","css","javascript"];
  const obj = {name:"vamshi",age:25,skills:["html","css","js","node","mongodb","express"]};
  const obj1 = {school:"nhs",clg:"kits"}

  const status = false;
  return (
    <>
      {/* <Button label={"clickme"} onClick = {()=>{alert("clicked!")}}style={style}/>
      <AlertBox message={"Operation successful"} type={"success"}/>
      <AlertBox message={"Operation failed"} type={"warning"}/>
      <Subscribe/> */}
      {/* <Products/> */}
      {/* <Drive/> */}
      {/* <Props skills = {skills}/> */}
      {/* <ObjectasProps {...obj}/> */}
      {/* <ObjectasProps obj = {obj1} />  here we are sending the whole object , to consume it in child we use props.obj.name*/} 
      {/* <Button1/>  */}
      {/* <Button2 count= {count} handleclick= {handleclick}/> */}
      {/* <Button2 count= {count} handleclick= {handleclick}/> */}
      {/* <Todo/> */}
      {/* <Timer/> */}
      {/* <MainCounter/> */}
      {/* <CartContainer/> */}
      {/* <CartContainer2/> */}
      {/* {status&&<UseEffect1/>} */}
      {/* <Mapping/> */}
      {/* <Figma/> */}
      {/* <MoviesContainer/> */}
      {/* <Timer1/> */}
      
      {/* <Todo1/> */}
      {/* <UserefHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <UseContextHook/> */}
      {/* <Form/> */}
      {/* <Notes/> */}
      {/* <Navigation/>
      <AllRoutes/> */}
{/*       
     <ThemeToggle/>
     <SearchForm/>
     <Gallery/>  */}

     {/* <Context>
     <Home/>
     </Context> */}
     {/* <Counter/> */}
     {/* <Dashboard/> */}
     {/* <Counter_333/> */}
     
     {/* <Otp size={6}/> */}
     {/* <Page/> */}
     {/* <Dashboard/> */}
     {/* <Routes_fake/> */}
     {/* <Checkbox/> */}
     {/* <SelectAllCheckBox/> */}
     {/* <Memo/> */}
     {/* <TransferList/> */}
     {/* <Button/> */}
     {/* <Components/> */}
     {/* <Form1/> */}
     {/* <Validation/> */}

     {/* <LoginProvider>
     <Layout/>
     </LoginProvider> */}

     {/* <AccountContext>
     <BankAccount/>
     </AccountContext> */}
{/* <Pagination/> */}
{/* <InputWithItems/> */}

<ColorCyclingBox/>
     
    </>
  )
}

export default App
