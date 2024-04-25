import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindPlayer from "./screens/FindPlayer";
import Matches from "./screens/Matches";
import Match from "./screens/Match";

const Stack = createNativeStackNavigator();
const isMock = true;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FindPlayer}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Matches"
          component={Matches}
          options={{ title: "Matches" }}
        />
        <Stack.Screen
          name="Match"
          component={Match}
          options={{ title: "Match Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
