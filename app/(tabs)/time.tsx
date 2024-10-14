import { StyleSheet, SafeAreaView, TextInput, Button,View,TouchableOpacity,Text } from "react-native";
import UseData from "@/hooks/UseData";
import MyTabBarIcon from '@/components/Icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

export default function TabTwoScreen() {
  const { data, setData } = UseData();
  const addTextInput = ()=>{
    const newId = data.length > 0 ? data[data.length - 1].id +1 : 1; 
    const newData = [...data,{id:newId, time: ""}]
    setData(newData)
  }
  const handleRemoveInput = (ID: number) =>{
    const newInputs = data.filter((item)=> item.id !== ID )
    setData(newInputs)
  }
  return (
    <View style={style.container}>
      {data.map((item) => (
        <SafeAreaView key={item.id} style={style.conteudo}>
        <TextInput
            style={style.textInput}
            keyboardType="numeric"
            placeholder="00:00"
            maxLength={5}
          />
          <TouchableOpacity
            style={style.button}
            onPress={() => handleRemoveInput(item.id)}
            ><Text><MyTabBarIcon name={faXmark} color="#000"  /></Text>           
          </TouchableOpacity>
        </SafeAreaView>
      ))}
      <Button title="Adicionar horário" color="#841584" onPress={addTextInput} />
      <Button title="Confirmar" color="#67ff0e" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    flex: 1,
    marginRight: 10,
    textAlign: "center",
  },
  button: {
    padding: 10,
  },
});
