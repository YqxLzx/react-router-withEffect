import {RouterWithEffect} from '../../src/index'
import {useNavigate} from 'react-router-dom' 
import { useEffect } from 'react'
import {   
    DefualtCom,
    TestOne,
    TestTwo,} from './views/index'
import {routes} from '../../src/typed'
import { ChildrenOne } from './views/TestOne/Children/ChildrenOne'
import { ChildrenTwo } from './views/TestOne/Children/ChildrenTwo'
const flatRoutes:routes = [
    {
        path: '/',
        element: <DefualtCom />,
        title:'defualt'
    },
    {
        path: '/test1',
        element: <TestOne />,
        title:'test1',
        children:[
            {
                path:'/test1/child1',
                element:<ChildrenOne/>,
                title:'child1',
            },
            {
                path:'/test1/child2',
                element:<ChildrenTwo/>,
                title:'child2',
            },
        ]
    },
    {
        path:'/test2',
        element:<TestTwo/>,
        title:'test2',
        children:[

        ]
    },
    {
        path: '*',
        element: <div>there is nothing</div>
    }
]

export default function App(){
    let nav = useNavigate()
    useEffect(() => {
        return () => {nav('/'); console.log('卸载了',)}
    },[])
    return(
        <div>
            <h1>children_routes</h1>
       
                <RouterWithEffect routes={flatRoutes}/>
         
        </div>
    )
}



