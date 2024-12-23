import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = () => (
  <DialogPrimitive.Root>
    <DialogPrimitive.Trigger className="p-2 bg-blue-500 text-white rounded">
      Abrir Detalhes
    </DialogPrimitive.Trigger>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50" />
      <DialogPrimitive.Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogPrimitive.Title className="text-lg font-bold">
          Detalhes
        </DialogPrimitive.Title>
        <DialogPrimitive.Description className="text-sm">
          Informações detalhadas sobre o item.
        </DialogPrimitive.Description>
        <button className="mt-4 p-2 bg-red-500 text-white rounded">
          Fechar
        </button>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);
