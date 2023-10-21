import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterPage from "../screens/RegisterPage";
import AuthPage from "../screens/AuthPage";
import ResetPage from "../screens/ResetPage";

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
            </Navigator>
    );
}