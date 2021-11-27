import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import ButtonComp from '../CustomReactProject/src/ButtonComponent/ButtonComponent';
const keyVal = 'value';
const App: () => Node = () => {
  const [customList, setCustomList] = useState([]);
  const [text, setText] = useState();
  const [number, setNumber] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(list);
    setCustomList(list);
  }, [list]);
  const handleAdd = (text, number) => {
    let arr = [];
    if (text !== null && number !== null) {
      arr.push(...customList);
      arr.push({
        id: customList.length + 1,
        name: text,
        value: parseInt(number, 10),
        date: new Date(),
      });
      setCustomList(arr);
    }
  };

  const Item = ({title, value}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titleRight}>{value}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.name} value={item.value} />;

  const filterIncrease = () => {
    setList([]);
    const ascending = customList.sort(SortArrayDesc);

    setTimeout(() => {
      setList(ascending);
    }, 100);
    return ascending;
  };

  function SortArrayAsc(x, y) {
    if (x[keyVal] < y[keyVal]) {
      return -1;
    }
    if (x[keyVal] > y[keyVal]) {
      return 1;
    }
    return 0;
  }
  const filterDecrease = () => {
    setList([]);
    const desc = customList.sort(SortArrayAsc);
    setTimeout(() => {
      setList(desc);
    }, 100);
    return desc;
  };
  function SortArrayDesc(x, y) {
    if (x[keyVal] > y[keyVal]) {
      return -1;
    }
    if (x[keyVal] < y[keyVal]) {
      return 1;
    }
    return 0;
  }
  const filterDate = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ButtonComp
        filterIncrease={filterIncrease}
        filterDecrease={filterDecrease}
        filterDate={filterDate}
      />
      <FlatList
        data={customList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View>
        <Text>{'Name'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          placeholder="please enter price"
          value={text}
        />
        <Text>{'Price'}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber}
          value={number}
          placeholder="please enter price"
          keyboardType="numeric"
        />
        <Button title="Add" onPress={() => handleAdd(text, number)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#00000',
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
  },
  titleRight: {
    fontSize: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
