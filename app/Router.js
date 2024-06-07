import { routes } from "./routes"
import { PrivateLayout } from './components/private.layout.component';

export function Router (){
    const path = window.location.pathname

    const publicRoutes = routes.public.find(route=>{
        return route.path === path
    })

    const privateRoutes = routes.private.find(route=>{
        return route.path === path
    })

    if(publicRoutes){
        publicRoutes.page()
        return
    }

    if(privateRoutes){
        if(!localStorage.getItem('token')){
            navigateTo('/not-found')
            return
        }
        const{$content, logic} = privateRoutes.page()
        PrivateLayout($content, logic)
        return
    }

    navigateTo('/not-found')

}

export function navigateTo(path){
    window.history.pushState({},"",window.location.origin + path);
    Router();
}