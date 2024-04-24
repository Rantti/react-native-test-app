import React, { useState } from "react";
import { TextInput, View } from "react-native";

const FindPlayer = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchByQuery = async () => {
    const response = await fetch(
      `https://api.opendota.com/api/search?q=${searchQuery}`,
    );
    const results = await response.json();
    if (results.length > 0) {
      setSearchResults(results);
    }
  };

  const searchResultsHtml = searchResults.map((player) => (
    <li key={player.account_id}>
      <a onClick={() => navigation.navigate("Matches", { player })}>
        <span>{player.personaname}</span>
        <img src={player.avatarfull} alt={player.personaname} />
      </a>
    </li>
  ));

  return (
    <View>
      <div>
        <TextInput
          placeholder="Type player name here"
          onChangeText={(searchQuery) => setSearchQuery(searchQuery)}
          defaultValue={searchQuery}
        />
        <button onClick={searchByQuery}>Search!</button>
      </div>
      <div>
        <h2>Search Results</h2>
        <ul>{searchResultsHtml}</ul>
      </div>
    </View>
  );
};

export default FindPlayer;
