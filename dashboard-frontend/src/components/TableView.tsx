import { Table } from "@radix-ui/themes";

const TableView = ({ data }: any) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Categoria</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Preço médio</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Vendidos</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Estoque Disponivel</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((product: any, index: number) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>{product.id}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{product.name}</Table.RowHeaderCell>
            <Table.Cell>{product.category}</Table.Cell>
            <Table.Cell>{product.price}</Table.Cell>
            <Table.Cell>{product.sold}</Table.Cell>
            <Table.Cell>{product.stock}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableView;
