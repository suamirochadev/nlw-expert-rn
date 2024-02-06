import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} />}
        horizontal
        className="max-w-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 20 }}
      />
    </View>
  );
}
