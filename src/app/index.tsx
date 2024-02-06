import { View } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5} />

      <View className="flex-row gap-4">
        <CategoryButton title="Lanche do dia" isSelected />
        <CategoryButton title="Lanche do dia" />
        <CategoryButton title="Lanche do dia" />
      </View>
    </View>
  );
}
