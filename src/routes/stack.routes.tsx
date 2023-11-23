import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabnavigation from "./Tabnavigation.route";
import ConfigPage from "../screens/ConfigPage";
import RegisteredPage from "../screens/RegisteredPage";
import HistoricPage from "../screens/HistoricPage";
import NewRegistrationPage from "../screens/NewRegistrationPage";
import ProgramPage from "../screens/ProgramPage";
import Teste from "../screens/Teste/teste";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen
                name="Tabnavigation"
                component={Tabnavigation}
            />
            <Stack.Screen
                name="ProgramPage"
                component={ProgramPage}
            />
            <Stack.Screen
                name="RegisteredPage"
                component={RegisteredPage}
            />
            <Stack.Screen
                name="ConfigPage"
                component={ConfigPage}
            />
            <Stack.Screen
                name="HistoricPage"
                component={HistoricPage}
            />
            <Stack.Screen
                name="NewRegistrationPage"
                component={NewRegistrationPage}
            />

            <Stack.Screen
                name="Teste"
                component={Teste}
            />
        </Stack.Navigator>
 
 );
}

