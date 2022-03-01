import {IRoutes, RoutesNames} from "./consts-routes";
import {LoginPage} from "../pages/login-page/login-page";
import {RegistrationPage} from "../pages/registration-page/registration-page";
import {HomePage} from "../pages/home-page/home-page";
import { ProfilePage } from "../pages/profile-page/profile-page";

const publicRoutes: IRoutes[] = [
    {path: RoutesNames.HOME, component: HomePage, exact: true},
    {path: RoutesNames.LOGIN, component: LoginPage, exact: true},
    {path: RoutesNames.REGISTRATION, component: RegistrationPage, exact: true},
    {path: RoutesNames.PROFILE, component: ProfilePage, exact: true}
]

export {publicRoutes}