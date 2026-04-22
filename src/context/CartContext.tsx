import * as React from "react";
import { findItem, type MenuItem } from "@/data/menu";

export type CartLine = { itemId: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  detailed: Array<{ item: MenuItem; qty: number; subtotal: number }>;
};

const Ctx = React.createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([]);

  const add = React.useCallback((id: string) => {
    setLines((prev) => {
      const found = prev.find((l) => l.itemId === id);
      if (found) return prev.map((l) => (l.itemId === id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { itemId: id, qty: 1 }];
    });
  }, []);

  const remove = React.useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.itemId !== id));
  }, []);

  const setQty = React.useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.itemId !== id) : prev.map((l) => (l.itemId === id ? { ...l, qty } : l)),
    );
  }, []);

  const clear = React.useCallback(() => setLines([]), []);

  const detailed = React.useMemo(
    () =>
      lines
        .map((l) => {
          const item = findItem(l.itemId);
          if (!item) return null;
          return { item, qty: l.qty, subtotal: item.price * l.qty };
        })
        .filter((x): x is { item: MenuItem; qty: number; subtotal: number } => x !== null),
    [lines],
  );

  const total = detailed.reduce((s, d) => s + d.subtotal, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <Ctx.Provider value={{ lines, add, remove, setQty, clear, count, total, detailed }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = React.useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
