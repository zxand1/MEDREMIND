import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabnavigation from "./Tabnavigation.route";
import RegisterPage from "../screens/RegisterPage";
import AuthPage from "../screens/AuthPage";
import ResetPage from "../screens/ResetPage";
import Program from "../screens/ProgramPage";
import RegisteredPage from "../screens/RegisteredPage";
const {Screen, Navigator}= createNativeStackNavigator();

export default function StackRoutes(){
    return(
            <Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Screen 
                    name="AuthPage" 
                    component={AuthPage}
                />
                <Screen 
                    name="RegisterPage" 
                    component={RegisterPage}
                />
                <Screen 
                    name="ResetPage" 
                    component={ResetPage}
            />
                <Screen 
                    name="Program" 
                    component={Program}
            />     
                 <Screen 
                    name="Tabnavigation" 
                    component={Tabnavigation}
            />      
                <Screen 
                    name="RegisteredPage" 
                    component={RegisteredPage}
            />         
            </Navigator>
    );
}