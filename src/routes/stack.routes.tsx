import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabnavigation from "./Tabnavigation.route";
import RegisterPage from "../screens/RegisterPage";
import AuthPage from "../screens/AuthPage";
import ResetPage from "../screens/ResetPage";
import ConfigPage from "../screens/ConfigPage";
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
<<<<<<< Updated upstream
            />      
                <Screen 
                    name="RegisteredPage" 
                    component={RegisteredPage}
            />         
                <Screen 
=======
            />
            <Screen 
                    name="ConfigPage" 
                    component={ConfigPage}
            />   
            <Screen 
>>>>>>> Stashed changes
                    name="ConfigPage" 
                    component={ConfigPage}
            />          
        </Navigator>




    );

}