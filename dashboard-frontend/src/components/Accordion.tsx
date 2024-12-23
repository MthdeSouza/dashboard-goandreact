import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { useQuery } from "@tanstack/react-query";
import {
  fetchBestSellers,
  fetchMostPopular,
  fetchOutOfStock,
} from "../services/productsService";
import TableView from "./TableView";

export const Accordion = () => {
  const { data: bestSellers, isLoading: isLoadingBestSellers } = useQuery({
    queryKey: ["bestSellers"],
    queryFn: fetchBestSellers,
  });
  const { data: mostPopular, isLoading: isLoadingMostPopular } = useQuery({
    queryKey: ["mostPopular"],
    queryFn: fetchMostPopular,
  });
  const { data: outOfStock, isLoading: isLoadingOutOfStock } = useQuery({
    queryKey: ["outOfStock"],
    queryFn: fetchOutOfStock,
  });

  if (isLoadingOutOfStock || isLoadingMostPopular || isLoadingBestSellers)
    return <p>Carregando...</p>;

  const dashboardOptions = {
    "Mais Vendidos": bestSellers,
    "Mais Populares": mostPopular,
    Esgotados: outOfStock,
  };

  return (
    <AccordionPrimitive.Root type="single" collapsible>
      {Object.entries(dashboardOptions).map(([key, value], index) => (
        <AccordionPrimitive.Item
          key={index}
          value={`section-${index}`}
          className="border-b border-gray-300 m-2"
        >
          <AccordionPrimitive.Header className="flex justify-between p-4 cursor-pointer">
            <AccordionPrimitive.Trigger className="font-bold">
              {key}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="p-4 text-gray-600">
            <p>Conteúdo de {key}...</p>
            <TableView data={value} />
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};
