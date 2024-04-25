import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as playerMock from './../mock/player.json';
import * as matchesMock from './../mock/matches.json';

// eslint-disable-next-line no-unused-vars
const Matches = ({ navigation, route }) => {
  const { player } = route.params;
  // eslint-disable-next-line no-unused-vars
  const [matches, setMatches] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(
    () => {
      setAccountInfo(playerMock.default);setMatches(matchesMock.default);return () => { ignore = true; };
      let ignore = false;
      setAccountInfo({});
      fetch(`https://api.opendota.com/api/players/${player.account_id}`)
        .then((res) => res.json())
        .then((data) => {
          if (!ignore) {
            setAccountInfo(data);
          }
        });

        // @TODO: fetch matches

      return () => {
        ignore = true;
      };
    },
    // Run this effect only if player has changed
    [player],
  );

  const matchesList = matches.map(match => (
    <div class="table-row" key={match.match_id}>
      <div class="td"><a onClick={() => navigation.navigate('Match', { match })}>{match.match_id}</a></div>
      <div class="td">{match.start_time}</div>
      <div class="td">{match.duration}</div>
      <div class="td">{match.kills}</div>
      <div class="td">{match.deaths}</div>
      <div class="td">{match.assists}</div>
    </div>
  ))
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
        <div class="table-header">
          <div class="th">match_id</div>
          <div class="th">start_time</div>
          <div class="th">duration</div>
          <div class="th">kills</div>
          <div class="th">deaths</div>
          <div class="th">assists</div>
        </div>
        <div class="table-body">
          {matchesList}
        </div>
      </div>
    </View>
  );
};

export default Matches;
