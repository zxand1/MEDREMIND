import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabnavigation from "./Tabnavigation.route";
import ConfigPage from "../screens/ConfigPage";
import RegisteredPage from "../screens/RegisteredPage";
import HistoricPage from "../screens/HistoricPage";
import NewRegistrationPage from "../screens/NewRegistrationPage";
import ProgramPage from "../screens/ProgramPage";
import AuthPage from "../screens/AuthPage/AuthPage";
const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
    return (
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
                name="Tabnavigation"
                component={Tabnavigation}
            />
            <Screen
                name="ProgramPage"
                component={ProgramPage}
            />
            <Screen
                name="RegisteredPage"
                component={RegisteredPage}
            />
            <Screen
                name="ConfigPage"
                component={ConfigPage}
            />
            <Screen
                name="HistoricPage"
                component={HistoricPage}
            />
            <Screen
                name="NewRegistrationPage"
                component={NewRegistrationPage}
            />
            
            
        </Navigator>




    );

}