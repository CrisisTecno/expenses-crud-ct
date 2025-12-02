import { createContext, useState, type ReactNode } from "react";

// aca si o si tenia que aplicar tipado, los errores no me permitian usar el context sin el jsx 
// al igual que aplicacmos el estado para la catergoria deberiamos referencia a  los inputs para poder editar
// o tambien se puede crear un portal(modal) que nos sirva para editar el expense
// gracias

interface FilterContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  selectedCategory: "",
  setSelectedCategory: () => {},
});

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
}