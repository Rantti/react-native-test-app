import React, { useState, useEffect } from "react";
import { View } from "react-native";

// eslint-disable-next-line no-unused-vars
const Matches = ({ navigation, route }) => {
  const { player } = route.params;
  // eslint-disable-next-line no-unused-vars
  const [matches, setMatches] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(
    () => {
      let ignore = false;
      setAccountInfo({});
      fetch(`https://api.opendota.com/api/players/${player.account_id}`)
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) {
            setAccountInfo(data);
          }
        });
      return () => {
        ignore = true;
      };
    },
    // Run this effect only if player has changed
    [player],
  );
  // Need to plan this more
  // - some short player info bar on top of page
  // - last 5 matches-list, where you can click from
  // - click on match -> navigation.navigate('Match', {match_id})
  return (
    <View>
      <div>
        <h2>
          Player {player.personaname}({player.account_id}) matches:
        </h2>
      </div>
      <div className="table">
        <div></div>
      </div>
    </View>
  );
};

export default Matches;
